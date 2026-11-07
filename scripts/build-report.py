"""Build the PDF using the project's paper sketches, Figma exports and mobile screenshots."""
from io import BytesIO
from pathlib import Path
from xml.sax.saxutils import escape

from PIL import Image
from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import Paragraph, Table, TableStyle
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.utils import ImageReader
from reportlab.lib import colors

ROOT = Path(__file__).resolve().parents[1]
DOCS = ROOT / 'docs'
OUT = DOCS / 'BiteCraft_Project_Report.pdf'
FIGMA = 'https://www.figma.com/design/uXvZEoR0YnAhbe41bstIhl/food-deliver?node-id=0-1'

font_dir = Path('/usr/share/fonts/truetype/dejavu')
if (font_dir / 'DejaVuSans.ttf').exists():
    pdfmetrics.registerFont(TTFont('Report', str(font_dir / 'DejaVuSans.ttf')))
    pdfmetrics.registerFont(TTFont('ReportBold', str(font_dir / 'DejaVuSans-Bold.ttf')))
    pdfmetrics.registerFontFamily('Report', normal='Report', bold='ReportBold')
    FONT, BOLD = 'Report', 'ReportBold'
else:
    FONT, BOLD = 'Helvetica', 'Helvetica-Bold'

W, H = A4
M = 46
WIDTH = W - 2 * M
body = ParagraphStyle('Body', fontName=FONT, fontSize=10.5, leading=15, spaceAfter=9)
heading = ParagraphStyle('Heading', fontName=BOLD, fontSize=12.5, leading=18, spaceAfter=7)
caption = ParagraphStyle('Caption', fontName=FONT, fontSize=9, leading=12, spaceAfter=10)
title = ParagraphStyle('Title', fontName=BOLD, fontSize=21, leading=27, spaceAfter=16)
pdf = canvas.Canvas(str(OUT), pagesize=A4, pageCompression=1)
pdf.setTitle('BiteCraft UI UX Design Report')
pdf.setAuthor('Sanyu Judith')
pdf.setSubject('Mobile food ordering interface')
y = H


def text(content, style=body):
    global y
    p = Paragraph(content, style)
    _, height = p.wrap(WIDTH, H)
    if y - height < 52:
        raise ValueError('Content exceeds page: ' + content[:70])
    p.drawOn(pdf, M, y - height)
    y -= height + style.spaceAfter


def page(number, name):
    global y
    if number > 1:
        pdf.showPage()
    pdf.setFillColor(colors.black)
    pdf.setFont(FONT, 8.5)
    pdf.drawString(M, H - 28, 'BITECRAFT  |  UI/UX DESIGN')
    pdf.drawString(M, 25, 'Sanyu Judith')
    pdf.drawRightString(W - M, 25, str(number))
    y = H - 62
    text(name, title)


def section(name):
    text(name, heading)


def image(path, x, top, max_width, max_height):
    """Leave the evidence file intact and compress its PDF representation."""
    with Image.open(DOCS / path) as source:
        width, height = source.size
        scale = min(max_width / width, max_height / height)
        data = BytesIO()
        source.convert('RGB').save(data, format='JPEG', quality=85, optimize=True)
        data.seek(0)
        w, h = width * scale, height * scale
        pdf.drawImage(ImageReader(data), x + (max_width - w) / 2, top - h, w, h)
    return h


def images(items, max_height):
    global y
    gap = 18
    col_width = (WIDTH - gap * (len(items) - 1)) / len(items)
    for i, (_, label) in enumerate(items):
        p = Paragraph(label, heading)
        _, height = p.wrap(col_width, 45)
        p.drawOn(pdf, M + i * (col_width + gap), y - height)
    y -= 29
    height = max(image(path, M + i * (col_width + gap), y, col_width, max_height)
                 for i, (path, _) in enumerate(items))
    y -= height + 13


def table(headers, rows, widths=None):
    global y
    data = [[Paragraph(escape(str(value)), ParagraphStyle('Cell',
             fontName=BOLD if i == 0 else FONT, fontSize=9, leading=13))
             for value in row] for i, row in enumerate([headers, *rows])]
    t = Table(data, colWidths=widths or [WIDTH / len(headers)] * len(headers))
    t.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), colors.HexColor('#F1F1F1')),
        ('GRID', (0, 0), (-1, -1), .4, colors.HexColor('#D9D9D9')),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('TOPPADDING', (0, 0), (-1, -1), 7),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 7),
        ('LEFTPADDING', (0, 0), (-1, -1), 9),
        ('RIGHTPADDING', (0, 0), (-1, -1), 9),
    ]))
    _, height = t.wrap(WIDTH, H)
    if y - height < 52:
        raise ValueError('Table exceeds page')
    t.drawOn(pdf, M, y - height)
    y -= height + 12


page(1, 'BiteCraft UI UX Design Report')
text('<b>Student</b> Sanyu Judith<br/><b>Project</b> Mobile food ordering interface<br/><b>Date</b> 7 November 2026')
section('Introduction')
text('BiteCraft helps a customer browse food and drinks, customise a meal and review the cost before confirming an order. The interface uses HTML, CSS and JavaScript. Its main journey is Home, Menu, Food details, Cart, Checkout and Confirmation.')
section('User research')
text('The research focuses on the tasks involved in ordering food on a phone. The paper sketches and Figma screens were reviewed, then the main tasks were followed through the interface. This task analysis identified a need for visible prices, quick search, simple meal choices and an itemised total.')
table(['Intended users', 'Main need'], [
    ['Students', 'Compare food choices within a budget'],
    ['Busy workers', 'Choose a meal and enter delivery details quickly'],
    ['Returning customers', 'Find favourites and order familiar dishes again'],
], [170, WIDTH - 170])
section('Problem statement')
text('Ordering is difficult to check when dish options, quantities and delivery costs are spread across different steps. BiteCraft groups the important information and shows the total before confirmation.')
section('Main requirements')
text('Users should be able to browse and search, inspect a dish, choose options, edit the cart and enter delivery details. The interface should explain invalid entries, show confirmation and provide easy navigation. Prices use Uganda shillings, and the main food lists have one card per row.')

page(2, 'Ideas and paper sketches')
text('A separate food details page gives size, spice, quantity and notes enough space. A cart review lets the customer check these choices and the cost before checkout.')
section('Low fidelity design')
h = image(Path('design/paper-sketches.jpeg'), M, y, WIDTH, 285)
y -= h + 10
text('Hand-drawn sketches of Login, Home, Food details and Cart.', caption)
text('The sketches establish the position of the login fields, search, food photographs, quantity controls, totals and bottom navigation. They guide the arrangement of the high fidelity screens.')
section('Design decisions')
table(['Element', 'Choice'], [
    ['Brand and type', '#B41F04 primary colour, Plus Jakarta Sans headings and Inter body text'],
    ['Food lists', 'One full-width card per row, with separate horizontal category and popular-food rows'],
    ['Navigation', 'Home, Menu, Cart and Profile'],
    ['Profile photograph', 'Sanyu Judith image, changed through Settings'],
], [135, WIDTH - 135])
text('A card groups the photo, name and price, rating, timing and delivery information, followed by Add to Cart. Labels, focus styles and feedback messages help users follow the next action.')

page(3, 'High fidelity Figma design')
text('The Figma file contains seven mobile screens: Welcome, Login, Home, Menu, Food details, Cart and Profile. These exports show the central ordering journey. Each phone frame is 390 by 844 pixels.')
images([(Path('design/figma-menu.png'), 'Menu'),
        (Path('design/figma-item.png'), 'Food details'),
        (Path('design/figma-cart.png'), 'Cart')], 450)
text('The Menu supports discovery, the details page supports customisation, and the Cart groups quantities, delivery information and the total. Repeated colours, type and navigation connect the screens.')
section('Design file')
text(f'<link href="{FIGMA}">Open the BiteCraft Figma project</link>')
text('Direct links to all seven frames and the supplied overview images are included in docs/design/README.md.')

page(4, 'Mobile Home and Menu')
text('The website keeps the mobile structure at a maximum width of 440 pixels. Search and categories help users find a dish, while visible UGX prices support comparison. The menu contains 41 dishes across 11 categories.')
images([(Path('screenshots/home.jpg'), 'Home'),
        (Path('screenshots/menu.jpg'), 'Menu')], 435)
section('Web implementation')
text('HTML loads the page, CSS controls the layout, and JavaScript handles navigation, forms and calculations. Main food cards keep the photograph, name, price and Add to Cart action together. Food photographs use external URLs.')
text('These screenshots show the application at a phone width of 390 pixels. Category and popular-food rows scroll horizontally, while the main food lists remain in one column.')

page(5, 'Meal choices and cart review')
text('The details page records size, spice, quantity and an optional kitchen note. The cart preserves these choices and calculates the subtotal, discount, delivery fee and total.')
images([(Path('screenshots/item.jpg'), 'Food details'),
        (Path('screenshots/cart.jpg'), 'Cart')], 365)
text('The example contains two Large burgers with Hot spice and the note "No onions, please." The welcome code is applied in the cart.')
table(['Calculation', 'Amount'], [
    ['Two Large burgers at 40,000 UGX each', '80,000 UGX'],
    ['BITEWELCOME discount', '-5,000 UGX'],
    ['Delivery fee', '3,500 UGX'],
    ['Total', '78,500 UGX'],
], [WIDTH - 145, 145])
text('The cart also supports quantity changes and removal. Checkout collects the required delivery details and records the selected payment preference.')

page(6, 'Checks and presentation')
text('The ten automated tests passed. They cover menu data, pricing, offers, filtering, account separation, password checks and the default photo. The mobile browser walkthrough checks the ordering journey and its totals.')
images([(Path('screenshots/tracking.jpg'), 'Confirmation'),
        (Path('screenshots/profile.jpg'), 'Profile')], 250)
table(['Browser check', 'Observed result'], [
    ['Customise and add food', 'Size, spice, quantity and note are retained'],
    ['Cart total', 'The example order totals 78,500 UGX'],
    ['Invalid checkout phone', 'An error prevents order submission'],
    ['Confirm and reload', 'The order is saved and appears in the profile'],
    ['Phone layouts', 'One-column cards at 320, 390 and 440 pixels'],
], [175, WIDTH - 175])
section('Demonstration')
text('Show the paper sketches and Figma screens, then browse the menu, customise a burger, review the cart and confirm the order. Explain the price calculation and show order history. The full walkthrough is in docs/PRESENTATION.md.')
text('BiteCraft brings food discovery, meal choices and order review into a clear mobile interface. The sketches, designs and working website demonstrate the same journey.')

pdf.save()
print('Created ' + str(OUT.relative_to(ROOT)))

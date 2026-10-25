"""Rebuild the illustrated HTML and PDF assignment report from bundled evidence."""
from pathlib import Path
import html
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Image, Table, TableStyle, PageBreak
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.utils import ImageReader
from PIL import Image as PILImage, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
DOCS = ROOT / 'docs'
ORANGE = colors.HexColor('#ed4c25')
INK = colors.HexColor('#29231e')
MUTED = colors.HexColor('#7e7267')

# Reconstructed wireframes: intentionally labelled, never represented as original paper sketches.
canvas = PILImage.new('RGB',(1200,720),'#faf8f5')
draw = ImageDraw.Draw(canvas)
font_path='/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf'
font=ImageFont.truetype(font_path,17)
bold=ImageFont.truetype(font_path,21)
for x,title in [(40,'01  Discover'),(430,'02  Choose'),(820,'03  Confirm')]:
    draw.rounded_rectangle((x,25,x+340,685),radius=25,fill='white',outline='#8c8278',width=2)
    draw.text((x+20,50),title,font=bold,fill='#28231f')
    if x==40:
        draw.rounded_rectangle((x+20,105,x+320,145),radius=10,outline='#aaa097',width=2)
        draw.text((x+35,115),'Search food & drinks',font=font,fill='#777')
        draw.rectangle((x+20,170,x+320,285),outline='#aaa097',width=2)
        draw.text((x+40,215),'Featured offer / photo',font=font,fill='#777')
        for j in range(4):draw.ellipse((x+22+j*77,310,x+70+j*77,358),outline='#aaa097',width=2)
        for j in range(2):
            draw.rectangle((x+20+j*155,390,x+165+j*155,550),outline='#aaa097',width=2)
            draw.text((x+35+j*155,565),'Dish + price',font=font,fill='#777')
    elif x==430:
        draw.rectangle((x+20,105,x+320,330),outline='#aaa097',width=2)
        draw.line((x+20,105,x+320,330),fill='#ddd',width=2)
        draw.line((x+320,105,x+20,330),fill='#ddd',width=2)
        draw.text((x+100,205),'Food photo',font=font,fill='#777')
        for y,t in [(355,'Dish name + rating'),(400,'Description + ingredients'),(445,'Size / spice options'),(490,'Quantity  -   1   +')]:draw.text((x+23,y),t,font=font,fill='#777')
        draw.rounded_rectangle((x+20,550,x+320,600),radius=12,fill='#eee8e1',outline='#aaa097')
        draw.text((x+105,565),'Add to cart',font=font,fill='#555')
    else:
        for y,t in [(115,'Delivery address'),(200,'Items + quantity controls'),(285,'Coupon code'),(360,'Payment preference'),(435,'Subtotal / fee / total')]:
            draw.rounded_rectangle((x+20,y-10,x+320,y+50),radius=8,outline='#aaa097',width=2)
            draw.text((x+30,y+9),t,font=font,fill='#777')
        draw.rounded_rectangle((x+20,550,x+320,600),radius=12,fill='#eee8e1',outline='#aaa097')
        draw.text((x+85,565),'Place demo order',font=font,fill='#555')
    draw.line((x+20,625,x+320,625),fill='#aaa097',width=2)
    draw.text((x+35,645),'Home     Menu     Cart     Profile',font=font,fill='#777')
canvas.save(DOCS/'wireframes.png')

PAGES = [
 {'title':'Food for everyone.','kicker':'BITECRAFT / UI & UX PROJECT','blocks':[
  ('p','<b>Prepared for Sanyu Judith</b><br/>Web interface implementation and documentation<br/>25 October 2026'),
  ('p','BiteCraft turns the supplied mobile Figma prototypes into an interactive food-ordering website. It brings food discovery, item customisation, cart review and demo checkout into one consistent phone-style interface.'),
  ('h','The problem'),
  ('p','People choosing a meal need to compare dishes, see prices, customise an order and confirm the final total without losing their place. BiteCraft organises this journey into small, understandable steps.'),
  ('h','The outcome'),
  ('p','A working HTML, CSS and JavaScript front end with 24 menu items, eight food categories, local demo accounts, favourites, saved addresses, offers, checkout, order history and simulated tracking. The app stays at a maximum width of 440 CSS pixels on large screens.'),
  ('img',('screenshots/home.jpg','screenshots/profile.jpg','Home screen and Sanyu Judith’s default profile. Actual implementation captures.')),
  ('p','<b>Scope:</b> This is an academic browser demo. It does not collect payments, dispatch food or provide production authentication. Menu prices, ratings and offers are sample content.')
 ]},
 {'title':'Understand the people.','kicker':'01 / USERS & PROBLEM DEFINITION','blocks':[
  ('h','Intended users'),
  ('p','Primary audience: students and young adults browsing for affordable meals and drinks on a phone. Secondary audience: busy people who want familiar meals, clear prices and a quick delivery or pickup choice. These are design assumptions, not verified interview findings.'),
  ('table',(['Assumed need','Interface response'],[
   ['Find something quickly','Search, categories, food-type filters and recent searches.'],['Stay within a budget','UGX prices, price sorting, budget filters and an itemised total.'],['Avoid ordering mistakes','Descriptions, allergen notes, size, spice, quantity and kitchen notes.'],['Return to favourites','Saved dishes, addresses, history and reorder.'],['Understand progress','Confirmation, receipt and an explicitly simulated tracking timeline.']])),
  ('h','Evidence available'),
  ('p','The supplied assignment brief, three screenshots of Figma prototypes and the Sanyu Judith photograph were reviewed. The prototypes establish the brand, screen sequence, orange/red actions, food cards and profile identity. No participant interview, survey dataset or original paper sketches were supplied.'),
  ('h','Basic research to complete before submission'),
  ('p','Interview 3-5 intended users. Ask how they choose meals, what price information they need, how they describe delivery locations and what makes them abandon an order. Record the date, method and anonymised notes. Do not invent quotations or participant counts.'),
  ('h','Usability tasks to validate the assumptions'),
  ('p','Ask each participant to find a drink under UGX 10,000, customise a burger, apply a coupon, change an address and place a demo order. Note completion, errors, assistance needed and one suggested improvement. Obtain consent before collecting personal information.'),
  ('p','<b>Research status:</b> Requirements analysis is complete. Primary research findings remain for Sanyu Judith to add from work actually conducted.')
 ]},
 {'title':'Make the journey simple.','kicker':'02 / IDEATION & LOW-FIDELITY DESIGN','blocks':[
  ('p','The interface follows a progressive journey: discover a meal, inspect it, customise it, review the bag, enter checkout details, and see confirmation. A persistent four-tab navigation supports Home, Menu, Cart and Profile.'),
  ('img',('wireframes.png',None,'Reconstructed digital wireframes based on the supplied prototypes. These are supporting diagrams, not the original paper sketches.')),
  ('table',(['Idea','Reason for selecting it'],[
   ['Phone-width layout everywhere','Preserves the mobile design and a manageable reading width on desktop.'],['Browse before signing in','Allows the ordering journey to be demonstrated without an account.'],['Separate cart and checkout','Gives users a clear place to verify quantities and totals.'],['One primary action per step','Makes the next action visible and predictable.'],['Profile photo controlled in Settings','Every account starts with Sanyu’s image; users may replace or restore it.']])),
  ('h','Alternative considered'),
  ('p','A wide desktop catalogue was unnecessary for this brief. The selected layout retains the mobile structure while horizontal category and popular-item rows provide additional browsing space.'),
  ('p','<b>Submission note:</b> Attach the original paper sketches if the course requires them. The digital wireframes in this report must not be presented as evidence of a paper-sketch process.')
 ]},
 {'title':'From Figma to the web.','kicker':'03 / HIGH-FIDELITY REFERENCE','blocks':[
  ('p','The supplied Figma screenshots are the design source. The implementation retains the BiteCraft name, orange-to-red actions, warm neutral surfaces, photo-led food browsing, bottom navigation and Sanyu Judith profile. Additional screens complete the interactions beyond the static prototypes.'),
  ('img',('figma-overview.jpg',None,'Provided Figma overview: splash, login, home, menu, item, cart and profile screens.')),
  ('table',(['Design element','Implementation'],[
   ['Brand colour','Orange #ED4C25 with red #CE2918 for primary actions.'],['Type','Manrope headings and DM Sans body text, with system fallbacks.'],['Surfaces','Warm #FAF8F5 canvas, white cards, subtle borders and soft shadows.'],['Spacing','Consistent 22px content gutters; smaller gutters on narrow phones.'],['Navigation','Four persistent tabs; contextual back actions and modal dialogs.']])),
  ('h','Source link'),
  ('p','The editable Figma project is complete according to the supplied brief, but its URL was not provided. Add the actual shareable Figma project link to the final submission. Screenshot evidence is bundled in this repository.')
 ]},
 {'title':'A working ordering journey.','kicker':'04 / IMPLEMENTATION EVIDENCE','blocks':[
  ('img',('screenshots/menu.jpg','screenshots/cart.jpg','Live menu and cart. The cart test preserves two Large, Hot burgers and the kitchen note.')),
  ('h','Verified calculation example'),
  ('p','Two Large Double Beef Cheese Burgers cost 2 x (UGX 35,000 + UGX 5,000) = UGX 80,000. BITEWELCOME subtracts UGX 5,000. Delivery adds UGX 3,500. The confirmed total is <b>UGX 78,500</b>.'),
  ('h','Offers and checkout'),
  ('p','BITEWELCOME applies when the subtotal is at least UGX 25,000. PLATTER30 discounts only Goat Pilau Special items by 30%. One coupon is supported per order; an invalidated coupon is removed after cart changes. Pickup has no delivery fee.'),
  ('p','Checkout requires a name, phone number, delivery address where applicable, and acknowledgment that the order is a demo. Cash, mobile money and card choices save a preference without requesting real payment credentials.')
 ]},
 {'title':'Built for the small screen.','kicker':'05 / RESPONSIVENESS & ACCESSIBILITY','blocks':[
  ('img',('screenshots/responsive.jpg',None,'Actual browser frames at 320, 390 and 440px. Scrollbars reduce the available content area to 305, 375 and 425px in this environment.')),
  ('h','Responsive behaviour'),
  ('p','The site uses max-width: 440px with a full-width layout below that size. Desktop space forms a quiet background around the phone-width app. Categories and popular dishes scroll horizontally inside the app; the page itself has no horizontal overflow in the checked frames.'),
  ('h','Interaction and accessibility decisions'),
  ('p','Buttons have descriptive labels. Inputs have labels and native validation. Dialogs use the browser’s modal focus behaviour. The site includes a skip link, visible keyboard focus, a live status region for feedback, active navigation states, reduced-motion support and meaningful image descriptions.'),
  ('h','Verification limits'),
  ('p','Layout was inspected in browser frames and on a 1363px desktop viewport, not on physical phones. This is not a full accessibility audit. Local account hashing requires HTTPS or localhost; its logic was tested using Node Web Crypto because the remote preview uses HTTP.')
 ]},
 {'title':'State, validation and proof.','kicker':'06 / TECHNICAL IMPLEMENTATION & TESTING','blocks':[
  ('table',(['File / component','Responsibility'],[
   ['index.html','Semantic application shell, dialog, navigation and live status region.'],['styles.css','Mobile shell, layouts, components, responsive and reduced-motion rules.'],['app.js','Catalogue, route rendering, event handlers, account state and pricing rules.'],['assets/','Bundled food photography, favicon and default Sanyu image.'],['tests/','Pricing, filtering, account isolation and responsive check fixture.'],['vercel.json','Static deployment settings and basic response headers.']])),
  ('h','Data and account model'),
  ('p','Local storage separates guest data from each account’s profile, addresses, cart, favourites and orders. New accounts inherit Sanyu’s photograph. Settings accepts JPG, PNG and WebP images up to 5MB, resizes them locally and can restore the default. Passwords are derived with PBKDF2-SHA256, 100,000 iterations and a random 16-byte salt.'),
  ('p','<b>Production boundary:</b> Browser storage can be inspected and modified locally. A real launch would need server authentication, database-backed order ownership, server-side prices, a payment integration and restaurant fulfilment.'),
  ('h','Automated tests: 9 passed'),
  ('p','Coverage: unique catalogue IDs and categories; size/quantity/delivery totals; coupon threshold; eligible-item discount; combined search and filters; HTML escaping; default photo and account/cart isolation; incorrect-password and duplicate-email rejection; non-secure-preview cart ID fallback.'),
  ('h','Browser checks completed'),
  ('p','Burger customisation and live totals; kitchen-note persistence; cart and coupon; simulated mobile-money checkout; saved order and tracking progression; address creation; coffee search; budget/price filters; profile; and responsive frame inspection. The HTTP preview UUID issue was found and fixed.'),
  ('p','Run <b>npm test</b> and <b>npm run check</b> from the repository root. Tests use Node built-ins and need no package installation.')
 ]},
 {'title':'Ready to demonstrate.','kicker':'07 / PRESENTATION & SUBMISSION','blocks':[
  ('h','A five-minute demonstration'),
  ('p','1. Open the welcome screen and browse as Sanyu Judith.<br/>2. Search for a drink and compare the price or budget filter.<br/>3. Open a burger, select Large and Hot, add a kitchen note and choose quantity two.<br/>4. Open the cart, enter BITEWELCOME and explain the UGX 78,500 total.<br/>5. Choose delivery or pickup, complete the form and place a demo order.<br/>6. Show the receipt and advance the simulated tracking timeline.<br/>7. Open Profile, demonstrate addresses, favourites and Settings.<br/>8. On HTTPS, create a local demo account and show that Sanyu’s photo is still the default.'),
  ('h','Deployment on Vercel'),
  ('p','Import abarintuma/bite-craft. Use framework preset Other, repository root as the root directory, no build command and the repository root as the output directory. Deploy the static files. Use the HTTPS deployment URL when demonstrating account creation.'),
  ('table',(['Submission item','Status'],[
   ['HTML, CSS and JavaScript source','Included in the repository.'],['Working front-end demonstration','Included; deploy the repository on Vercel.'],['Illustrated report','HTML and PDF included with supplied and live screenshots.'],['Figma design evidence','Provided screenshots included. Add the actual Figma project URL.'],['Paper sketches','Add original paper sketches if required. Digital reconstruction included.'],['User research findings','Add only findings from interviews or surveys actually conducted.']])),
  ('h','Evidence and credits'),
  ('p','Assignment brief and Figma screenshots: supplied by the project owner. Default photograph: supplied Sanyu Judith image, included as requested. Additional food and kitchen photography: Unsplash; exact asset URLs are listed in docs/ASSET-CREDITS.md. Product names, ratings, costs and delivery progression are demonstration content.'),
  ('p','<b>Repository:</b> github.com/abarintuma/bite-craft<br/><b>Project identity:</b> Sanyu Judith / BiteCraft')
 ]}
]

styles=getSampleStyleSheet()
styles.add(ParagraphStyle(name='BodyBite',fontName='Helvetica',fontSize=10,leading=15,textColor=INK,spaceAfter=11))
styles.add(ParagraphStyle(name='TitleBite',fontName='Helvetica-Bold',fontSize=30,leading=35,textColor=INK,spaceAfter=19))
styles.add(ParagraphStyle(name='KickerBite',fontName='Helvetica-Bold',fontSize=8,leading=12,textColor=ORANGE,spaceAfter=11))
styles.add(ParagraphStyle(name='HeadingBite',fontName='Helvetica-Bold',fontSize=13,leading=18,textColor=INK,spaceBefore=6,spaceAfter=8))
styles.add(ParagraphStyle(name='CaptionBite',fontName='Helvetica',fontSize=8,leading=11,textColor=MUTED,spaceAfter=14))
styles.add(ParagraphStyle(name='CellBite',fontName='Helvetica',fontSize=9,leading=13,textColor=INK))

def scaled_image(filename,maxw,maxh):
    p=DOCS/filename;w,h=ImageReader(str(p)).getSize();s=min(maxw/w,maxh/h)
    return Image(str(p),width=w*s,height=h*s)

def page_decoration(c,doc):
    c.setStrokeColor(ORANGE);c.setLineWidth(2);c.line(43,806,552,806)
    c.setFont('Helvetica-Bold',8);c.setFillColor(MUTED);c.drawString(43,27,'BITECRAFT  /  SANYU JUDITH')
    c.setFont('Helvetica',8);c.drawRightString(552,27,f'{doc.page}  /  8')

story=[];html_sections=[]
for n,page in enumerate(PAGES):
    if n:story.append(PageBreak())
    story += [Paragraph(page['kicker'],styles['KickerBite']),Paragraph(page['title'],styles['TitleBite'])]
    hs=[f'<section><span class="kicker">{page["kicker"]}</span><h1>{page["title"]}</h1>']
    for kind,content in page['blocks']:
        if kind in ['p','h']:
            story.append(Paragraph(content,styles['BodyBite' if kind=='p' else 'HeadingBite']))
            tag='p' if kind=='p' else 'h2';hs.append(f'<{tag}>{content}</{tag}>')
        elif kind=='img':
            left,right,caption=content
            maxh=255 if n==0 else 340 if n in [4] else 265
            if right:
                t=Table([[scaled_image(left,225,maxh),scaled_image(right,225,maxh)]],colWidths=[252,252])
                t.setStyle(TableStyle([('ALIGN',(0,0),(-1,-1),'CENTER'),('VALIGN',(0,0),(-1,-1),'TOP')]))
                story.append(t)
            else:story.append(scaled_image(left,500,290 if n==3 else 265))
            story.append(Spacer(1,8));story.append(Paragraph(caption,styles['CaptionBite']))
            hs.append('<figure class="pair">'+f'<img src="{left}" alt="{html.escape(caption)}">'+(f'<img src="{right}" alt="Second implementation screen">' if right else '')+f'<figcaption>{caption}</figcaption></figure>')
        elif kind=='table':
            headers,rows=content
            tabledata=[[Paragraph(h,styles['CellBite']) for h in headers]]+[[Paragraph(cell,styles['CellBite']) for cell in row] for row in rows]
            t=Table(tabledata,colWidths=[157,347],hAlign='LEFT')
            t.setStyle(TableStyle([('BACKGROUND',(0,0),(-1,0),colors.HexColor('#fce9df')),('ROWBACKGROUNDS',(0,1),(-1,-1),[colors.HexColor('#faf8f5'),colors.white]),('VALIGN',(0,0),(-1,-1),'TOP'),('LEFTPADDING',(0,0),(-1,-1),10),('RIGHTPADDING',(0,0),(-1,-1),10),('TOPPADDING',(0,0),(-1,-1),8),('BOTTOMPADDING',(0,0),(-1,-1),8),('LINEBELOW',(0,0),(-1,0),.6,ORANGE)]))
            story.append(t);story.append(Spacer(1,15))
            hs.append('<table><thead><tr>'+''.join(f'<th>{h}</th>' for h in headers)+'</tr></thead><tbody>'+''.join('<tr>'+''.join(f'<td>{c}</td>' for c in row)+'</tr>' for row in rows)+'</tbody></table>')
    hs.append('</section>');html_sections.append(''.join(hs))

SimpleDocTemplate(str(DOCS/'BiteCraft_Project_Report.pdf'),pagesize=(595.28,841.89),topMargin=56,bottomMargin=47,leftMargin=43,rightMargin=43,title='BiteCraft - UI and UX Project Report',author='Sanyu Judith').build(story,onFirstPage=page_decoration,onLaterPages=page_decoration)
css='''*{box-sizing:border-box}body{margin:0;background:#eae5df;color:#29231e;font:15px/1.75 system-ui,sans-serif}header{max-width:900px;margin:24px auto;display:flex;justify-content:space-between;gap:15px;padding:0 24px}a{color:#ce391b}section{max-width:900px;margin:24px auto;background:#fffdfa;padding:50px;border-radius:18px;box-shadow:0 5px 25px #39250c08}.kicker{font-size:11px;letter-spacing:2px;color:#ed4c25;font-weight:bold}h1{font-size:36px;line-height:1.2;letter-spacing:-1px;margin:15px 0 30px}h2{font-size:20px;margin-top:25px}p{margin:15px 0}.pair{display:flex;justify-content:center;flex-wrap:wrap;gap:20px;margin:25px 0}.pair img{object-fit:contain;max-width:100%;max-height:520px;align-self:flex-start}.pair:has(img+img) img{max-width:45%}figcaption{width:100%;font-size:12px;color:#7e7267;line-height:1.5}table{border-collapse:collapse;width:100%;font-size:13px;margin:22px 0}td,th{padding:13px;text-align:left;border-bottom:1px solid #ece4da;vertical-align:top}th{background:#fce9df}button{background:#ed4c25;color:white;border:0;padding:10px 16px;border-radius:9px;cursor:pointer}@media(max-width:600px){section{border-radius:0;padding:25px;margin:0 0 15px}h1{font-size:29px}header{flex-wrap:wrap}}@media print{body{background:white}header{display:none}section{box-shadow:none;border-radius:0;break-before:page;margin:0;padding:10px}.pair img{max-height:340px}h1{font-size:28px}table{font-size:11px}p{font-size:12px}}'''
(DOCS/'report.html').write_text('<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>BiteCraft - Sanyu Judith - Project Report</title><style>'+css+'</style></head><body><header><a href="../index.html#home">← Back to BiteCraft</a><a href="BiteCraft_Project_Report.pdf">Download PDF report</a><button onclick="window.print()">Print report</button></header>'+''.join(html_sections)+'</body></html>')
print('Created docs/report.html and docs/BiteCraft_Project_Report.pdf')

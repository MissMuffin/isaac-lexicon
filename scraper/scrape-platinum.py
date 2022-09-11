from distutils.command.clean import clean
from requests_html import HTMLSession
import sys
import re
import json

session = HTMLSession()
css = session.get('https://platinumgod.co.uk/assets/main.css?v=202111231422')

r = session.get('https://platinumgod.co.uk')

items = []

def find(sel, default = None):
    el = itemspan.find(sel, first=True)
    if el:
        return el.text
    return default

# Scrape score
sel = "div.main > div > li > a:nth-child(1)"
spans = r.html.find(sel)

for itemspan in spans:
    item = dict()
    # div.repentanceitems-container:nth-child(3) > li:nth-child(3) > a:nth-child(1) > span:nth-child(2) > p:nth-child(1)
    item['title'] = find('span:nth-child(2) > p.item-title')    
    item['id'] = find('span:nth-child(2) > p.r-itemid') 
    item['pickup'] = find('span:nth-child(2) > p.pickup')
    item['quality'] = find('span:nth-child(2) > p.quality')

    item['description'] = ""
    for p in itemspan.find('span:nth-child(2) > p'):
        if 'class' in p.attrs:
            continue
        item['description'] += p.text + "\n\n"

    tags = find('span:nth-child(2) > p.tags') or ''
    clean_tags = []

    tags = tags.replace('*', '').strip()
    for tag in tags.split(","):
        tag = tag.strip()
        if tag:  
            clean_tags.append(tag)
    item['tags'] = clean_tags
    
    div = itemspan.find('div[class]', first=True)
    dimclass = div.attrs['class'][-1]
    cssdef = re.search(f"\.{dimclass}{{([^}}]+)}}", css.text)
    # print(dimclass, cssdef.group(1))
    styles = cssdef.group(1).split(";")
    item["img"] = {
        "x": styles[0].split(":")[1].split(" ")[0],
        "width": styles[1].split(":")[1].strip() if len(styles) > 1 else '50px',
    }

    for imgclass in div.attrs['class']:
        cssdef = re.search(f"\.{imgclass}{{[^}}]*background:url\(([^)]+)\)", css.text)
        # print(f"\.{imgclass}{{[^}}]*background:url\(([^)]+)\)")
        if not cssdef:
            continue
        item["img"]["src"] = cssdef.group(1)
        break

    # Parse UL, i.e type, item pool, 
    ps = itemspan.find('ul > p')
    for p in ps:
        item[p.text.split(':')[0].lower().replace(' ', '_')] = p.text.split(':')[1].strip()

    # print(item)
    items.append(item)
    
print(json.dumps(items, indent=4)) 


# Scrape challs
# sel = ".timeline > li > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > span:nth-child(2) > a:nth-child(1)"
# challs = r.html.find(sel)
# challs = list(map(lambda ch: ch.text, challs))
# print(score, challs)
# Tailwind CSS Using

ทดลองใช้ React JS กับ Tailwind CSS ซึ่งเป็น CSS Library ที่มีความ Utility สูงมาก เราสามารถใช้ Tailwind CSS แทนการเขียน CSS ลงในไฟล์ได้เลย

1. นำโปรเจกต์ที่ทำในครั้งแรกมา จากนั้นเปิดคู่กับ [Official Document ของ Tailwind CSS](https://tailwindcss.com/docs/installation/framework-guides)
   เข้าไปหาการ Setting ของ Framework Guild แล้วไปที่ Create React App

2. ทำตามขั้นตอนตั้งแต่ขั้นที่ 2 เป็นต้นไป อันได้แก่ การสร้างไฟล์ config ของ Tailwind CSS, การสร้าง Index CSS File (หรือใช้ไฟล์ index.css ไฟล์เดิมก็ได้) แต่ต้องมั่นใจว่าได้มีการ Import index.css นี้เข้าไปในไฟล์ index.js หรือ App.js แล้ว

3. ลองเขียน UI โดยใช้ Tailwind CSS ในการเขียน Class เช่นการตกแต่ง Header ปรับขนาดด้วย `text-3xl font-bold` หรืออื่นๆ ตามต้องการ

4. ทดลองการใช้ Flex box เช่น เราต้องการทำ กล่อง 3 กล่องเรียงต่อกันในแนวยาวเราจะทำยังไง และลองเขียน Responsive

## ตัวอย่างเคสเปรียบเทียบ

การใช้ / ไม่ใช้ Tailwind ในกรณีต้องการทำ Flex box

### แบบไม่ใช้ Tailwind

```html index.js
<div className="my-flex">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
```

```css index.css
.my-flex {
  display: flex;
}
```

### แบบใช้ Tailwind

```html index.js
<div className="flex">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
```

## ติดตั้ง Extension

ลองติดตั้ง IntellSense for CSS class names in HTML จะช่วยเป็น autocomplete class ต่าง ๆ จาก CSS ที่เราติดตั้ง และลองติดตั้ง Tailwind CSS IntelliSense จะเป็นการ Preview การใช้งานพวกสีต่างๆ และช่วยการเขียนของ Tailwind CSS

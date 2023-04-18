# Project 2 Tailwind CSS, Component and Layouting

โปรเจกต์ที่ 2 นี้จะแบ่งเป็น 3 ส่วนคือการใช้ Tailwind CSS การใช้ Component, UI Library และการออกแบบ Layout หน้าเว็บ

## 2.1 Tailwind CSS Using

ทดลองใช้ React JS กับ Tailwind CSS ซึ่งเป็น CSS Library ที่มีความ Utility สูงมาก เราสามารถใช้ Tailwind CSS แทนการเขียน CSS ลงในไฟล์ได้เลย

1. นำโปรเจกต์ที่ทำในครั้งแรกมา จากนั้นเปิดคู่กับ [Official Document ของ Tailwind CSS](https://tailwindcss.com/docs/installation/framework-guides)
   เข้าไปหาการ Setting ของ Framework Guild แล้วไปที่ Create React App โดยปกติจะเป็น

   ```shell
     npm install -D tailwindcss
     npx tailwindcss init
   ```

2. ลบ Bootstrap ออกโดยการพิมพ์ `npm remove bootstrap` และลบการ import bootstrap css ที่มีการ import เข้ามาด้วย

3. ทำตามขั้นตอนตั้งแต่ขั้นที่ 2 เป็นต้นไป อันได้แก่ การสร้างไฟล์ config ของ Tailwind CSS, การสร้าง Index CSS File (หรือใช้ไฟล์ index.css ไฟล์เดิมก็ได้) แต่ต้องมั่นใจว่าได้มีการ Import index.css นี้เข้าไปในไฟล์ index.js หรือ App.js แล้ว

4. ลองเขียน UI โดยใช้ Tailwind CSS ในการเขียน Class เช่นการตกแต่ง Header ปรับขนาดด้วย `text-3xl font-bold` หรืออื่นๆ ตามต้องการ

5. ทดลองการใช้ Flex box เช่น เราต้องการทำ กล่อง 3 กล่องเรียงต่อกันในแนวยาวเราจะทำยังไง และลองเขียน Responsive

6. เมื่อลง Tailwind CSS แล้ว บางอย่างจะหายไป เช่น button อาจจะดูไม่เป็น button แล้ว เพราะ based ของ tailwind มันจะ base จริง ลองทำให้มันเป็น button ขึ้นมาเช่น การใส่สี หรือ อื่นๆ เช่น

```jsx
<button classname='text-base p-2 font-bold bg-green-500 rounded-sm'>
  Start
</button>
```

สภาพหลังจากลง Tailwind CSS ใหม่ๆ โดยไม่ได้แก้โค้ดอะไรเพิ่ม
![image](https://user-images.githubusercontent.com/32357242/232324136-0c2a698c-8584-4753-85be-d9a5af771c84.png)
สภาพโปรแกรมหลังจากลองใส่ classname ลงไปบางส่วน
![image](https://user-images.githubusercontent.com/32357242/232324329-5ac1f6c8-7c91-4c62-8e6a-2d9c4b751c5f.png)

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

## ลองหา Component Example มาใช้

มีหลายแห่งที่ให้ Tailwind Component แบบ copy มาใช้ได้ เช่น [Tailwind Components](https://tailwindcomponents.com/), [Tailgrid](https://tailgrids.com/), [Tailwind Element](https://tailwind-elements.com/), [Flowbite](https://flowbite.com) และอื่นๆ อีกมากมาย

## 2.2 UI Components

ถึงแม้ว่า Tailwind CSS จะมีการทำงานที่ให้อิสระเสรี และมีคนออกแบบ UI Component ให้เราสามารถนำโค้ดของเขามาใช้ได้มากอยู่พอสมควร แต่ว่าในการทำงานหากเราไม่มีเวลามากพอที่จะพัฒนา Component ที่ครบ หรือพร้อมใช้งาน อีกทางเลือกหนึ่งคือการใช้ UI Component Library ต่างไว้อย่างครบถ้วน แม้อาจจะเสีย Performance ไปบ้าง แต่ก็น้อยมากๆ ถ้าหากเทียบกับเวลาในการพัฒนา

UI Components ที่เป็นที่นิยมหลัก ๆ และมี component ค่อนข้างเยอะและครบ เช่น [MUI](https://mui.com) จะมีทั้ง Material UI, MUI Based และ Joy UI, [AntD](https://ant.design/docs/react), [Mantine](https://mantine.dev/) แต่พวกนี้อาจจะมีความซับซ้อนบ้าง และยังมี UI Library อื่น ๆ ที่อาจจะไม่ได้ครบแบบนี้ แต่เขียนง่ายลงมา และเหมาะกับระบบเล็กๆ เช่น [Chakra UI](https://chakra-ui.com/), [Reactstrap](https://reactstrap.github.io/?path=/story/home-installation--page), [Evergreen UI](https://evergreen.segment.com/) หรือ Official ของ Tailwind เลยคือ [Headless UI](https://headlessui.com/) รวมถึงที่ได้รับความนิยมมาอย่างรวดเร็วเช่น [Flowbite](https://flowbite.com) และอื่นๆ อีกมากมาย

UI หลักๆ ที่ศูนย์วิจัยใช้ในตอนนี้คือ MUI และ Chakra UI

## Useful Library

- [MUI](https://mui.com/)
- [Mantine](https://mantine.dev/)
- [AntD](https://ant.design/docs/react/introduce/)
- [Useful Resource from Resource.fyi](https://resource.fyi/category/ui-libraries)
- [Awesome React Component](https://github.com/brillout/awesome-react-components)
- [Headless UI](https://headlessui.com/)

7. ทดลองลง UI Library ตัวใดตัวหนึ่ง ในตัวอย่างนี้จะใช้ JoyUI ซึงเป็นเจ้าของเดียวกันกับ MUI หลักการเขียนเป็นหลักเดียวกัน เข้าไปลง package โดยการ npm install หรือ yarn add ตาม document ของ package นั้น ๆ โดยอย่าลืม `--save` เพื่อให้มันบันทึก package ที่ใช้ ลงใน `package.json` ซึ่งพวก Component Library ใหญ่ๆ บางตัว เช่น MUI,JoyUI, Chakra UI, AntD จะมีการให้เราใส่เป็น Provider และ Customize theme ครอบลงไปได้

### ตัวอย่างการทำ Theme Customization

- สร้างไฟล์ `theme.js` หรือชื่ออื่นๆ ก็ได้ โดยเป็น template ตามที่ document กำหนด สำหรับ MUI, JoyUI ที่ใช้จะเป็นดังนี้

```jx
import { extendTheme } from '@mui/joy/styles';

const theme = extendTheme({
  colorSchemes: {
    dark: {
      palette: {
        primary: {
          50: '#C0CCD9',
          100: '#A5B8CF',
          200: '#6A96CA',
          300: '#4886D0',
          400: '#2178DD',
          500: '#096BDE',
          600: '#1B62B5',
          700: '#265995',
          800: '#2F4968',
          900: '#2F3C4C',
        },
      },
    },
  },
});

export default theme;
```

- จากนั้นใน `index.js` ทำการ import Provider เข้าไป ถ้าเป็นของ MUI,JoyUI จะทำโดย import จาก `@mui/material/style` หรือ `@mui/joy/style` ได้เลย แล้วเอามันมาครอบส่วน Content ของเราเอาไว้ จากนั้น Content ของเราทั้งหมดจะถูก Overider โดย config ที่เราเขียนเข้าไป ไม่ว่าจะเป็นสี ฟอนต์ ขนาด หรืออื่นๆ เราสามารถใส่ได้หมดเลย
  สิ่งที่เพิ่มขึ้นมาใน index

```js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";

import { ThemeProvider } from "@mui/joy/styles";
import theme from "./theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
```

8. ลองนำ Component ต่างๆ มาใช้ เช่นพวก button ต่างๆ ในส่วนของ tailwind css เอาไว้ใช้สำหรับจัดโครงสร้างของ UI, Utility, Responsive หรือ Component ที่มีความเฉพาะของเรา
   ตัวอย่างส่วนของโค้ดที่ลองเพิ่มไปใน `App.js`

```jsx
import { Button, Card, CardContent } from "@mui/joy";
return (
  <Card className='m-4 rounded-md border'>
    <CardContent>
      <h4>{title}</h4>
      <div className='flex gap-2'>
        <Button onClick={() => startProgram()}>Start</Button>
        <Button color='success' onClick={() => restartProgram("world")}>
          Restart
        </Button>
        <Button color='danger'>Down</Button>
      </div>
      {showData()}
    </CardContent>
  </Card>
);
```

เราจะเห็น UI ที่เป็นรูปเป็นร่างขึ้น และประหยัดเวลาทำงานลง
![image](https://user-images.githubusercontent.com/32357242/232376517-372b8634-044f-4f08-9c81-7ec4df3a91bc.png)

## 2.3 Layouting

9. ทดลองวางพื้นที่ สร้างให้มี Header, Footer, ส่วนของ content และส่วนอื่นๆ ไม่ว่าจะเป็น Sidebars หรืออื่น ๆ โดยจะวางเองหรือ Copy มาจากแหล่งที่ปล่อยอย่าง Tailwind Component หรือ่อื่นๆ ก็ได้ หรือจะเอา component ที่ได้จากการใช้ React Libtaty ต่างๆ ก็ได้

ตัวอย่างหลังจากเสร็จแล้ว (ในตัวอย่างเอา html component จากทาง [flowbite](https://flowbite.com)) มา
![image](https://user-images.githubusercontent.com/32357242/232495433-0af9bfee-1e12-4331-819c-586c36fe72d4.png)

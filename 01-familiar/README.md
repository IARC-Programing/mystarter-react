# Project 1 Familiar With React

Updated 1/4/2025

ทดลองการใช้งาน React เบื้องต้น เพื่อให้คุ้นเคยกับ React ควรจะใช้ประกอบกับคู่มือหลักที่ [React.dev](https://react.dev)
เดิมที React เป็น Library สำหรับการทำ Single Page App แต่ปัจจุบันตลอดหลายปีที่ผ่านมา React พัฒนามาเป็น App ที่ทั้ง Support Client Side Rendering, Single Page App และ Static Site Generator

ทาง Facebook เองเลิกสนับสนุนการใช้ create-react-app ตั้งแต่ปี 2021 (ใช้ Create React App จะลง Library บางอันลำบากนิดนึง) และแนะนำให้ใช้ Framework ต่างๆ โดยจากการแนะนำของ React เช่น

- Next.js (Out of Box)
- React Router (Out of Box)
- Expo (Out of Box)
- Vite
- Parcel
- RSbuild

จริงๆ แล้วก็ยังมี Tools อีกหลายอย่างที่นิยมเช่น Remix, Refine หรือ อื่น ๆ

### Table of Content

1. [Basic Create Your First React App](#basic-react)
2. [Components and Props](#components-and-props)
3. [การเรียกใช้ Function](#การเรียกใช้ฟังก์ชัน)
4. [การ Map Array](#mapping-from-array)

## Basic React

ในบทเรียนนี้เราจะเริ่มสร้างมันเป็น Single Page App ง่ายๆ ก่อน โดยเราจะใช้ [Vite](https://vite.dev/) (วีท) เป็น Build & Development Tools
Vite ใช้หลักการของ Hot Module Replacement และการเตรียมโค้ดเฉพาะส่วน ทำให้สามารถ Render โค้ดออกมาได้เร็วมากในขณะ Development
เทียบกับการใช้ create-react-app เดิม โดยหลักการของมันอยู้่ที่นี่ [Why Vite](https://vite.dev/guide/why.html)

1.  ทดลองสร้าง React App ด้วยตนเอง ด้วยการใช้ create-react-app command ตาม [Document ของ Vite](https://vite.dev/guide/) แนะนำให้ใช้ตัว npm หรือ `npm create vite@latest my-app -- --template react` จากนั้นระบบจะให้ไฟล์ประมาณนี้

    ```
    my-app/
      public/
      src/
      .gitignore
      .eslint.config.js
      index.html
      package.json
      Readme.md
      vite.config.js
    ```

    เราจะ Focus ไปที่ `src/` เป็นหลัก ในส่วนของ `public/` จะเป็นส่วนของการเก็บ static file เช่นเดียวกันกับ index.html `node_modules/` เราก็จะไม่ยุ่ง มันเป็นไฟล์จาก Library ต่าง ๆ ที่เราเรียกเข้ามา แล้วตรงนี้มันหนักมาก ควรจะเขียน `.gitignore` โฟลเดอร์ `node_modules ` นี้ไว้

2.  ทำการ install library

    ```
    cd my-app
    npm install
    ```

3.  ลองรันโปรแกรม ด้วย `npm run dev` โดยระบบจะไปรันโปรแกรม โดยสามารถไล่ในไฟล์ `package.json` ได้ โดยเข้าไป จะพบว่า ใน scripts จะเขียน

        ```
         "scripts": {
            "dev": "vite",
            "build": "vite build",
            "lint": "eslint .",
            "preview": "vite preview"
        },
        ```

    ถ้าสมมติว่าเรารัน `npm run dev` มันก็จะไปสั่ง `vite dev` อีกที โดยปกติจะขึ้นที่ http://localhost:5173

4.  หน้าแรกของเราจะรันตามโค้ดที่อยู่ใน `App.jsx` ซึ่งเราสามารถเข้าไปแก้ไขได้ แล้วลองสังเกตุการเปลี่ยนแปลง

    [Back on Top](#Table-of-Content)

![Initial Screenshot](img/01-1.png)

> [!NOTE]
> .js กับ .jsx ต่างกันอย่างไร js คือนามสกุลของ JavaScript ส่วน jsx คือ JavaScript XML คือ JavaScript ที่สามารถเขียนไฟล์ออกมาคล้ายๆ xml ได้ ซึ่งมันก็คือ
> เขียนไฟล์แบบ HTML ได้นั้นเอง หรือ หมายถึง JavaScript ที่สามารถ return ออกมาเป็น HTML ได้นั่นเอง อย่างไฟล์ App.jsx ที่ Return HTML ออกมา
> จริงๆ แล้วในปัจจุบันใน JavaScript ไม่ว่าเราจะใช้ .js หรือ .jsx มันก็ Return ออกมาเป็น HTML ได้ แต่ถ้าจะแยกระหว่างไฟล์ที่ return Component กับไฟล์ที่เป็น
> JS เฉยๆ เช่นใน Backend หรืออื่นๆ การใช้ .jsx ก็เป็นวิธีการปฏิบัติที่ดีอีกอันหนึ่ง แต่ไม่บังคับ แต่ใน TypeScript จำเป็นต้องแยก .ts กับ .tsx อย่างชัดเจน ไม่เช่นนั้นมันจะรันไม่ผ่าน

## Components and Props

ลองดูการใช้ Components กับ Props ประกอบกับ [Component and Props Official Doc](https://reactjs.org/docs/components-and-props.html)

> [!IMPORTANT]
> ชื่อ Folder ควรตั้งเป็นตัวเล็กทั้งหมด ส่วนชื่อไฟล์ที่เป็น React Components หรือ React Page ต่างๆ **ควรตั้งเป็นตัวพิมพ์ใหญ่** ใน Windows อาจจะไม่มีปัญหา แต่ใน Linux / Mac อาจจะมีปัญหาเรื่องของ Case Sensitive ได้ เพื่อกันพลาดควรตั้งเป็นตัวพิมพ์ใหญ่ เพราะ ชื่อฟังก์ชันหลักในไฟล์ที่เป็น component **ต้อง** ตั้งขึ้นต้นตัวพิมพ์ใหญ่ ไม่นั้นจะ Error ทันที JS ไม่ได้บังคับให้สองชื่อนี้ต้องเป็นชื่อเดียวกัน เหมือนในภาษา Java หรือ อื่นๆ แต่ทางทีดีควรใช้ชื่อเดียว

1. ลองสร้างโฟลเดอร์ที่ชื่อว่า Components ขึ้นมา ใน `src/` จากนั้นลองสร้างไฟล์ `Topbar.jsx` ขึ้นมาใน `src/components` แล้วสร้างไฟล์ร่าง ๆ ของ JSX ขึ้นมา ให้มีการ Return เป็น JSX HTML Element ออกไปเช่น

   ```
   //src/components/Topbar.jsx
   export default function Tobbar({}){
       return (<div>
           <h1> Hello This is topbar</h1>
       </div>)
   }
   ```

   แล้ว Import Component ตัวนี้เข้าไปใน App.jsx และเรียกใช้ Components นี้ เช่น

   ```
   import Header from './components/Topbar'

   export default function App(){
       return <div>
           <Header/>
           ... ส่วนอื่นๆของหน้าแรก
       </div>
   }
   ```

![Initial Screenshot](img/01-2.png)

เวลาเราจะเรียก Component เราจะทำเหมือนกับว่ามันเป็น HTML Tag ใหม่ Tag หนึ่ง ที่มีโครงสร้างมากกว่า Tag ทั่ว ๆ ไป โดยใน JSX อย่าง React ถ้าสมมติว่าไม่มีข้อมูลตรงกลางระหว่าง Tag เราสามารถลดรูปได้ เช่น

```
<div></div>
```

สามารถเปลี่ยนเป็น

```
<div/>
```

ได้ เช่นเดียวกัน สามารถเขียน Header ในแบบ `<Header></Header>` ได้ แต่ไม่เป็นที่นิยม นิยมการเขียนแบบ `<Header/>` มากกว่า บันทึกแล้วลองดูผล

2. ลองนำ UI Component จาก Bootstrap เช่นพวก Navbar หรือตัวอื่น ๆ มาใส่ใน Header แต่จำไว้เสมอว่าอย่าลืมเปลี่ยน `class` เป็น `className` และทุก Tag ของ HTML มีเปิดแล้วต้องมีปิด ใน HTML ธรรมดา Tag บาทงตัวอาจจะไม่ต้องปิด เช่น `<br>`,`<img>` แต่ใน jsx จำเป็นต้องปิด เช่น `<br/>`,`<img ... />` และจะต้องถูกครอบเสมอ ในการ Return ออกมาเช่น จะต้องออกมาเป็น Component เดียว เช่น

   - แบบนี้จะ Error
     ```
     export default function Topbar(){
         return <div>This is My Header</div><div>Do you like my header?</div>
     }
     ```
   - แบบนี้จะ Run ได้

   ```
   export default function Topbar(){
       return <div>
           <div>This is My Header</div>
           <div>Do you like my header?</div>
           </div>
   }
   ```

3. ลองโยนค่าลงไปใน Component ของเรา การเขียน Component แบบนี้เราสามารถส่งข้อมูล หรือ ค่าของตัวแปรไปยัง Component ได้ เพื่อให้เราไม่ต้องมาสร้าง Component ใหม่ทุกครั้ง โดยค่าที่เราส่งไป เรียกว่า Props เราสามารถสร้างให้คอมโพเนนท์ของเรารับค่าได้ โดยการไปแก้ฟังก์ชั่นที่ Export Default ออกมา ให้รับค่าพารามิตอร์

   ```
   export default function Tobbar({subtitle}){
       return <nav>
           <h1> {subtitle} </h1>
       </nav>
   }
   ```

   โดยเราสามารถสร้างตังแปรได้ และนำค่านั้นมาแสดงด้วยการใช้ `{}` และลองเรียกใช้ Component จากที่พัฒนาไป เกิดอะไรขึ้นบ้าง ลองส่งค่าไปโดยใช้

   ```
   <Tobbar subtitle="สวัสดีเราคือ Subtitle">
   ```

   [Back on Top](#Table-of-Content)

## การเรียกใช้ฟังก์ชัน

1. ลองสร้าง Components เกี่ยวกับระบบมาสักอันหนึ่ง เช่นในตัวอย่างสร้าง ControlCard.jsx มา ให้มีปุ่ม หรือ อะไรบางอย่างอยู่ข้างใน รวมถึง การให้มีการรับค่าด้วย เช่น

   ```
   export default function ControlCard({title}){
    return(
       <div>
           <h1> {title} </h1>
           <button >Start</button>
           <button > Restart</button>
           <button >Down</button>
       </div>
    )
   }
   ```

   แล้วเอา Component นี้มาวางไว้ในหน้า App.jsx ของเรา

2. ทำการสร้างฟังก์ชันขึ้นมาใน Components ของเรา (อยู่ใน export default function ControlCard(){... }) เช่นการสร้าง alert box โดยการสร้างเป็นฟังก์ชันแบบ JavaScript ทั่วไป หรือแบบ Arrow Function ก็ได้ แต่ Arrow Function จะได้รับความนิยมมากกว่า และเป็นวิธีที่ดีกว่า

   ```
   export default function ControlCard({title}){
       // เขียนแบบ function
       function alertStart(){
           window.alert('คณกำลังกด Start ' + title);
       }

       // เขียนแบบ Arrow Function
       const alertStart = ()=>{
           window.alert('คุณกำลังกด Start' +title);
       }

       return (...)
   }
   ```

> [!WARNING]
> เลือกแบบใดแบบหนึ่ง ถ้า Copy ไปทั้งสองมันจะมองว่าเป็นอันเดียวกัน แล้วมันจะเอาข้างล่างสุด

3. ทำการ Trigger การสั่งงานของฟังก์ชันเข้าไปใน HTML Event เช่น สมมติต้องการ ให้ทำตอน onClick ก็ใส่ลงไป โดยใช้ Arrow Function ในการเรียกภายใน เช่น

   ```
    <button  onClick={()=>alertStart()}>Start</button>
   ```

   การเรียกผ่าน Arrow Function แบบนี้ทำให้ระบบไม่ได้ทำงานทันทีเมื่อหน้าจอ Render แต่จะทำเมื่อมี event จริง ๆ ในทางกลับกันถ้าหากเราใส่ `onClick={alertStart()}` ฟังก์ชันนี้จะทำงานทันที แม้ว่าจะไม่ได้คลิกก็ตาม อย่างไรก็ดี ถ้าฟังก์ชันนั้นไม่ได้มี parameter เราก็สามารถเรียกในแบบ `onClick={alertStart}` โดยไม่มี () ได้เช่นกัน

4. ลองปรับปรุงจากตรงนี้ ให้มีการเรียกใช้ Function ที่มีการใส่ค่าพารามิเตอร์ไปได้
5. ลองทำให้มีการเรียกใช้ฟังก์ชัน ที่มีการ Return ออกมาเป็น HTML เช่น

   ```
     const showData = () => {
        return (
        <div>
            <li>Hello</li>
            <li>World</li>
        </div>
    )}
   ```

   แล้วเราอาจจะเรียกแบบให้มันรันตลอด แบบ {showData()} ก็ได้

[Back on Top](#Table-of-Content)

## Mapping from Array

Array เป็นวิธีหนึ่งที่ได้รับความนิยมในการเก็บข้อมูล และส่วนใหญ่เวลาจะส่งข้อมูลมาก็จะเป็น Array

1. ใน App.js ลองเรียกใช้ Component ตัวที่เราสร้างแบบนี้หลาย ๆ อัน
   ```
       <ControlCard title="Logistic">
       <ControlCard title="E-Commerce">
       <ControlCard title="Banking">
   ```
2. ลองสร้าง Array ของ title ขึ้นมาแทน (อยู่นอก Function Return นะ)
   ```
   const titleArray = ['Logistic','E-Commerce','Banking'];
   ```
3. แทนที่เราจะเรียกใช้ แบบตรง ๆ ในแบบเดิม มาเรียกใช้ผ่านการ Map Array เช่น

   ```
   return (
       <div>
   {titleArray.map((eachTitleArray) => (
        <ControlCard title={eachTitleArray} />
      ))}
       </div>
   )
   ```

   ลองสังเกตุผลการทดลองดู

   [Back on Top](#Table-of-Content)

![Final Screenshot](img/01-3.png)

### Reference

- https://en.wikipedia.org/wiki/JSX_(JavaScript)
- https://vite.dev/guide/
- https://react.dev
- https://react.dev/learn/creating-a-react-app

Open to public, with ❤️ From Intelligent Automation Engineering Center

---

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# 3.1 React Hook with useState and useEffect

React Hook หรือ React Functional Component เป็นอีกหนึ่งวิธีการเขียน React นอกจาก Class Component คือการมองมันเป็นฟังก์ชัน และมี Return ออกมาเป็น HTML หรือ JSX Component

1. ลองศึกษาการทำ React Hook ในด้านการใช้ useStage กับ useEffect โดยสามารถหาแหล่งเรียนรู้ได้ทั่วไป
2. ในโปรเจกต์ที่ทำอยู่ลองสร้างเป็นฟอร์มเล็กๆ ที่มีการเปลี่ยนค่าสเตจ ลองสร้างฟอร์มสำหรับการเก็บ searchTerm หรือ ข้อความเอาไว้ Search อะไรบางอย่าง โดยอาจจะเป็นการใช้ html form หรือ เอามาจาก component library ก็ได้

```jsx
import React, {useState} from "react";
import { Card, CardContent, Input } from "@mui/joy";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div>
      <Card>
        <CardContent>
          <div>Search Box</div>
          <Input
            placeholder='Input Some Search Word'
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div>
            You Search <span className='text-blue-500'>{searchTerm}</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
}
```

ตัวอย่าง
![image](https://user-images.githubusercontent.com/32357242/232509247-d9671637-94ae-4b3c-ba1d-ecca290dd079.png)

3. ลองทดลองการใช้งาน useEffect เช่นการสั่งให้ทุกครั้งที่ตัวเลขเปลี่ยน มีการ Alert ขึ้นมาที่หน้าจอ โดยที่ไม่เขียนไว้ตอนที่ Set Data แต่ใช้หลักของ useEffect ตรวจจับเวลาตัวเลขเกิดการเปลี่ยนแปลง

```jsx
import React, { useState, useEffect } from "react";

useEffect(() => {
  alert(`You Search ${searchTerm}`);

  return () => {};
}, [searchTerm]);
```

ตัวอย่าง
![image](https://user-images.githubusercontent.com/32357242/232509930-1a2a15ff-2f49-46c9-ba72-aac58f205f00.png)

4. เอาการ Alert ออกเพื่อเตรียมทำส่วนต่อไป

### Information

- [Introducing to Hook Official Doc](https://reactjs.org/docs/hooks-intro.html)
- [React Hooks คืออะไร มาลองหัดใช้กันดีกว่า / Devahoy](https://devahoy.com/blog/2018/11/introduction-to-react-hooks)
- [useState และ useEffect ใน React / NeeMeOn Medium](https://medium.com/tencent-thailand/usestate-%E0%B9%81%E0%B8%A5%E0%B8%B0-useeffect%E0%B9%83%E0%B8%99-react-193c825584a1)

# 3.2 Call APIs

React เป็น JavaScript ในแบบ Client-Side Rendering ปกติตัวของ React ดีไซด์มาเพื่อเขียนเป็น User Interface หรือ Frontend อย่างเดียว แต่อย่างไรก็ดี ก็มีการพัฒนาเป็น Framework สำหรับทำให้ React เป็น Full Stack ได้ เช่น Next.js หรืออื่น ๆ แต่ในส่วนนี้ เราจะทำ Application ที่จะให้ React เป็นแค่ Frontnend เพื่อ Performance ที่ดีกว่า แล้วเราให้มันคุยกับ Backend โดยใช้ API

โดยปกติ React หรือ JavaScript บน node.js จะสามารถเรียก API ได้โดยใช้คำสั่ง `fetch` โดยไม่ต้องลง library ใดๆ เพิ่ม แต่ว่าด้วยความที่ fetch เป็นเหมือนตัว based แบบพื้นฐานการ config หลายอย่างเพิ่มเติมแบบไม่ง่ายเท่าไหร่ จึงมี library ที่ทำเป็น out-of-box มาให้ที่นิยมใช้คือ axios

5. ลองตรวจเช็คความเข้าใจว่ารู้จักการใช้ npm หรือ node package manager ซึ่งเป็น Package Manager หลักๆ ของ Node.js แล้วยัง ลองลง package ที่ชื่อ **axios** ซึ่งเป็น HTTP Client สำหรับการยิง Request ต่างๆ (ลงด้วย `npm install axios --save`)

6. ลองใช้ axios ในการเรียก API จาก OpenAPI อย่าง Starwar API แล้วเก็บมาไว้ใน State โดยการเรียกต้องเรียกผ่าน useEffect เพื่อไม่ให้มันทำหลายครั้ง โดยใน axios ถ้าลองเปรียบเทียบจากใน doc Response ที่ได้จาก api จะอยู่ใน field ของ data ดังนั้นเมื่อเราได้ response ออกมา เราจะต้้องมา .data อีกครั้ง

ในตัวอย่างจะลองยิงไปที่ api people ใน starwar API

```jsx
const [starWarPeople, setStarWarPeople] = useState([]);

useEffect(() => {
  axios
    .get("https://swapi.dev/api/people/")
    .then((res) => {
      setStarWarPeople(res.data);
      console.log("People ", res.data);
    })
    .catch((error) => {
      console.error("Error", error?.message);
    });

  return () => {};
}, []);
```

![image](https://user-images.githubusercontent.com/32357242/232536928-2e35f130-ab7c-4979-8f29-e34ff156bce0.png)

> การดำเนินการกับข้อมูลที่มีการดึงมาจาก I/O เช่นพวก API นี้มีหลายวิธี วิธีที่เราใช้ข้างบนเป็นวิธีแบบ Promise คือ เราจะมองว่าเราจะได้ Object ทีั่ไม่สมบูรณ์มามี Type เป็น Promise คือสัญญาว่าจะมี แต่ยังไม่มี เมื่อข้อมูลมาครบ มันจะเรียกไปที่ `then(()=>{})` ถ้า error จะไปที่ `.catch(error=>{})` และท้ายที่สุดจะไปที่ `.finally(()=>{})` ซึ่งเราอาจจะละไว้ก็ได้

7. หลังจากเราลอง Log ดูแล้ว ผมว่าลักษณะของ Payload จะเป็นข้อมูลพวก count,previous,next บางส่วน ส่วนตัวข้อมูลหลักจะไปอยู่ที่ results เราจะปรับการใส่ค่าเข้าในสเตทเป็น

```jsx
useEffect(() => {
  axios
    .get("https://swapi.dev/api/people/")
    .then((res) => {
      setStarWarPeople(res.data.results);
      console.log("People ", res.data.results);
    })
    .catch((error) => {
      console.error("Error", error?.message);
    });

  return () => {};
}, []);
```

8. เพื่อความปลอดภัย กรณีที่ข้อมูลมันไม่ได้มาตามเงื่อนไขนี้ มันอาจจะ Error ได้ เช่น ถ้ามันไม่มี res.data การเอามา .result ต่อ มันจะทำให้เกิด .result of undefine ซึ่งจะทำให้ Error เราจะทำ Optional Chaining หรือใส่ ? ไว้ หลังแต่ละตัวแปรก่อนการจุด เพื่อบอกมันว่า ถ้ามันมีค่ามันถึงจะหาต่อ ถ้าไม่มีก็ไม่ต้องทำการ dot ต่อแล้ว `res.data.results` จะเปลี่ยนเป็น `res?.data?.results`

9. ลองทำ Error Handling ในการเรียก Asynchronous Function แบบ try catch กับ async await ซึ่งถ้าถูกต้องมันจะให้ผลออกมาเหมือนกัน

```jsx
useEffect(() => {
  const getData = async () => {
    try {
      const response = await axios.get("https://swapi.dev/api/people/");
      setData(res?.data?.results);
    } catch (err) {
      console.error(err.message);
    }
  };
}, []);
```

10. ลองทำการ Map ข้อมูลที่อยู้ใน State ออกมาแสดงใน UI ให้กับผู้ใช้ โดยใช้ `.map` ซึ่งเป็นหนึ่งในฟังก์ชันพื้นฐานของ JavaScript

```jsx
<div className='mx-4'>
  {starWarPeople?.map((eachPeople, index) => (
    <Card key={index} className='my-2'>
      <CardContent>
        <div className='flex'>
          <div className='w-1/3'></div>
          <div className='w-2/3'>
            <li>Name: {eachPeople?.name}</li>
            <li>Height: {eachPeople?.height}</li>
            <li>Mass: {eachPeople?.mass}</li>
          </div>
        </div>
      </CardContent>
    </Card>
  ))}
</div>
```

ตัวอย่าง
![image](https://user-images.githubusercontent.com/32357242/232544444-70369542-3023-4c96-8ee5-dd9246867da9.png)

11. ลองหา Library ต่างๆ ที่ช่วยให้การทำงานสะดวกขึ้น เช่น `lodash` หรืออื่นๆ ตามความต้องการใน npm

ตัวอย่างการใช้ lodash ในการ map

```jsx
import _ from 'lodash';

function App(){
...
return (<div>
...
 {_.map(starWarPeople, (eachPeople, index) => (
       <Card key={index} className='my-2'>
         <CardContent>
           <div className='flex'>
               <div className='w-1/3'></div>
                <div className='w-2/3'>
                  <li>Name: {eachPeople?.name}</li>
                  <li>Height: {eachPeople?.height}</li>
                  <li>Mass: {eachPeople?.mass}</li>
                  </div>
                </div>
          </CardContent>
       </Card>
          ))}
</div>)
}
```

### Information

- [Axios](https://github.com/axios/axios)
- [Node Package Manager / NPM](https://www.npmjs.com/)
- [Starwar API](https://swapi.dev/)

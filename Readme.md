# IARC Basic React Starter Project

Open Intelligent Automation Research Center's Basic React Starter Project. This is just a lab not a good document follow great documents at [Create React App](https://create-react-app.dev)

## Project 1 Familiar with React

ทำความรู้จักกับ React การใช้งาน Component, Props การเริ่มวาง HTML Layout การนำ Component Library, CSS Library ง่าย ๆ มาวางให้เห็นภาพของ React

### Instruction and Code

- ในโฟลเดอร์ [01-faimiliar-with-react](01-familar-with-react) มีคำแนะนำอยู่ในไฟล์ Readme

### Information

- [เริ่มเขียน JavaScript](https://github.com/IARC-Programing/mystarter-react/wiki/JavaScript-General-Guildline)
- [เริ่มเขียน React เบื้องต้น](https://github.com/IARC-Programing/mystarter-react/wiki/Basic-React-JS-General-Guideline)

## Project 2 using Tailwind CSS and layouting

ติดตั้ง Tailwind CSS การเรียกใช้ การเขียน การวาง Layout และการหา Component Library อื่น ๆ มาช่วย

### Instruction and Code

- ในโฟลเดอร์ [02-tailwind-install](02-tailwind-install) มีคำแนะนำอยู่ในไฟล์ Readme

### Information

- [Install Guide from Official Doc](https://tailwindcss.com/docs/guides/create-react-app)

## Project 3 useState and useEffect

การเข้าสู่ Concept หลักของ React Hook หรือ React Functional Component

### Instruction and Code

- ลองศึกษาการทำ React Hook ในด้านการใช้ useStage กับ useEffect โดยสามารถหาแหล่งเรียนรู้ได้ทั่วไป
- ในโปรเจกต์ที่ทำอยู่ลองสร้างเป็นฟอร์มเล็กๆ ที่มีการเปลี่ยนค่าสเตจ เช่น สร้างฟอร์มรับค่าตัวเลข เมื่อมีการแก้ไขค่าตัวเลข ให้ไปเปลี่ยนค่าใน State และมีการนำค่าใน State ไปโชว์ เช่น

```jsx
import React, { useState } from 'react'
export default function App() {
  const [data, setData] = useState(0)
  return (
    <div>
      <input
        onChange={(event) => {
          setData(event.target.value)
        }}
      />
      <div>Selected Number is {data}</div>
    </div>
  )
}
```

- ลองทดลองการใช้งาน useEffect เช่นการสั่งให้ทุกครั้งที่ตัวเลขเปลี่ยน มีการ Alert ขึ้นมาที่หน้าจอ โดยที่ไม่เขียนไว้ตอนที่ Set Data แต่ใช้หลักของ useEffect ตรวจจับเวลาตัวเลขเกิดการเปลี่ยนแปลง

```jsx
useEffect(() => {}, [data])
```

### Information

- [Introducing to Hook Official Doc](https://reactjs.org/docs/hooks-intro.html)
- [React Hooks คืออะไร มาลองหัดใช้กันดีกว่า / Devahoy](https://devahoy.com/blog/2018/11/introduction-to-react-hooks)
- [useState และ useEffect ใน React / NeeMeOn Medium](https://medium.com/tencent-thailand/usestate-%E0%B9%81%E0%B8%A5%E0%B8%B0-useeffect%E0%B9%83%E0%B8%99-react-193c825584a1)

## Project 4 Call APIs

### Instruction and Code

- ลองตรวจเช็คความเข้าใจว่ารู้จักการใช้ npm หรือ node package manager แล้วยัง ลองลง package ที่ชื่อ **axios** ซึ่งเป็น HTTP Client สำหรับการยิง Request ต่างๆ
- ลองใช้ axios ในการเรียก API จาก OpenAPI ต่างๆ เช่น พวก Starwar API แล้วเก็บมาไว้ใน State โดยการเรียกต้องเรียกผ่าน useEffect เพื่อไม่ให้มันทำหลายครั้ง

  ```jsx
  const [data, setData] = useState()

  useEffect(() => {
    axios.get('https://swapi.dev/api/people/1/').then((response) => {
      setData(response.data)
    })
  }, [])
  ```

- ลองเก็บค่า basedURL ลงใน env ของ Frontend (สร้างเป็น .env ขึ้นมาบน Project Root) เช่นเก็บค่า `https://swapi.dev/api/` ไว้บน .env โดยมันจะต้องตั้งชื่อมีคำนำหน้าว่า REACT_APP เช่น `REACT_APP_API_URL=https://swapi.dev/api/` แล้วลองใช้ค่าจาก Environment Variable เช่น เรียกออกมาโดยการใช้ `process.env.REACT_APP_API_URL` แล้วมาต่อ String หรือ เอามาทำเป็น
- ลองทำ Error Handling ในการเรียก API เช่น การมี catch ต่อหลัง then หรือ การทำ async, await

  ```jsx
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get('https://swapi.dev/api/people/1/')
        setData(response.data)
      } catch (err) {
        console.error(err.message)
      }
    }
  }, [])
  ```

- ปัญหาที่อาจจะเกิดขึ้นคือเรื่องของ CORS
- ลองหา Library ต่างๆ ที่ช่วยให้การทำงานสะดวกขึ้น เช่น `lodash` หรืออื่นๆ ตามความต้องการใน npm

### Information

- [Axios](https://github.com/axios/axios)
- [Node Package Manager / NPM](https://www.npmjs.com/)
- [Starwar API](https://swapi.dev/)

## Project 5 Routing with React Router

### Instruction and Code

- ในโฟลเดอร์ [05-Routing](05-Routing/)

## Project 6 Create Basic Express Backend

## Project 7 Access Database and Basic Query

## Project 8 React-Hook-Form

### Instruction and Code

- ลองใช้ React Hook Form กับการสร้างฟอร์ม และ การ POST ข้อมูลไปเก็บไว้ใน Database
- การเอา Form Component จาก Library ง่าย ๆ เช่น rebass, reactstrap, headless ui, chakra-ui หรือ อาจจะเขียน Form Component เอง
- การลง MUI ใน Project
- การทำ Controlled Form โดยใช้ MUI กับ React Hook Form

  ```jsx
  import { useForm, Controller } from 'react-hook-form'
  import { TextField } from '@mui/materials'
  export default function App() {
    const { handleSubmit, control } = useForm()

    return (
      <div>
        <Controller
          name='remark'
          control={control}
          defaultValue={manufacturingOrder?.remark || ''}
          rules={{ required: false }}
          render={({ field }) => (
            <TextField
              {...field}
              label='หมายเหตุ'
              fullWidth
              size={'small'}
              rows={3}
              multiline={true}
              helperText={errors.detail && 'กรุณาใส่ข้อมูล'}
            />
          )}
        />
      </div>
    )
  }
  ```

### Information

- [React Hook Form](https://react-hook-form.com/get-started#Registerfields)
- [MUI](https://mui.com/)

## Project 9 Full 1 Model CRUD Frontend and Backend

## Project 10 Frontend Structure

## Project 11 Backend Structure

### Instruction and Code

- ลองจัดโค้ดส่วนของ Backend ให้อยู่ในรูปแบบที่ดี การแยกโค้ดออกมาเป็นโฟลเดอร์ต่าง ๆ เช่น constants,controller,models,routes,service
- ดูตัวอย่างในโฟลเดอร์ [08-BE-Structure](08-BE-Structure)

## Project 12 Basic React Context

## Project 13 Integrate Redux to React

## Project 14 Full CRUD with React-Redux

## Project 15 Protect Your Backend and Basic Concept of Authentication and Token

## Project 16 Building your project

## Project 17 Basic Deployment and Container Deployment

## Project 18 Workflow Deployment and CI/CD

## Project 19 Download IARC Theme and play with it

<hr/>
With 💖, Create at 2022 from Intelligent Automation Reserach Center

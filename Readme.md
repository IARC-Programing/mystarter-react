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

## Project 3 Routing with React Router

## Project 4 useState and useEffect

## Project 5 Create Basic Express Backend

## Project 6 Access Database

## Project 7 Backend Structure

### Instruction and Code

- ลองจัดโค้ดส่วนของ Backend ให้อยู่ในรูปแบบที่ดี การแยกโค้ดออกมาเป็นโฟลเดอร์ต่าง ๆ เช่น constants,controller,models,routes,service
- ดูตัวอย่างในโฟลเดอร์ [08-BE-Structure](08-BE-Structure)

## Project 8 Call APIs

### Instruction and Code

- ลองใช้ axios ในการเรียก API จาก Backend แล้วเก็บมาไว้ใน State โดยการเรียกต้องเรียกผ่าน useEffect เพื่อไม่ให้มันทำหลายครั้ง

  ```jsx
  const [data, setData] = useState()

  useEffect(() => {
    axios.get('/user').then((response) => {
      setData(response.data)
    })
  }, [])
  ```

- ลองเก็บค่า basedURL ลงใน env ของ Frontend (สร้างเป็น .env ขึ้นมาบน Project Root)
- ลองทำ Error Handling ในการเรียก API เช่น การมี catch ต่อหลัง then หรือ การทำ async, await

  ```jsx
  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get('/user')
        setData(response.data)
      } catch (err) {
        console.error(err.message)
      }
    }
  }, [])
  ```

- ปัญหาที่อาจจะเกิดขึ้นคือเรื่องของ CORS

### Information

- [Axios](https://github.com/axios/axios)

## Project 9 React-Hook-Form

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

## Information

- [React Hook Form](https://react-hook-form.com/get-started#Registerfields)
- [MUI](https://mui.com/)

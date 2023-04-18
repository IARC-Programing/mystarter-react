# Basic Express Backend, API Call and Database Connection

Express.js เป็นไลบารี่หนึ่งที่ได้รับความนิยมสำหรับการทำ REST API สำหรับ Node.js จะง่ายกว่าการเขียน HTTP Server เฉยๆ แต่อาจจะไม่ได้ Complex เหมือนกับ Nuxt.js หรือเฟรมเวิร์คอื่น ๆ Application ในโปรเจกต์นี้จะเป็นการทดลองสร้าง Express Backend โดยไม่ต้องยังเชื่อมต่อกับ Database ทดลองสร้าง API ที่มี GET/POST/PUT/DELETE แล้วลงทดสอบด้วย API Caller ไม่ว่าจะเป็น Postman, Insomnia, Swagger,etc.

# 4.1 Basic Express Backend

1. ใน Root Project สร้างโฟลเดอร์ 2 โฟลเดอร์ คือ frontend กับ backend จากนั้น copy โค้ดที่ทำบน React ทั้งหมดเข้ามาอยู่ในโฟลเดอร์ frontend (วิธีที่เหมาะสมคือ Copy มาเฉพาะส่วนอื่น ๆ นอกจาก `node_modules` แล้วจึงค่อย `npm install` ใหม่)
   ![image](https://user-images.githubusercontent.com/32357242/232794545-4714e8e3-db88-4244-a06a-d268e76b1f3f.png)
2. เข้ามาในโฟลเดอร์ backend จากนั้นเปิด Terminal หรือ Command Prompt ขึ้นมาในโฟลเดอร์ backend จากนั้นสร้าง Basic Express Node.js API

   ```
   npm init -y
   ```

   ระบบจะสร้างไฟล์ package.json ขึ้นมา การทำงานตรงนี้จะเป็นการเริ่มสร้าง Node.js Project จากเริ่มต้นเลย ไม่เหมือนกับ React ที่มี Command Line Set create-react-app ให้ใช้งานเตรียม โครงสร้างโฟลเดอร์พื้นฐานมาให้ จริงๆ แล้วของ express.js ก็มีเหมือนกัน แต่เราจะเริ่มสร้างจากโปรเจกต์เปล่าๆ เลย

3. ลง Package ของ Express.js
   ```
   npm install --save express
   ```
   มันจะมีโฟลเดอร์ `node_modules` ขึ้นมา ซึ่งถ้าเราสร้าง Git มา ใน node_modules จะไปถูกรวมใน Git ด้วย ซึ่งเราไม่ควรทำอย่างงั้น เพราะมันเป็นไลบารี่ซึ่งมีจำนวนไฟล์ค่อนข้างมาก เราจะสร้างไฟล์ที่เรียกว่า `.gitignore` แล้วใส่ `node_modules/` เข้ามา เพื่อจะให้ Git มันไม่เข้าถึง node_modules
   ```script
    node_modules/
   ```
4. สร้างไฟล์ index.js ขึ้นมา เหมือนเป็นไฟล์เริ่มต้นของโปรเจกต์นี้ เราจะเขียน JavaScript ในแบบ Common JS ซึ่งเป็นพื้นฐาน และ เป็นแบบที่นิยมใน Node.js มันจะเป็นการเขียนแบบ `const sth = require('')` และปิดด้วย `module.exports = {}` จะต่างกับแบบ JavaScript Module ที่เขียนใน React ซึ่งจริงๆ เราเองก็สามารถเขียน JavaScript Module ใน Node.js ได้ โดยใส่ `"type":"module"` เข้าไปใน package.json แต่ในที่นี้เราจะใช้ common.js ก่อน

   ```js
   const express = require("express");
   const app = express();
   const port = 3001;

   app.get("/", (req, res) => {
     res.send("Hello World!");
   });

   app.listen(port, () => {
     console.log(`Example app listening on port ${port}`);
   });
   ```

5. รันไฟล์นี้ขึ้นมาโดยใช้คำสั่ง

   ```
    node index.js
   ```

   และจากนั้นลองเปิดเว็บบราวเซอร์ขึ้นมาโดยเข้าไปที่ http://localhost:3001

6. สร้างคำสั่งใน `package.json` ใน script ตั้งค่า script dev เป็นการรัน node index.js
   ```json
   {
     "name": "backend",
     "version": "1.0.0",
     "description": "",
     "main": "index.js",
     "scripts": {
       "test": "echo \"Error: no test specified\" && exit 1",
       "dev": "node index.js"
     },
     "keywords": [],
     "author": "",
     "license": "ISC",
     "dependencies": {
       "express": "^4.18.2"
     }
   }
   ```
   จากนั้นลองรันโค้ดด้วย `npm run dev` มันจะไปเรียก node index.js ให้
7. ลง Library nodemon เพื่อให้ระบบมันสามารถรันระบบ และให้มัน restart ทุกครั้งที่มีโค้ดเปลี่ยน โดยเราจะลงแบบ development ก็ได้มันจะดึงลงมาเฉพาะตอนเรา development
   ```shell
     npm install --save-dev nodemon
   ```
   แล้วปรับ script dev จาก node index.js เปลี่ยนเป็น `nodemon index.js`

### Information

- [สร้าง RESTful API ด้วย Express — Express 101](https://medium.com/@aofleejay/%E0%B8%AA%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87-restful-api-%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2-express-express-101-ee37cc4952b4)
- [ExpressJS Official Doc](https://expressjs.com/)

# 4.2 REST API เบื้องต้น

REST API จริงๆ แล้วจะมีด้วยกันหลายคำสั่ง แต่คำสั่งที่ได้รับความนิยมก็จะเป็น `GET`,`POST`,`PUT`,`DELETE`

- การ **GET** เป็นการใช้สำหรับ Retrieve หรือ Read ข้อมูล ส่วนใหญ่สำหรับ `/` เปล่า ๆ มักจะใช้กับ Find All ใช้ `/:id` เช่น `/1dsdedpp2031` เมื่อ 1dsdedpp2031 เป็น ID มักจะใช้เป็นการ Find By Id แบบนี้เรียกว่า **Path Variable** ส่วนการ Search หรือ filter ต่างๆ มักจะใช้เป็น `/?name=ti&department=it` โดยทั้ง `name` และ `department` จะเรียกว่า **Query Variable** ในการ GET เราจะมีแค่ Params กับ Query Variable จะไม่สามารถส่ง Body มาได้
- การ **POST** มักใช้สำหรับการเอามาสร้าง Record สามารถส่ง Body มาได้
- การ **PUT** จะเป็นการใช้สำหรับแก้ไขข้อมูล ใน Record
- การ **DELETE** จะใช้สำหรับการลบ Record

8. สร้างข้อมูล Mockup ออกมาเป็น Array สักชุดหนึ่ง ตัวอย่างเช่น

   ```js
   const mockUser = [
     { id: 1, name: "Theethawat", department: "Software" },
     { id: 2, name: "Thanachit", department: "Software" },
     { id: 3, name: "Paipan", department: "Software" },
     { id: 4, name: "Aekapol", department: "Automation" },
   ];
   ```

   จากนั้นสร้าง API สำหรับการ GET โดยเราจะสร้าง `/user` และ `/user/:id` สำหรับการ Get All User และ Get One User โดยเราจะใช้การตั้งชื่อตัวแปรแบบ camelCase [camel case VS snake case .. สไตล์การเขียนโค้ด 2 แบบที่เจอบ่อย](https://www.tamemo.com/post/20/camel-case-vs-snake-case/) เราจะสร้าง app.get เพิ่มมา โดยมันจะมี parameters ออกมา จริงๆ แล้ว คือ 3 ตัว `req`,`res`,`next` โดย req จะใช้แทน request ที่่ user ส่งมา res คือ response ที่เราจะส่งไปที่ user และ next คือ การเอาไว้ Handle Middleware ต่าง ๆ

   ```js
   app.get("/user", (req, res) => {
     console.log("Find All Users");
     res.json({ rows: mockUser });
   });

   app.get("/user/:id", (req, res) => {
     console.log("Fine One User with Id" + req.params.id);
     const foundUser = mockUser.find(
       (data) => data.id === parseInt(req.params.id)
     );
     res.json(foundUser);
   });
   ```

   เราจะ Return จากอะไรก็ได้ รูปแบบใดก็ได้ แต่ใน JavaScript นิยมส่งข้อมูลกันผ่าน JSON ใน req จะมี attribute ที่ชื่อว่า params ขึ้นมาเอาไว้เรียก path variable เช่น ถ้าเรามี `:id` ก็จะมี req.params.id ส่วนถ้าสมมติ `:userId` ก็จะมี req.params.userId ลองดูผลที่ได้ใน Browser

9. หาโปรแกรม REST API Management Tools เช่น [Postman](https://www.postman.com/downloads/), [Insomnia](https://insomnia.rest/), [hoppscotch](https://github.com/hoppscotch/hoppscotch), [SwaggerUI](https://swagger.io/tools/swagger-ui/) จะสามารถที่จะ Call API ตัวอื่นๆ นอกจาก GET ใน Browser
   ![image](https://user-images.githubusercontent.com/32357242/232824703-f6821c0c-3d3e-4931-a717-ca6059362c1d.png)

# 4.3 Database Access

## MongoDB Install and Test

ในขั้นตอนนี้เราจะใช้ MongoDB ซึ่งเป็น Database แบบ Non Relational Database หรือบางที่ก็เรียกว่า NoSQL หมายความว่ามันไม่ได้บังคับให้เป็น Relational แต่มันก็สามารถเขียนให้มี Relational บางส่วนได้ แต่ถ้ามากเกินไป Performance อาจมี Drop ลงบ้าง ไม่เหมือน Relational MongoDB เป็น Document Based ที่มีลักษณะการเขียนเหมือนกับเป็นเอกสาร หรือเป็น JSON โดย จะมีศัพท์เรียกได้แก่ database หมายถึงฐานข้อมูล, collection หมายถึงเซทของข้อมูล ซึ่งถ้าใน Relational จะเรียกว่า Table และก็มี Record

> MongoDB ไม่มีการกำหนดโครงสร้างที่แน่นอน โครงสร้างที่เกิดขึ้นในแต่ละ Collection เกิดจากการที่มันมีลักษณะของ record คล้ายกัน มี key หรือ column เดียวกัน

10. ติดตั้ง Mongo DB Community Server ในเครื่อง มันจะมาพร้อม MongoDB Compass และอาจจะลง Studio3T เป็นหนึ่ง GUI Tools ที่ช่วยได้
11. ลองเปิด MongoDB Compass (หรือผ่าน GUI ตัวอื่นๆ) แล้ว connect ไปที่ localserver (localhost:27017) ลอง create database ขึ้นมา และสร้าง collection ขึ้นมา
    ![image](https://user-images.githubusercontent.com/32357242/232834891-c9caefb0-bd7c-4d54-9475-5da930cb5289.png)
    ลองเข้าไปที่ collection user และลองกด Add Data -> Insert Document ดู
    ![image](https://user-images.githubusercontent.com/32357242/232835647-89554135-8e11-4aa0-9e68-c6bc08cedc33.png)
    ลองใส่ข้อมูลจาก Mock Up ดูก็ได้ แต่ต้องใส่ให้ถูกรูปแบบ JSON คือ Key จะต้องมี "" ครอบด้วย และไม่มี , เกินมา

## Access Database With Mongoose

เราจะเข้าถึง MongoDB โดยใช้ [Mongoose](https://mongoosejs.com/) Object Relational Mapping (ORM) ตัวหนึ่งของ MongoDB คือการมอง MongoDB Collection ให้อยู่่ในรูป Object นั่นเอง มันจะทำให้เราสะดวกกับการเขียนมากขึ้น เป็นการมอง Collection ที่ตอนแรก ไม่ได้มีโครงสร้างแน่นอนให้มันมีโครงสร้างขึ้นมา

12. ลง Library Mongoose ด้วย

```
 npm install mongoose --save
```

13. สร้าง connection ลงในหน้าของ index.js

```js
const mongoose = require("mongoose");
const uri = "mongodb://127.0.0.1:27017/react-starter-test";
mongoose.connect(uri).then(
  () => {
    console.log("Connection is Successful");
  },
  (err) => {
    console.error("Connection to mongodb is error", err?.message);
  }
);
```

โดยการเขียนตรงนี้เป็นแบบ Promise สามารถเปลี่ยนเป็นเขียนแบบ Try / Catch ก็ได้ ตรง uri นั้นจะเป็นการเขียนแบบ mongodb connection string ที่จะเป็น `mongodb://username:password@host:port/databasename` ถ้าส่วนไหนไม่มีก็สามารถละไว้ได้ จากนั้นลองรันแอพพลิเคชั่นของเราดู

14. สร้างโมเดล และ โครงสร้าง (Schema) สำหรับการข้อมูล User ขึ้นมา โดยเพื่อความเป็นระเบียบ เราจะสร้างโฟลเดอร์ชื่อ models ขึ้นมาในระดับ root ของ backend จากนั้นเราจะสร้างไฟล์ชื่อ `User.js` (ไฟล์ที่เก็บพวก Schema หรือ Model อะไรต่างๆ เรามักจะให้ขึ้นต้นด้วยตัวพิมพ์ใหญ่)

ตัวอย่างการวางไฟล์

![image](https://user-images.githubusercontent.com/32357242/232843959-7d94b604-14f1-4e92-a49d-5ee80cbf3e0a.png)

ตัวอย่างไฟล์ User.js

```js
const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: String,
  department: String,
});

const User = mongoose.model("User", schema);

module.exports = User;
```

โดยเราเริ่มจาก const = require เป็นเหมือนการ import library เข้ามา ก่อนที่เราจะนิยามโครงสร้างข้อมูล (Schema) และสร้างโมเดล ที่เหมือนเป็นก้อนกลมๆ ที่่แทนข้อมูล Collection นี้ของเราในฐานข้อมูลเลย จากนั้นจึง module.exports ออกไป จะคล้ายๆ กับการ export default คือให้ไฟล์นี้เป็นตัวแทนของ Model ไปเลย

15. Import Model ของ User เข้าไปที่ไฟล์ index ของเรา

```js
const User = require("./models/User");
```

16. ปรับฟังก์ชันในการ Get All User ให้เป็นการเอาข้อมูลจาก MongoDB แทน โดยในการดำเนินการกับ MongoDB ซึ่งเป็นฐานข้อมูล ถือว่าเป็นการดำเนินการกับ I/O ภายนอกโปรแกรม ที่อาจใช้เวลามากน้อยเราคาดการณ์ไม่ได้ ดังนั้นจะต้องใช้ 2 อย่าง คือการคุมด้วย async/await หรือ Promise และ ต้องคุมด้วย Error Handling (ไม่ว่าจะเป็น try/catch หรือ .then .catch ก้ได้) ทุกครั้งเสมอ ในส่วนของฟังก์ชันที่เราจะเรียกใช้จากโมเดล สามารถไปดูใน Document ของทาง Mongoose ได้ มันจะมีทั้ง find, findOne, createOne, save, editOne, etc.

- วิธีการเขียนแบบ Promise

```js
app.get("/user", (req, res) => {
  console.log("Find All Users");
  User.find()
    .then((data) => {
      res.json({ rows: data });
    })
    .catch((err) => {
      res.status(404).json({ err });
    });
});
```

- วิธีการเขียนแบบ async/await และ try/catch เราต้องเพิ่ม async ไปหน้า req เพื่อบอกว่าฟังก์ชันนี้เป็น asynchronous function ฟังก์ชันด้านไหนจึงสามารถเป็น asynchronous ได้

```js
app.get("/user", async (req, res) => {
  console.log("Find All Users");
  try {
    const result = await User.find();
    res.json({ rows: result });
  } catch (error) {
    res.status(404).json({ err: error });
  }
});
```

ลองทำการยิง Request ดูจะพบ Result คล้ายๆ แบบนี้

![image](https://user-images.githubusercontent.com/32357242/232847985-e2138684-6e2f-4816-a4ab-d854e3f9f8db.png)

17. **ลอง** Query ข้อมูลจากฐานข้อมูลสำหรับการ Get One User (ใช้ .findById)

## เพิ่มข้อมูลลงใน Database

18. เพื่อรองรับการส่ง Body ของ Request มาที่ระบบของเรา เราจะใช้การ use middleware หรือเหมือนกับการใช้ปลั๊กอิน ที่ express.js ไม่ได้เปิดใช้ตั้งแต่แรก มี 2 ตัวที่เราจะเปิดใช้คือ express.json และ express.urlencoded ซึ่งเราจะใช้วิธี `app.use()` โดยที่ use เป็นคำกลางที่ใช้แทน GET/POST/PUT/DELETE ต่างๆ แล้วยังเป็นการใส่ Middleware หรือฟังก์ชันขั้นกลางเข้าไปได้อีกด้วย เราจะวางอันนี้ไว้ข้างบนสุด

```js
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
```

19. เขียนตัวรองรับ POST method แล้วให้มันแสดง body ที่ได้มา

```js
app.post("/user", async (req, res) => {
  console.log("Create User Body", req.body);
  res.json(req.body);
});
```

จากนั้นเราส่ง Request ที่มี Body จากตัว REST API Client GUI โดยเลือก Content Type เป็น application/json
![image](https://user-images.githubusercontent.com/32357242/232852812-26419f0e-0293-42b2-8336-c0e274ccc006.png)

20. ทำการเพิ่มลงในฐานข้อมูลด้วยการ new Model Object ตัวใหม่แล้ว Save เข้าไปที่ model จากนั้นลองเช็คจาก GET ดูว่าข้อมูลของเราเข้าไปแล้วจริงหรือไม่(ใน Create เรามัก Response ออกมาด้วย Status Code 201)

```js
app.post("/user", async (req, res) => {
  console.log("Create User Body", req.body);
  const newUser = new User(req.body);
  try {
    await newUser.save({});
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ err: error });
  }
});
```

ข้อมูลใหม่เข้ามาแล้ว
![image](https://user-images.githubusercontent.com/32357242/232853513-8a2b4054-2a64-4837-b9b9-c72a7c498551.png)

21. **ลอง** สร้าง API ในส่วนของ PUT และ Delete (ในการแก้ไขสามารถใช้ .findByIdAndUpdate หรือ .updateOne ได้ มักตอบกลับเป็น 200 ส่วนใน Delete สามารถใช้ .findByIdAndDelete หรือ .deleteOne ได้ มักตอบกลับเป็น 204 ถ้าสำเร็จ)

## Sub Routing and Code Organization

เมื่อสักครู่เราได้วางเกือบทุกอย่างไว้ในหน้าแรกหมดเลย ซึ่งในอนาคตถ้าหากว่ามันมี Routing จำนวนมาก ก็จะทำให้รกตาและอาจสับสนได้ เราจะใช้ในเรื่องของการกระจาย Router มาช่วย เริ่มจาก 22. สร้างโฟลเดอร์ routes ใน Root ของ Backend และสร้างไฟล์ user.routes.js สำหรับเก็บ Router สำหรับ User จากนั้นเริ่มสร้าง Router ย่อย จาก express

```js
const express = require("express");
const router = express.Router();

module.exports = router;
```

23. ย้ายโค้ดในส่วนของ Routerของ User จากหน้า index.js มาอยู่ในไฟล์นี้ อย่าลืม import dependencies ให้ครบ กรณีติดการเรียกใช้ไฟล์อื่นมาด้วย ในที่นี้จะเปลี่ยน app. เป็น router. เพื่อความเข้าใจ แต่จริงๆ แล้วชื่อต่างๆ ไม่ได้ผล และเราจะเอาชื่อหลัง / ในตรงหลัง router.get ออกเลย เนื่องจากเราจะเขียนมันครอบอีกที

```js
const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.get("/", async (req, res) => {
  console.log("Find All Users");
  try {
    const result = await User.find();
    res.json({ rows: result });
  } catch (error) {
    res.status(404).json({ err: error });
  }
});

router.get("/:id", async (req, res) => {
  console.log("Find All Users");
  try {
    const result = await User.findById(req?.params?.id);
    res.json(result);
  } catch (error) {
    res.status(404).json({ err: error });
  }
});

router.post("/", async (req, res) => {
  console.log("Create User Body", req.body);
  const newUser = new User(req.body);
  try {
    await newUser.save({});
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ err: error });
  }
});

module.exports = router;
```

จากนั้นกลับไปที่ index.js ทำการ import ไฟล์ Router ของ User เข้าไป และใส่ app.use ในการเป็น middleware ส่งต่อไปให้อีกหน้าหนึ่ง

```js
const userRouter = require("./routes/user.routes");
app.use("/user", userRouter);
```

ถ้าไม่มีอะไรผิดพลาด เราก็จะสามารถ Call ทุกสิ่งทุกอย่างได้เหมือนเดิม

24. ในการทำงานจริง การเขียนแบบนี้อาจมี path ที่ไปชนกับของ frontend ทำให้ทำงานได้ลำบาก ดังนั้นเราจึงนิยมติด `/api` ไว้ข้างหน้าอีกชัเ้นหนึ่ง

```js
app.use("/api/user", userRouter);
```

ปรับ Connection ในส่วนของ API GUI Client ด้วย
![image](https://user-images.githubusercontent.com/32357242/232858147-a020950c-711c-4459-a626-f89d3187f149.png)

### Information

- [ทำ Backend API ด้วย Node.js และ MongoDB กันดีกว่า](https://devahoy.com/blog/2019/08/build-api-with-express-and-mongoose/)
- [MongoDB Official Website](https://www.mongodb.com/)
- [Mongoose Official Doc](https://mongoosejs.com/)
- [Download MongoDB Community Server](https://www.mongodb.com/try/download/community)

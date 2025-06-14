# 🎮 Movie QR Code Generator

A NestJS application that generates a QR code linked to a random list of movies. When scanned or visited, the QR code displays a page with the selected movies, including titles and images.

## 🚀 Live App

🔗 [View Deployed App on Render](https://movie-qr-code.onrender.com)

---

## 🚀 Features

* 🔁 Random movie selection
* 📷 QR code generation using `qrcode`
* 🔤 Server-side rendering using EJS
* 🔗 Shareable movie links
* 🧠 Built with NestJS (Express), TypeScript

---

## 🧰 Tech Stack

* **Backend**: [NestJS](https://nestjs.com/)
* **Templating**: EJS
* **QR Generator**: `qrcode` npm package
* **Environment Variables**: `dotenv`
* **Deployment**: [Render](https://render.com)

---

## 📸 Preview

[QR Page Screenshot]![Screenshot 2025-06-14 154333](https://github.com/user-attachments/assets/ca988cf0-e60e-4927-a2a7-30227fd43bc2)

[Movie Page Screenshot]

![Screenshot 2025-06-14 154415](https://github.com/user-attachments/assets/0c765870-db2d-475a-bc85-01ecd164e383)![Screenshot 2025-06-14 155629](https://github.com/user-attachments/assets/18390ffd-df20-42f8-a633-f74ca9df7a5d)![Screenshot 2025-06-14 160940](https://github.com/user-attachments/assets/79d1d1a1-efef-4309-a194-89a0d2369336)




---

## 📦 Installation

```bash
git clone https://github.com/officiabreezy/Movie-QR-Code.git
cd movie-qr-code
npm install
```

---

## 🛠 Usage

### ➔ Development

```bash
npm run start:dev
```

### ➔ Production

```bash
npm run build
npm start
```

---

## 🔗 Endpoints

| Method | Route         | Description                       |
| ------ | ------------- | --------------------------------- |
| GET    | `/`           | Generates QR code + movie link    |
| GET    | `/movies/:id` | Displays the movies for that link |

---

## 🌍 Deployment

To deploy on [Render](https://render.com):

* Connect GitHub repo
* Set **Build Command**: `npm install && npm run build`
* Set **Start Command**: `npm start`
* Add environment variable: `PORT = 10000` or leave empty (Render auto-assigns)

---

## 🥪 Testing with Postman

* Start the app: `http://localhost:3001`
* Test:

  * `GET /` returns a page with a QR code.
  * Scan the QR or open the movie link to see the movie list.

---

## 📁 Folder Structure

```
src/
├── main.ts
├── qr/
│   ├── qr.controller.ts
│   ├── qr.service.ts
│   └── templates/
│       ├── qr.ejs
│       └── movies.ejs
```

---

## 🦾 License

MIT © [officiabreezy](https://github.com/officiabreezy)

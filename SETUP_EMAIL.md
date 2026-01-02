# 📧 Kako Podesiti Email za Kontakt Formu

Imaš **3 opcije** za prijem email poruka. Sve su besplatne!

---

## ✅ OPCIJA 1: RESEND (Najprostije - PREPORUČUJEM)

**Najbolje za: Production sajt, profesionalni izgled**

### Koraci:

1. **Registruj se na Resend:**
   - Idi na: https://resend.com
   - Registruj se besplatno (100 emailova/dan)

2. **Uzmi API ključ:**
   - Nakon registracije, idi na Settings → API Keys
   - Klikni "Create API Key"
   - Kopiraj ključ

3. **Dodaj u projekat:**
   ```bash
   npm install resend
   ```

4. **Kreiraj `.env.local` fajl:**
   ```env
   RESEND_API_KEY=re_tvoj_api_kljuc_ovde
   ```

5. **Otvori `app/api/contact/route.ts`:**
   - Uncomment-uj OPCIJA 1 kod (linija 16-31)
   - Comment-uj "Privremeno" deo

6. **Restartuj server:**
   ```bash
   # Ctrl+C da stopiraš server
   npm run dev
   ```

**GOTOVO! 🎉** Poruke će stizati na `fantomsystems@gmail.com`

---

## ✅ OPCIJA 2: GMAIL SMTP (Preko Gmail-a)

**Najbolje za: Ako već koristiš Gmail**

### Koraci:

1. **Kreiraj App Password za Gmail:**
   - Idi na: https://myaccount.google.com/apppasswords
   - Mora da imaš 2FA uključen
   - Selektuj "Mail" i "Windows Computer"
   - Klikni Generate
   - **ZAPIŠI PASSWORD** (npr: `abcd efgh ijkl mnop`)

2. **Instaliraj Nodemailer:**
   ```bash
   npm install nodemailer
   npm install --save-dev @types/nodemailer
   ```

3. **Kreiraj `.env.local` fajl:**
   ```env
   GMAIL_USER=fantomsystems@gmail.com
   GMAIL_APP_PASSWORD=abcd efgh ijkl mnop
   ```
   (Koristi password iz Step 1)

4. **Otvori `app/api/contact/route.ts`:**
   - Uncomment-uj OPCIJA 2 kod (linija 33-58)
   - Comment-uj "Privremeno" deo

5. **Restartuj server:**
   ```bash
   npm run dev
   ```

**GOTOVO! 🎉** Poruke će stizati na `fantomsystems@gmail.com`

---

## ✅ OPCIJA 3: WEB3FORMS (Bez koda, instant setup)

**Najbolje za: Najbrža opcija, bez instalacija**

### Koraci:

1. **Registruj se:**
   - Idi na: https://web3forms.com
   - Potpuno besplatno, neograničeno poruka
   - Registruj se sa `fantomsystems@gmail.com`

2. **Uzmi Access Key:**
   - Nakon registracije, dobijaš Access Key
   - Kopiraj ga

3. **Izmeni `components/Contact.tsx`:**
   
   Zameni `handleSubmit` funkciju sa:

   ```typescript
   const handleSubmit = async (e: React.FormEvent) => {
     e.preventDefault();
     
     const formData = new FormData();
     formData.append('access_key', 'tvoj_access_key_ovde'); // Stavi svoj key
     formData.append('name', formState.name);
     formData.append('email', formState.email);
     formData.append('message', formState.message);

     try {
       const response = await fetch('https://api.web3forms.com/submit', {
         method: 'POST',
         body: formData,
       });

       if (response.ok) {
         setIsSubmitted(true);
         setTimeout(() => {
           setIsSubmitted(false);
           setFormState({ name: "", email: "", message: "" });
         }, 3000);
       }
     } catch (error) {
       alert('Greška pri slanju.');
     }
   };
   ```

**GOTOVO! 🎉** Najbrža opcija - odmah funkcioniše!

---

## 🔥 Koja Opcija?

| Opcija | Setup Vreme | Profesionalnost | Customizacija |
|--------|-------------|-----------------|---------------|
| **Resend** | 5 min | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Gmail** | 10 min | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| **Web3Forms** | 2 min | ⭐⭐⭐ | ⭐⭐⭐ |

### Moja Preporuka:
- **Za produkciju:** RESEND
- **Za brzo testiranje:** WEB3FORMS
- **Ako već koristiš Gmail:** GMAIL SMTP

---

## 🧪 Testiranje

Nakon podešavanja:

1. Idi na http://localhost:3000/#contact
2. Popuni formu
3. Klikni "Pošalji Poruku"
4. Proveri inbox: `fantomsystems@gmail.com`

---

## ⚠️ VAŽNO: `.env.local`

**NIKAD ne commit-uj `.env.local` fajl u Git!**

`.gitignore` već sadrži ovu liniju, ali proveri:
```
.env*.local
```

---

## 💡 Dodatno: Vercel Deploy

Kada deploy-uješ na Vercel:

1. Idi na Vercel Dashboard → Your Project → Settings → Environment Variables
2. Dodaj svoje env varijable:
   - `RESEND_API_KEY` ili
   - `GMAIL_USER` i `GMAIL_APP_PASSWORD`
3. Redeploy

---

**Pitanja? Javi mi! 🚀**


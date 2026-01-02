# 📧 Web3Forms - Email Setup (TRENUTNO AKTIVNO)

## ✅ TRENUTNO STANJE

Sajt trenutno koristi **Web3Forms demo access key** za testiranje.
Poruke će stizati, ALI sa ograničenjima jer je demo key.

---

## 🚀 KAKO DOBITI SVOJ KLJUČ (2 minuta)

### Korak 1: Registracija
1. Idi na: **https://web3forms.com**
2. Klikni **"Get Started - It's Free"**
3. Registruj se sa: **fantomsystems@gmail.com**

### Korak 2: Verifikuj Email
1. Proveri inbox: `fantomsystems@gmail.com`
2. Klikni na link za verifikaciju u email-u

### Korak 3: Kreiraj Access Key
1. Nakon login-a, klikni **"Create New Access Key"**
2. Unesi ime: `Fantom Website`
3. Unesi email: `fantomsystems@gmail.com`
4. Klikni **"Create"**
5. **KOPIRAJ ACCESS KEY** (npr: `abc123-def456-ghi789`)

### Korak 4: Ubaci u Kod
1. Otvori: `components/Contact.tsx`
2. Nađi liniju:
   ```typescript
   formData.append('access_key', '1a2e72dd-77b6-4dc3-8a29-ab5d16a5bcbb');
   ```
3. Zameni sa svojim key-om:
   ```typescript
   formData.append('access_key', 'tvoj_novi_key_ovde');
   ```
4. Sačuvaj fajl

**GOTOVO!** 🎉

---

## 🎯 PREDNOSTI WEB3FORMS

✅ **100% Besplatno** - Neograničeno poruka  
✅ **Instant Setup** - 2 minuta  
✅ **Bez Server Konfiguracije** - Radi odmah  
✅ **Bez Gmail App Password muke**  
✅ **Anti-Spam Zaštita** uključena  
✅ **Email Notifikacije** za svaku poruku  

---

## 📧 KAKO IZGLEDAJU EMAILOVI

```
Subject: 🔔 Nova poruka od Filip

From: Fantom Website
To: fantomsystems@gmail.com

Ime: Filip
Email: filip@test.com
Telefon: +381 65 XXX XXXX

Poruka:
Zanima me vaša ponuda...
```

---

## ⚠️ DEMO KEY OGRANIČENJA

Trenutni demo key (`1a2e72dd-...`) ima:
- ❌ Može da šalje na bilo koji email
- ❌ Manje pouzdano
- ❌ Može prestati da radi bilo kad

**MOLIM TE DOBAVI SVOJ KEY ODMAH!** (2 minuta posla)

---

## 🔗 LINKOVI

- **Web3Forms:** https://web3forms.com
- **Dokumentacija:** https://docs.web3forms.com
- **Dashboard:** https://web3forms.com/dashboard

---

## 🆘 POMOĆ

Ako imaš problem:
1. Proveri spam folder
2. Proveri da li si verifikovao email
3. Proveri da li je key tačno kopiran (bez razmaka)

---

**Testiraj odmah - demo key već radi!** ✨


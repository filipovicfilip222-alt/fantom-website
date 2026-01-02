# 🚀 3 NAČINA DA OBJAVIŠ SAJT (Bez Git-a)

## 🥇 NAČIN 1: VERCEL CLI (Najlakše - 2 minuta!)

### Instalacija:
```bash
npm install -g vercel
```

### Deploy:
```bash
# U projektu pokreni:
vercel

# Prvo puta će te pitati:
# - Login sa GitHub ili Email
# - Set up project? → YES
# - Link to existing project? → NO (novi projekat)
# - Project name: fantom-website
# - Directory: ./ (samo Enter)
# - Deploy? → YES

# Čeka 1-2 minuta...
# GOTOVO! 🎉
```

Dobijaš instant link:
```
https://fantom-website.vercel.app
```

---

## 🥈 NAČIN 2: GitHub Desktop (Vizuelno - 5 minuta)

### 1. Instalacija GitHub Desktop:
- Download: https://desktop.github.com
- Instaluj i login sa GitHub nalogom

### 2. Kreiraj Repo:
1. Otvori GitHub Desktop
2. File → Add Local Repository
3. Browse → Izaberi `C:\Users\filip\Documents\FantomSystems`
4. Klikni "Create Repository"
5. Unesi:
   - Name: `fantom-website`
   - Description: `Fantom agency website`
6. Klikni "Create Repository"

### 3. Commit i Push:
1. Vidiš sve fajlove u listi
2. Dole levo: "Initial commit" (može i "First commit")
3. Klikni **"Commit to main"**
4. Klikni **"Publish repository"**
5. ✅ GitHub (ne GitLab)
6. ✅ Može biti Private ili Public
7. Klikni **"Publish repository"**

### 4. Deploy sa Vercel:
1. Idi na https://vercel.com
2. Sign in with GitHub
3. Import Project → Nađi `fantom-website`
4. Klikni **"Deploy"**
5. **GOTOVO!** 🎉

---

## 🥉 NAČIN 3: Zip i Drag & Drop (Instant - 1 minut!)

### 1. Pripremi projekat:
- **OBRIŠI** `node_modules` folder (veliki je)
- **OBRIŠI** `.next` folder ako postoji
- **OSTAVI** sve ostalo

### 2. Upload na Vercel:
1. Idi na: https://vercel.com
2. Sign Up/Login (sa email-om)
3. Klikni **"Add New..."** → **"Project"**
4. Klikni **"Browse"** ili **prevuci** folder u browser
5. Selektuj **CELU `FantomSystems` foldera**
6. Vercel automatski detektuje Next.js
7. Klikni **"Deploy"**
8. **GOTOVO!** 🎉

**Napomena:** Ovaj način je dobar za test, ali za dalje update-ove bolje je Git.

---

## ⚡ KOJA METODA?

| Metoda | Brzina | Lakše | Update-ovi |
|--------|--------|-------|------------|
| **Vercel CLI** | ⚡ 2 min | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **GitHub Desktop** | ⚡ 5 min | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Drag & Drop** | ⚡ 1 min | ⭐⭐⭐⭐⭐ | ⭐⭐ |

**Moja preporuka: VERCEL CLI** (najbrže i najbolje za update-ove)

---

## 🔄 UPDATE SAJTA POSLE:

### Sa Vercel CLI:
```bash
# Izmeniš fajlove, onda:
vercel --prod
# GOTOVO! (30 sekundi)
```

### Sa GitHub Desktop:
1. Izmeniš fajlove
2. Otvori GitHub Desktop
3. Commit changes
4. Push to origin
5. Vercel auto-deploy-uje! ✨

### Sa Drag & Drop:
1. Izmeniš fajlove
2. Ponovo upload celu folderu
3. Vercel deploy-uje

---

## 📦 PRE DEPLOY-a - CHECK LISTA:

✅ `npm run build` - Radi li lokalno?
✅ `.env.local` - Obrisan ili u .gitignore?
✅ `node_modules` - Obrisan (za zip metodu)?
✅ Sve fajlove sačuvao?

---

## 🆘 AKO NEŠTO NE RADI:

### Build Error na Vercel-u?
- Proveri da li lokalno radi: `npm run build`
- Proveri da li imaš sve dependency-je
- Proveri Environment Variables

### "Cannot find module"?
- Proveri `package.json` - sve li je tu?
- Obriši `node_modules` i `.next`
- `npm install` ponovo

---

## 🎯 SADA - NAJBRŽI PUT:

```bash
# OTVORI NOVI TERMINAL i unesi:

npm install -g vercel

# Onda:
cd C:\Users\filip\Documents\FantomSystems
vercel

# Prati uputstva
# Za 2 minuta → LIVE! 🚀
```

---

## 🌐 POSLE DEPLOY-a - CUSTOM DOMEN:

Kad je sajt live na `*.vercel.app`:

1. **Vercel Dashboard** → Tvoj projekat
2. **Settings** → **Domains**
3. Dodaj `fantom.com` (ili šta god kupiš)
4. Poveži DNS (objasniću kad dođemo dotle)

---

**Hoćeš da probamo VERCEL CLI sada?** 

Samo unesi u terminal:
```bash
npm install -g vercel
```

I javi mi kad završi! 🚀


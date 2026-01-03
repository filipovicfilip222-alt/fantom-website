# 🚀 Kako Objaviti Fantom Sajt na fantom.com

## 📋 ŠTA TI TREBA:

1. **Vercel nalog** (besplatno) - za hosting
2. **Domen** (fantom.com ili fantom.co) - ~$10-15/godišnje
3. **GitHub nalog** (besplatno) - za kod

---

## KORAK 1: PUSH NA GITHUB (5 minuta)

### 1.1 Kreiraj GitHub nalog (ako nemaš)
- Idi na: https://github.com
- Sign up besplatno

### 1.2 Push projekat na GitHub

Otvori terminal u projektu i unesi:

```bash
# Inicijalizuj Git (ako već nije)
git init

# Dodaj sve fajlove
git add .

# Commit
git commit -m "Initial commit - Fantom website"

# Kreiraj repo na GitHub
# Idi na https://github.com/new
# Ime: fantom-website
# Public ili Private
# NE dodavaj README/gitignore (već imaš)

# Povezi sa GitHub-om (zameni USERNAME sa svojim)
git remote add origin https://github.com/USERNAME/fantom-website.git

# Push
git branch -M main
git push -u origin main
```

---

## KORAK 2: DEPLOY NA VERCEL (2 minuta)

### 2.1 Registruj se na Vercel
- Idi na: https://vercel.com
- Klikni **"Sign Up"**
- **"Continue with GitHub"** (najlakše)

### 2.2 Import projekta
1. Klikni **"Add New..."** → **"Project"**
2. Nađi svoj **fantom-website** repo
3. Klikni **"Import"**

### 2.3 Konfiguriši
```
Framework Preset: Next.js (automatski detektuje)
Root Directory: ./
Build Command: npm run build (automatski)
Output Directory: (prazno - automatski)
```

### 2.4 Environment Variables (ako koristiš email servis)
- Klikni **"Environment Variables"**
- Dodaj ako imaš:
  - `GMAIL_USER`
  - `GMAIL_APP_PASSWORD`
  (ili šta god koristi za email kad setupujemo)

### 2.5 Deploy!
- Klikni **"Deploy"**
- Čekaj 2-3 minuta
- **GOTOVO!** 🎉

Dobijaš besplatan URL kao:
```
https://fantom-website.vercel.app
```

**Sajt je LIVE!** Možeš ga deliti bilo kome!

---

## KORAK 3: KUPI DOMEN (10 minuta)

### Gde kupiti domen?

**Opcija 1: Vercel Domains** (Najlakše)
- Cena: ~$15/godišnje
- Automatski povezan
- 0 konfiguracije

**Opcija 2: Namecheap** (Popularno)
- Link: https://www.namecheap.com
- Cena: $8-12/godišnje
- Proveri da li je `fantom.com` ili `fantom.co` dostupan

**Opcija 3: GoDaddy** (Popularno u Srbiji)
- Link: https://www.godaddy.com
- Cena: $10-15/godišnje

**Opcija 4: .RS domen (ako hoćeš)**
- `fantom.rs` (srpski domen)
- Link: https://www.rnids.rs
- Cena: ~2000 RSD/godišnje

**✅ ODABRAN DOMEN: `fantom.systems`**

### Proveri dostupnost:
```
fantom.com - proveri
fantom.co - proveri
fantom.io - proveri
fantom.systems - ✅ ODABRAN
getfantom.com - backup
thefantom.com - backup
```

---

## KORAK 4: POVEŽI DOMEN SA VERCEL

### Ako kupiš domen preko Vercel-a:
✅ **Automatski povezano - GOTOVO!**

### Ako kupiš domen drugde (Namecheap, GoDaddy):

#### 4.1 U Vercel-u:
1. Otvori svoj projekat
2. Idi na **"Settings"** → **"Domains"**
3. Unesi svoj domen (npr. `fantom.com`)
4. Klikni **"Add"**
5. Vercel ti daje DNS zapise:

```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

#### 4.2 U registraru (Namecheap/GoDaddy):
1. Login na Namecheap/GoDaddy
2. Idi na **"Manage Domains"**
3. Klikni na svoj domen
4. Idi u **"Advanced DNS"** ili **"DNS Settings"**
5. Dodaj DNS zapise koje ti je Vercel dao:

```
A Record:
Host: @
Value: 76.76.21.21
TTL: Automatic

CNAME Record:
Host: www
Value: cname.vercel-dns.com
TTL: Automatic
```

6. **Save**
7. Čekaj **10 minuta - 24 sata** da se DNS propagira

#### 4.3 Provera
```bash
# U terminalu ili CMD
nslookup fantom.com
```

Kad vidiš Vercel IP (76.76.21.21), znači radi!

---

## KORAK 5: SSL SERTIFIKAT (Automatski)

✅ Vercel **automatski** dodaje HTTPS
✅ Besplatno
✅ Auto-renew

Kad DNS radi, za 5-10 minuta imaćeš:
```
https://fantom.com ✅ (secure)
```

---

## 🎯 SAŽETAK - CELA PROCEDURA:

```
1. Push na GitHub          → 5 min
2. Deploy na Vercel        → 2 min
3. Kupi domen             → 10 min
4. Poveži DNS             → 2 min (čeka 10min-24h)
5. GOTOVO!                → https://fantom.com LIVE! 🎉
```

**Ukupno vreme: 20 min aktivnog rada + čekanje DNS-a**

---

## 💰 CENA:

- **Hosting (Vercel):** BESPLATNO (Hobby plan)
- **Domen:** $10-15/godišnje
- **SSL:** BESPLATNO (uključeno)

**Ukupno: ~$12/godišnje** 🎯

---

## 🔄 KAKO UPDATE-OVATI SAJT POSLE:

Svaki put kad hoćeš da izmeniš sajt:

```bash
# Izmeni fajlove
# Onda:
git add .
git commit -m "Update XYZ"
git push

# Vercel AUTOMATSKI redeploy-uje! (30 sekundi)
```

**Bez komplikacija!** ✨

---

## ⚡ ALTERNATIVE ZA VERCEL:

Ako ne želiš Vercel, imaš još opcija:

**1. Netlify** (isto kao Vercel)
- https://www.netlify.com
- Besplatno
- Sličan proces

**2. Cloudflare Pages** (brz)
- https://pages.cloudflare.com
- Besplatno
- Odličan za brzinu

**3. AWS Amplify** (za advanced)
- https://aws.amazon.com/amplify
- Besplatno za mali sajt

---

## 🆘 NAJČEŠĆI PROBLEMI:

### "DNS not propagating"
- Čekaj 24h
- Proveri da li si tačno uneo zapise
- Koristi: https://dnschecker.org

### "Build Failed"
- Proveri da li `npm run build` radi lokalno
- Proveri env variables ako koristiš

### "Domain already taken"
- Probaj druge ekstenzije (.co, .io, .rs)
- Dodaj prefiks (get, the, my)

---

## 📞 SPREMAM TI QUICK GUIDE:

Ako hoćeš, mogu ti napraviti **.sh script** koji automatski:
- Pravi GitHub repo
- Push-uje kod
- Povezuje sa Vercel

**Samo javi!** 🚀

---

## ✅ SADA:

1. **Push na GitHub** - hoćeš da ti pomognem?
2. **Domen** - koji hoćeš? (.com, .co, .rs?)
3. **Deploy** - imam sve spremno!

**Javi mi šta prvo da uradimo!** 💪


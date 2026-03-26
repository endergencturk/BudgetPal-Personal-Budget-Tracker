# 💸 BütçeDostu — Kişisel Bütçe Takip Uygulaması

Kişisel gelir ve giderleri kolayca yönetmek için geliştirilmiş, çok kullanıcılı bir bütçe takip web uygulaması. Sıfır bağımlılık, sıfır kurulum — tarayıcıda çalışır.

🔗 **Demo:** [endergencturk.github.io/butce-takip-app](https://endergencturk.github.io/butce-takip-app/?v=2)

---

## 📸 Ekran Görüntüleri

![BütçeDostu Ana Ekran](https://github.com/user-attachments/assets/fe5713c4-bfd7-4ddc-bf88-8db38a45dbbc)

---

## 🚀 Özellikler

### 👤 Kullanıcı Yönetimi
- Çoklu kullanıcı desteği (ekleme, yeniden adlandırma, silme)
- Her kullanıcıya özel veri, bütçe hedefleri ve PIN koruması

### 💰 İşlem Takibi
- Gelir / gider ekleme ve düzenleme
- **Not / yorum** ekleme her işleme
- **Taksitli harcama** — tutar aylara otomatik bölünür (2–24 taksit)
- **🔁 Tekrarlayan işlemler** — haftalık / aylık / yıllık, bitiş tarihi destekli
- **💱 İşlem bazlı para birimi** — her işleme ayrı döviz seçimi, otomatik dönüşüm
- Etiket sistemi ile işlemleri etiketle ve filtrele

### 📊 Analiz & Raporlama
- Aylık gelir/gider özeti ve net bakiye
- **📎 Aylık bütçe hedefi** — harcama hedefi belirle, progress bar ile takip et
- **📑 Finansal Özet Raporu** — son 1/3/6/12 aya ait KPI'lar, kategori dağılımı, aylık trend
- **🔍 Harcama anomali tespiti** — geçmiş 3 aya göre alışılmadık harcamaları otomatik yakalar
- Kategori bazlı harcama analizi ve limit yönetimi
- ⚠️ Limit uyarıları (%80 ve aşım bildirimi)
- Günlük harcama trendi grafiği
- 📊 Ay karşılaştırma grafiği — son 3 / 6 / 12 aya bak
- Yıllık net bakiye analizi (aylık bazda)

### 🗓 Bütçe Planlama
- Bir sonraki ay için kategori bazlı bütçe planı oluştur
- Bu ayki harcamalarla karşılaştır, farkı görsel olarak takip et

### 🎨 Kategori Yönetimi
- Kategori ekleme, silme
- 🎨 Özel renk seçici ile her kategoriye kendi rengi
- Kategori bazlı bütçe limitleri

### 👥 Paylaşım & İşbirliği
- **Paylaşım kodu** — bütçe verisini base64 kodla arkadaşına gönder
- **Web Share API** entegrasyonu — tek tuşla paylaş
- **Sürükle-bırak JSON import** — arkadaşından gelen veriyi kolayca aktar
- İçe aktarılan işlemler mevcut verilerle birleşir, üzerine yazmaz

### 📤 Export & Yedekleme
- 📄 **JSON** export / import
- 📊 **CSV** export (Excel uyumlu)
- 📗 **Excel (.xlsx)** export
- 📕 **PDF Finansal Özet Raporu**

### 🔔 Bildirim & Hatırlatıcı
- Web Notifications API entegrasyonu
- Başlık / tarih / saat / tekrar sıklığı ayarlanabilir hatırlatıcılar
- Topbar'da yaklaşan hatırlatıcı sayacı

### 📱 Mobil Uygulama Deneyimi
- **Bottom navigation** — 5 sekme: Özet / İşlemler / Analiz / Rapor / Ayarlar
- **FAB butonu** — tek dokunuşla işlem ekleme
- **Bottom sheet form** — yukarı sürgülü işlem ekleme paneli
- **Swipe-to-delete** — işlemi sola kaydırarak sil
- **Sayfa arası swipe** — parmakla sayfalar arası geçiş
- **PWA** — ana ekrana eklenebilir, offline çalışır

### 🔐 Güvenlik
- 4 haneli **PIN koruması** — uygulama açılışında otomatik kilit
- PIN kurulum, değiştirme ve sıfırlama

### 🌍 Genel
- 🌐 Türkçe / İngilizce dil desteği
- 🌙 Dark mode
- **💱 9 para birimi:** TRY, USD, EUR, GBP, JPY, CHF, CAD, AUD, SAR
- 💾 Tüm veriler `localStorage`'da saklanır, sunucu gerekmez

---

## 🎯 Amaç

Bu proje:

- Gerçek bir ihtiyaca çözüm üretmek
- Frontend geliştirme becerilerini geliştirmek
- Kullanıcı odaklı bir arayüz tasarlamak
- Öğrenilen bilgileri gerçek bir ürüne dönüştürmek

amacıyla geliştirilmiştir.

---

## 🛠️ Teknolojiler

| Teknoloji | Kullanım |
|---|---|
| HTML / CSS / Vanilla JS | Uygulama temeli |
| LocalStorage | Veri saklama |
| [Chart.js](https://www.chartjs.org/) | Grafik ve görselleştirme |
| [jsPDF](https://github.com/parallax/jsPDF) | PDF rapor oluşturma |
| [SheetJS (xlsx)](https://sheetjs.com/) | Excel export |
| [Google Fonts](https://fonts.google.com/) | Plus Jakarta Sans, JetBrains Mono |
| Web Notifications API | Hatırlatıcı bildirimleri |
| Web Share API | Veri paylaşımı |
| Service Worker | Offline PWA desteği |

---

## 📦 Kurulum

Kurulum gerekmez. `index.html` dosyasını tarayıcıda aç, kullan.

```bash
git clone https://github.com/endergencturk/butce-takip-app.git
cd butce-takip-app
# index.html dosyasını tarayıcıda aç
```

---

## 📸 Ekran Görüntüsü GitHub'da Görünmüyorsa

1. Repo'da herhangi bir **Issue** aç
2. Ekran görüntüsünü yorum kutusuna **sürükle-bırak** yap
3. GitHub otomatik URL üretir: `![image](https://github.com/user-attachments/assets/...)`
4. Bu URL'yi README'deki `![...]()` içine yapıştır
5. Issue'yu kaydetmeden kapat

---

## 📄 Lisans

MIT

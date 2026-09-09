# Antrenman Notlarım

Kişisel antrenman programını, 40 dakikalık antrenman kartlarını, egzersiz açıklamalarını ve günlük kayıtlarını bir arada tutan sade bir GitHub Pages sitesidir.

Canlı site: https://melihmertoskay.github.io/antrenman-notlarim/

## Bölümler

- **Ana Sayfa:** Diğer dört bölüme yönlendirir.
- **Program:** Günlere göre hedeflenen antrenmanları gösterir. Aktif plan 9–26 Eylül 2026 arasındaki üç haftayı kapsar; ilk hafta 10 günlük aradan kontrollü dönüş olarak düzenlenmiştir.
- **Günlük:** Yapılan egzersizlerin tarih, antrenman, yük, set/tekrar ve not kayıtlarını listeler; kayıt ekleme, düzenleme ve silme arayüzünü içerir.
- **Antrenmanlar:** Salon, ekipmansız ve yüzme antrenman kartlarını listeler.
- **Egzersizler:** Kodlu egzersiz kartlarını; yapılış, çalışan kaslar, dikkat noktaları, görsel ve geçmiş yük bilgisiyle gösterir.

## Dosya düzeni

```text
index.html                              Ana sayfa
01-program/index.html                   Program
02-gunluk/index.html                    Günlük arayüzü
02-gunluk/gunlukverileri.js             Günlük veri modeli
03-antrenmanlar/index.html              Antrenman listesi
03-antrenmanlar/antrenman.html          Antrenman kartı
03-antrenmanlar/antrenman-penceresi.js  Ortak antrenman popup'ı
04-egzersizler/index.html               Egzersiz listesi ve kartları
04-egzersizler/egzersizverileri.js      Egzersiz açıklamaları ve görsel eşlemeleri
04-egzersizler/kodlar.js                Egzersiz kodları ve eski ad eşlemeleri
04-egzersizler/gorseller/                Egzersiz görselleri
```

## Temel kavramlar

- **Antrenman kartı:** Birkaç egzersizin birleşmesiyle oluşan yaklaşık 40 dakikalık çalışma.
- **Egzersiz kartı:** Tek bir hareketin açıklamasını, görselini ve geçmiş kayıtlarını gösteren popup.
- **Günlük kaydı:** Tarih, antrenman, egzersiz, kullanılan yük, set/tekrar ve isteğe bağlı nottan oluşan veri.

## Günlük veri modeli

```js
{
  id: "benzersiz-kayit-kodu",
  gun: "YYYY-AA-GG",
  antrenman: "S1",
  egzersiz: "Egzersiz adı",
  agirlik: "Kullanılan yük",
  setTekrar: "Set × tekrar",
  aciklama: "İsteğe bağlı not"
}
```

Aynı kayıt üç görünümde kullanılır:

1. Günlük sayfası kayıtları tarihe göre gruplar.
2. Antrenman kartı kayıtları `antrenman` alanına göre süzer.
3. Egzersiz kartı kayıtları `egzersiz` alanına göre süzer.

GitHub Pages statik olduğu için arayüzden girilen değişiklikler tarayıcının `localStorage` alanında saklanır. Aynı tarayıcıda kalır; cihazlar arasında eşitlenmez. Cihazlar arası eşitleme için ileride çevrim içi veritabanı ve kullanıcı girişi eklenmelidir.

Repoya kalıcı olarak eklenen günlük kayıtları `GUNLUK_BASLANGIC` dizisinde tutulur. `GUNLUK_BASLANGIC_SURUMU` değiştiğinde yeni kayıtlar, tarayıcıdaki mevcut kişisel kayıtlar silinmeden birleştirilir. Başlangıç veri paketi en son 9 Eylül 2026 tarihli S4 antrenmanıyla güncellenmiştir.

## Egzersiz adlandırma standardı

Başlıklarda yalnızca hareketi veya varyasyonu ayırt etmek için gerekli bilgiler tutulur. Bench desteği, oturma ve ayakta durma gibi uygulama ayrıntıları hareketin kimliğini değiştirmiyorsa açıklama ve görselde kalır. `Incline`, `Romanian`, `tek bacak` ve `dar tutuş` gibi hareketi gerçekten farklılaştıran bilgiler başlıkta korunur.

Eski günlük kayıtlarında bulunan uzun adlar silinmez. `04-egzersizler/kodlar.js` içindeki eş-ad tablosu, bunları arayüzde güncel kısa başlıklarla gösterir ve doğru egzersiz kartına bağlar.

## Görseller

Egzersiz görselleri başlangıç ve bitiş pozisyonlarını, hareket yönünü ve çalışan kas bölgelerini gösterir. Dosyalar `04-egzersizler/gorseller/` klasöründe tutulur; eşlemeleri `egzersizverileri.js` içindedir. Aynı egzersiz farklı antrenmanlarda yer aldığında tek görseli paylaşır.

S2, S3 ve S4 antrenmanlarındaki bütün egzersiz kartları görselleştirilmiştir. Aynı egzersiz birden fazla antrenmanda bulunuyorsa mevcut görsel yeniden kullanılır.

## Popup davranışı

Program ve Antrenmanlar sayfasındaki bir antrenmana basıldığında antrenman kartı popup olarak açılır. Geri tuşu önce açık egzersiz kartını, ardından antrenman popup'ını kapatır. Programdaki bugünün antrenman düğmesi kategori renginde, alternatifler nötr gri gösterilir.

## Yayınlama ve bakım

Site `main` dalından GitHub Pages ile yayınlanır. HTML, CSS ve JavaScript doğrudan tarayıcıda çalışır. Klasör yapısı, veri modeli, adlandırma veya ortak davranışlar değiştiğinde README aynı commit içinde güncellenmelidir.

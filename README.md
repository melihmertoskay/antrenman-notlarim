# Antrenman Notlarım

Kişisel antrenman programını, 40 dakikalık antrenman kartlarını, egzersiz açıklamalarını ve günlük kayıtlarını bir arada tutan sade bir GitHub Pages sitesidir.

Canlı site: https://melihmertoskay.github.io/antrenman-notlarim/

## Bölümler

- **Ana Sayfa:** Diğer dört bölüme yönlendirir.
- **Program:** Günlere göre hedeflenen antrenmanları gösterir. Aktif plan 9–26 Eylül 2026 arasındaki üç haftayı kapsar; ilk hafta 10 günlük aradan kontrollü dönüş olarak düzenlenmiştir.
- **Günlük:** Antrenman günlerini tarih satırlarında listeler. Bir satır seçildiğinde egzersiz, yük, set/tekrar ve notları içeren tarih başlıklı kart popup olarak açılır; kayıt ekleme, düzenleme ve silme arayüzü korunur; yeni kayıtta zorluk seviyesi de seçilebilir.
- **Antrenmanlar:** Salon, ekipmansız ve yüzme antrenman kartlarını listeler. S1–S4 tablolarındaki `Son ağırlık` sütunu her egzersizin en yeni kayıtlı yükünü gösterir. Tüm antrenman kartlarındaki `Zorluk` sütunu son seviyeyi (`Kolay`, `Orta`, `Zor`) ve aynı egzersizin art arda bu seviyede çalışıldığı gün sayısını gösterir (`2 × Orta` gibi). Önceki notlardan çıkarılan seviyeler `Tahmini` olarak işaretlenir; kayıt olmayan hareketlerde `Kayıt yok` görünür.
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
- **Günlük kaydı:** Tarih, antrenman, egzersiz, kullanılan yük, set/tekrar, isteğe bağlı zorluk seviyesi ve nottan oluşan veri.

## Günlük veri modeli

```js
{
  id: "benzersiz-kayit-kodu",
  gun: "YYYY-AA-GG",
  antrenman: "S1",
  egzersiz: "Egzersiz adı",
  agirlik: "Kullanılan yük",
  setTekrar: "Set × tekrar",
  zorluk: "Kolay | Orta | Zor | boş",
  aciklama: "İsteğe bağlı not"
}
```

Eski kayıtlarda `zorluk` alanı çoğunlukla yoktur. Arayüz açık zorluk notlarını önce kullanır; nottan çıkarılabilen `rahat/hafif` ifadelerini Kolay, `zor/yarım/ağrı` ifadelerini Zor, `ortalama` ifadelerini Orta kabul eder. Açıklamasız tamamlanmış kayıtlar şimdilik Orta varsayılır. Bu hesaplar `Tahmini` ibaresiyle gösterilir ve günlük kaydını değiştirmez. Seriler, bir egzersizin kayıtlı antrenman günlerinde geriye doğru kesintisiz aynı seviyede olmasını sayar. Kullanıcı Günlük sayfasından zorluğu seçerse tahmin yerine seçilen değer kullanılır.

Aynı kayıt üç görünümde kullanılır:

1. Günlük sayfası kayıtları tarihe göre gruplar.
2. Antrenman kartı kayıtları `antrenman` alanına göre süzer.
3. Egzersiz kartı kayıtları `egzersiz` alanına göre süzer.

GitHub Pages statik olduğu için arayüzden girilen değişiklikler tarayıcının `localStorage` alanında saklanır. Aynı tarayıcıda kalır; cihazlar arasında eşitlenmez. Cihazlar arası eşitleme için ileride çevrim içi veritabanı ve kullanıcı girişi eklenmelidir.

Repoya kalıcı olarak eklenen günlük kayıtları `GUNLUK_BASLANGIC` dizisinde tutulur. `GUNLUK_BASLANGIC_SURUMU` değiştiğinde yeni kayıtlar, tarayıcıdaki mevcut kişisel kayıtlar silinmeden birleştirilir. Düzeltilmesi gereken mevcut kayıt kimlikleri `GUNLUK_ZORUNLU_GUNCELLEME_IDLERI` ile bir defaya mahsus yenilenebilir. Başlangıç veri paketi en son 22 Ekim 2026 tarihli S2 antrenmanıyla güncellenmiştir. 24 Eylül ve 17 Ekim tarihlerindeki 20 kg calf raise yükü tek el için belirtilmediğinden aynen 20 kg olarak saklanır.

25 Eylül S2 kaydında tek kol row 15 kg ile hafif geçtiği için bir sonraki hedef 20 kg plaka olarak işaretlendi; form bozulursa 15 kg'da kalınır. Reverse fly ve biceps varyasyonlarında her elde 7 kg, pullover'da 15 kg korunur. Hammer curl'ün son iki tekrarı tamamlanamadı; bir sonraki S2'de hammer curl, biceps curl'den önce gelir. Eski günlük kayıtları değiştirilmez. Hedef ağırlıklar kart tablosundan çıkarılmıştır; aşağıdaki tarihsel notta yer alan hedef, 25 Eylül antrenmanı sonrası verilen açıklamadır.

14 Ekim S1 günlüğünde beş egzersizin yükü ve kullanıcı tarafından bildirilen Kolay / Orta / Zor seviyeleri saklanır. Dambıl bench press kaydında sonlara doğru bilek ağrısı olduğu ayrıca belirtilir. O günün set ve tekrar sayısı bildirilmediğinden veri alanı boş bırakılır. Ağrı nedeniyle hedef yük otomatik yükseltilmez.

18 Ekim S2 günlüğünde tek kol row Kolay; reverse fly, pullover, hammer curl ve biceps curl Zor olarak kaydedildi. Reverse fly her elde 7 kg ile 10 + 9 + 8 tekrar yapıldı; biceps curl tamamlanamadı. O günün diğer hareketlerine ait kullanılan ağırlıklar ve kesin tekrar sayıları bildirilmediği için boş tutuldu. Son ağırlık göstergesi boş yükleri atlayıp önceki teyit edilmiş yükü gösterir. Antrenman tarihi, 18 Ekim akşamındaki reverse fly mesajı ve hemen ardından gece yarısından sonra gelen S2 bitirme mesajının aynı seansa ilişkin olduğu kabul edilerek 18 Ekim yazıldı.

21 Ekim S1 günlüğünde bench press her elde 12,5 kg, lateral raise her elde 5 kg, incline press her elde 10 kg, shoulder press her elde 7 kg, triceps extension 10 kg ile Orta olarak kaydedildi. Lateral raise 7 kg yapılamadığı için 5 kg'a indirildi. Incline için antrenman sırasında iki set bildirildi; kesin tekrarlar ve son setin yapılıp yapılmadığı belirtilmedi. Diğer hareketlerde kartın 3 × 10 düzeni kullanıldı.

22 Ekim S2 günlüğünde tek kol row Kolay, reverse fly Zor, pullover Orta; hammer ve biceps curl her elde 7 kg ile Orta kaydedildi. Curl hareketleri ayrıca çok zorladı. Reverse fly'ın yalnız son setinde her elde 5 kg kullanıldığı teyit edildi; diğer set yükleri ve tekrarlar belirtilmedi. Row ve pullover'ın o günkü yükleri bildirilmediği için boş kaldı. Kullanıcı son birkaç antrenmanda önceki ağırlıkları tamamlamakta zorlandığını bildirdi.

## Egzersiz adlandırma standardı

Başlıklarda yalnızca hareketi veya varyasyonu ayırt etmek için gerekli bilgiler tutulur. Bench desteği, oturma ve ayakta durma gibi uygulama ayrıntıları hareketin kimliğini değiştirmiyorsa açıklama ve görselde kalır. `Incline`, `Romanian`, `tek bacak` ve `dar tutuş` gibi hareketi gerçekten farklılaştıran bilgiler başlıkta korunur.

Eski günlük kayıtlarında bulunan uzun adlar silinmez. `04-egzersizler/kodlar.js` içindeki eş-ad tablosu, bunları arayüzde güncel kısa başlıklarla gösterir ve doğru egzersiz kartına bağlar.

## Görseller

Egzersiz görselleri başlangıç ve bitiş pozisyonlarını, hareket yönünü ve çalışan kas bölgelerini gösterir. Dosyalar `04-egzersizler/gorseller/` klasöründe tutulur; eşlemeleri `egzersizverileri.js` içindedir. Aynı egzersiz farklı antrenmanlarda yer aldığında tek görseli paylaşır.

S1, S2, S3 ve S4 antrenmanlarındaki bütün egzersiz kartları görselleştirilmiştir. Aynı egzersiz birden fazla antrenmanda bulunuyorsa mevcut görsel yeniden kullanılır. S3 kartındaki Bulgarian split squat, denge sorunu nedeniyle 17 Eylül 2026'da B14 kodlu dambıl sumo squat ile değiştirilmiştir. 24 Eylül 2026'da salondaki dambıllar 15 kg ile sınırlı olduğu ve plaka kalçada rahat durmadığı için hip thrust S3'ten çıkarılmıştı. 17 Ekim 2026'da alt makara olmadığı için dambıl hip thrust geçici olarak geri alınmıştı. Dambılın 15 kg sınırı nedeniyle kullanıcı S3'te B16 kodlu barbell glute bridge'e geçti. 17 Ekim S3 antrenmanında 20 kg ile 3 × 10 tamamlandı ve Zor olarak değerlendirildi. Aynı gün goblet squat 20 kg 3 × 10, deadlift 50 kg 3 × 5 ve sumo squat 20 kg 3 × 10 Orta; calf raise 20 kg 3 × 15 Kolay olarak kaydedildi. Glute bridge için yük artışı şimdilik önerilmez. B4 hip thrust ve B15 kablo pull-through kartları geçmiş kayıtların okunması için kalır. Goblet ve sumo squat 20 kg plaka ile yapılabilir; eski egzersiz adları günlükteki geçmişle eşleşmeleri için korunur. Yeni hareketin açıklaması ve SVG çizimi egzersiz kartında gösterilir.

Tarayıcıların eski görsel eşlemelerini, günlük verilerini veya popup içindeki antrenman sayfasını önbellekte tutmaması için veri dosyaları (`gunlukverileri.js`, `egzersizverileri.js`, `kodlar.js`, `antrenman-penceresi.js`) elle güncellenen bir sürüm numarası yerine her sayfa yüklemesinde `document.write` ile otomatik üretilen bir zaman damgasıyla (`?v=Date.now()`) çağrılır; popup içindeki antrenman sayfası da aynı şekilde `location.replace()` ile her açılışta taze yüklenir. Bu sayede içerik değiştiğinde commit içinde elle sürüm numarası güncellemek gerekmez.

## Popup davranışı

Program ve Antrenmanlar sayfasındaki bir antrenmana basıldığında antrenman kartı popup olarak açılır. Geri tuşu önce açık egzersiz kartını, ardından antrenman popup'ını kapatır. Programdaki bugünün antrenman düğmesi kategori renginde, alternatifler nötr gri gösterilir.

## Yayınlama ve bakım

Site `main` dalından GitHub Pages ile yayınlanır. HTML, CSS ve JavaScript doğrudan tarayıcıda çalışır. Klasör yapısı, veri modeli, adlandırma veya ortak davranışlar değiştiğinde README aynı commit içinde güncellenmelidir.

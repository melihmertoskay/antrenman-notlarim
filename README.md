# Antrenman Notlarım

Kişisel antrenman programını, 40 dakikalık antrenman kartlarını, egzersiz açıklamalarını ve günlük kayıtlarını bir arada tutan sade bir GitHub Pages sitesidir.

Canlı site: https://melihmertoskay.github.io/antrenman-notlarim/

## Bölümler

- **Ana Sayfa:** Diğer beş bölüme yönlendirir.
- **Program:** Günlere göre hedeflenen antrenmanları gösterir. Aktif plan 9–26 Eylül 2026 arasındaki üç haftayı kapsar; ilk hafta 10 günlük aradan kontrollü dönüş olarak düzenlenmiştir.
- **Günlük:** Antrenman günlerini tarih satırlarında listeler. Bir satır seçildiğinde egzersiz, yük, set/tekrar ve notları içeren tarih başlıklı kart popup olarak açılır; kayıt ekleme, düzenleme ve silme arayüzü korunur; yeni kayıtta zorluk seviyesi de seçilebilir.
- **Antrenmanlar:** Salon, ekipmansız ve yüzme antrenman kartlarını listeler. S1–S4 tablolarındaki `Son ağırlık` sütunu her egzersizin en yeni kayıtlı yükünü gösterir. Tüm antrenman kartlarındaki `Zorluk` sütunu son seviyeyi (`Kolay`, `Orta`, `Zor`) ve aynı egzersizin art arda bu seviyede çalışıldığı gün sayısını gösterir (`2 × Orta` gibi). Önceki notlardan çıkarılan seviyeler `Tahmini` olarak işaretlenir; kayıt olmayan hareketlerde `Kayıt yok` görünür.
- **Egzersizler:** Kodlu egzersiz kartlarını; yapılış, çalışan kaslar, dikkat noktaları, görsel ve geçmiş yük bilgisiyle gösterir.
- **Tablo:** S1–S4 salon antrenmanlarının günlükte kayıtlı hareketlerini satırlarda, günleri sütunlarda gösterir. Kesişimlerde yalnızca kg değeri kısa biçimde gösterilir (örneğin `Her elde 7 kg` → `7 kg`); tam yük ifadesi günlük kaydında korunur. Yazı renkleri zorluğa göre yeşil (Kolay), sarı (Orta), kırmızıdır (Zor). Belirlenemeyen zorluk nötr kalır. S1–S4 ve Tümü filtreleri bulunur. Varsayılan görünüm yalnızca seçili güncel salon kartlarında yer alan hareketleri kart sırasıyla gösterir; `Eskiler: Açık` düğmesi geçmişte kaydı olan, artık kartta bulunmayan hareketleri ayrıca gösterir. Hareket adının önünde egzersiz kodu görünür. Günler kronolojik sıralanır ve tablo açıldığında en yeni güne kaydırılır. Hareket veya tarih başlığı seçilince kart aynı sayfada popup olarak açılır; kapatıldığında tablo, filtre ve kaydırma konumu korunur. Yeni kayıtlar tarayıcıdaki günlük verisinden okunur.

## Dosya düzeni

```text
index.html                              Ana sayfa
01-program/index.html                   Program
02-gunluk/index.html                    Günlük arayüzü
02-gunluk/gunlukverileri.js             Günlük veri modeli
03-antrenmanlar/index.html              Antrenman listesi
03-antrenmanlar/antrenman.html          Antrenman kartı
03-antrenmanlar/antrenman-penceresi.js  Ortak antrenman popup'ı
03-antrenmanlar/salon-kart-satirlari.js S1–S4 ve tablonun ortak hareket sırası
04-egzersizler/index.html               Egzersiz listesi ve kartları
04-egzersizler/egzersizverileri.js      Egzersiz açıklamaları ve görsel eşlemeleri
04-egzersizler/kodlar.js                Egzersiz kodları ve eski ad eşlemeleri
04-egzersizler/gorseller/                Egzersiz görselleri
05-tablo/index.html                     Salon antrenmanları ağırlık tablosu
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

Repoya kalıcı olarak eklenen günlük kayıtları `GUNLUK_BASLANGIC` dizisinde tutulur. `GUNLUK_BASLANGIC_SURUMU` değiştiğinde yeni kayıtlar, tarayıcıdaki mevcut kişisel kayıtlar silinmeden birleştirilir. Düzeltilmesi gereken mevcut kayıt kimlikleri `GUNLUK_ZORUNLU_GUNCELLEME_IDLERI` ile bir defaya mahsus yenilenebilir. Başlangıç veri paketi en son 31 Ekim 2026 tarihli S3 kablo pull-through kaydıyla güncellenmiştir. 24 Eylül ve 17 Ekim tarihlerindeki 20 kg calf raise yükü tek el için belirtilmediğinden aynen 20 kg olarak saklanır.

25 Eylül S2 kaydında tek kol row 15 kg ile hafif geçtiği için bir sonraki hedef 20 kg plaka olarak işaretlendi; form bozulursa 15 kg'da kalınır. Reverse fly ve biceps varyasyonlarında her elde 7 kg, pullover'da 15 kg korunur. Hammer curl'ün son iki tekrarı tamamlanamadı; bir sonraki S2'de hammer curl, biceps curl'den önce gelir. Eski günlük kayıtları değiştirilmez. Hedef ağırlıklar kart tablosundan çıkarılmıştır; aşağıdaki tarihsel notta yer alan hedef, 25 Eylül antrenmanı sonrası verilen açıklamadır.

14 Ekim S1 günlüğünde beş egzersizin yükü ve kullanıcı tarafından bildirilen Kolay / Orta / Zor seviyeleri saklanır. Dambıl bench press kaydında sonlara doğru bilek ağrısı olduğu ayrıca belirtilir. O günün set ve tekrar sayısı bildirilmediğinden veri alanı boş bırakılır. Ağrı nedeniyle hedef yük otomatik yükseltilmez.

18 Ekim S2 günlüğünde tek kol row Kolay; reverse fly, pullover, hammer curl ve biceps curl Zor olarak kaydedildi. Reverse fly her elde 7 kg ile 10 + 9 + 8 tekrar yapıldı; biceps curl tamamlanamadı. O günün diğer hareketlerine ait kullanılan ağırlıklar ve kesin tekrar sayıları bildirilmediği için boş tutuldu. Son ağırlık göstergesi boş yükleri atlayıp önceki teyit edilmiş yükü gösterir. Antrenman tarihi, 18 Ekim akşamındaki reverse fly mesajı ve hemen ardından gece yarısından sonra gelen S2 bitirme mesajının aynı seansa ilişkin olduğu kabul edilerek 18 Ekim yazıldı.

21 Ekim S1 günlüğünde bench press her elde 12,5 kg, lateral raise her elde 5 kg, incline press her elde 10 kg, shoulder press her elde 7 kg, triceps extension 10 kg ile Orta olarak kaydedildi. Lateral raise 7 kg yapılamadığı için 5 kg'a indirildi. Incline için antrenman sırasında iki set bildirildi; kesin tekrarlar ve son setin yapılıp yapılmadığı belirtilmedi. Diğer hareketlerde kartın 3 × 10 düzeni kullanıldı.

22 Ekim S2 günlüğünde tek kol row Kolay, reverse fly Zor, pullover Orta; hammer ve biceps curl her elde önce 10 kg denenip çok zorladığı için 7 kg'a indirildi; 7 kg ile Orta geçti. Denenen ağırlıkla yapılan tekrar sayısı bildirilmedi. Reverse fly'ın yalnız son setinde her elde 5 kg kullanıldığı teyit edildi; diğer set yükleri ve tekrarlar belirtilmedi. Row ve pullover'ın o günkü yükleri bildirilmediği için boş kaldı. Kullanıcı son birkaç antrenmanda önceki ağırlıkları tamamlamakta zorlandığını bildirdi.

23 Ekim S3, 17 Ekim S3'ün tüm ağırlık, tekrar ve zorluk seviyeleriyle tekrarlandı: goblet squat 20 kg 3 × 10 Orta; deadlift 50 kg 3 × 5 Orta; barbell glute bridge 20 kg 3 × 10 Zor; sumo squat 20 kg 3 × 10 Orta; calf raise 20 kg 3 × 15 Kolay.

29 Ekim S1'de son S1 ağırlıkları korundu: bench press her elde 12,5 kg Orta; lateral raise her elde 5 kg Kolay; incline press her elde 10 kg Orta; shoulder press her elde 7 kg Orta; overhead triceps extension 10 kg Orta. Bu güne ait kesin set ve tekrar sayıları bildirilmediği için boş bırakıldı.

30 Ekim S2'nin ilk hareketi, salondaki 15 kg dambıl sınırı nedeniyle S1 kodlu tek kol kablo row olarak değiştirildi. Alt makarada tek kol makine göstergesinde 18 kg ile Orta yapıldı; set ve tekrar sayıları belirtilmedi. S2 kartı iki kol için ayrı ayrı 3 × 10 gösterir. Eski S6 kodlu dambıl row kartı ve geçmiş günlük kayıtları korunur; yeni hareketin WebP görseli ve uygulama açıklaması egzersiz kartında yer alır. Makine ile dambıl yükleri bire bir karşılaştırılmaz.

## Egzersiz adlandırma standardı

Başlıklarda yalnızca hareketi veya varyasyonu ayırt etmek için gerekli bilgiler tutulur. Bench desteği, oturma ve ayakta durma gibi uygulama ayrıntıları hareketin kimliğini değiştirmiyorsa açıklama ve görselde kalır. `Incline`, `Romanian`, `tek bacak` ve `dar tutuş` gibi hareketi gerçekten farklılaştıran bilgiler başlıkta korunur.

Eski günlük kayıtlarında bulunan uzun adlar silinmez. `04-egzersizler/kodlar.js` içindeki eş-ad tablosu, bunları arayüzde güncel kısa başlıklarla gösterir ve doğru egzersiz kartına bağlar.

## Görseller

Egzersiz görselleri başlangıç ve bitiş pozisyonlarını, hareket yönünü ve çalışan kas bölgelerini gösterir. Dosyalar `04-egzersizler/gorseller/` klasöründe tutulur; eşlemeleri `egzersizverileri.js` içindedir. Aynı egzersiz farklı antrenmanlarda yer aldığında tek görseli paylaşır.

S1, S2, S3 ve S4 antrenmanlarındaki bütün egzersiz kartları görselleştirilmiştir. Aynı egzersiz birden fazla antrenmanda bulunuyorsa mevcut görsel yeniden kullanılır. S3'te Bulgarian split squat denge sorunu nedeniyle 17 Eylül 2026'da dambıl sumo squat ile değiştirilmiştir. Dambıl hip thrust, ağırlık sınırı ve plakanın kalçaya rahat yerleşmemesi nedeniyle çıkarılmış; alt makara bulunamadığında geçici olarak barbell glute bridge kullanılmıştır. 17 ve 23 Ekim kayıtlarında barbell glute bridge 20 kg 3 × 10 Zor olarak saklanır. 31 Ekim'de alt makara bulununca S3'ün üçüncü hareketi kablo pull-through (B3) olmuştur. Makine 6 kg aralıklarla ayarlanır; 12 kg Orta kaydedilmiştir. O gün yalnız bu hareket bildirildiği için diğer S3 hareketleri yapılmış varsayılmaz. Tarihsel hip thrust (B7), Bulgarian split squat (B8) ve barbell glute bridge (B9) egzersiz kartları ve günlük kayıtları korunur.

Egzersiz kodları güncel salon kartlarının hareket sırasını izler: S1'de G1 bench press, G2 lateral raise, G3 incline press, G4 shoulder press, G5 overhead triceps extension; S2'de S1 kablo row, S2 reverse fly, S3 pullover, S4 hammer curl, S5 biceps curl; S3'te B1 goblet squat, B2 deadlift, B3 kablo pull-through, B4 sumo squat, B5 calf raise. S4 aynı egzersiz kodlarını paylaşır. Kodlar görüntü etiketidir; günlük kayıtları egzersiz adıyla eşleştiği için eski veriler kod değişiminden etkilenmez.

Tarayıcıların eski görsel eşlemelerini, günlük verilerini veya popup içindeki antrenman sayfasını önbellekte tutmaması için veri dosyaları (`gunlukverileri.js`, `egzersizverileri.js`, `kodlar.js`, `salon-kart-satirlari.js`, `antrenman-penceresi.js`) elle güncellenen bir sürüm numarası yerine her sayfa yüklemesinde `document.write` ile otomatik üretilen bir zaman damgasıyla (`?v=Date.now()`) çağrılır; popup içindeki antrenman sayfası da aynı şekilde `location.replace()` ile her açılışta taze yüklenir. Bu sayede içerik değiştiğinde commit içinde elle sürüm numarası güncellemek gerekmez.

## Popup davranışı

Program ve Antrenmanlar sayfasındaki bir antrenmana basıldığında antrenman kartı popup olarak açılır. Geri tuşu önce açık egzersiz kartını, ardından antrenman popup'ını kapatır. Programdaki bugünün antrenman düğmesi kategori renginde, alternatifler nötr gri gösterilir.

## Yayınlama ve bakım

Site `main` dalından GitHub Pages ile yayınlanır. HTML, CSS ve JavaScript doğrudan tarayıcıda çalışır. Klasör yapısı, veri modeli, adlandırma veya ortak davranışlar değiştiğinde README aynı commit içinde güncellenmelidir.

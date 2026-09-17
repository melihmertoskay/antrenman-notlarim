// Tek kaynak: antrenman kartı isimleri burada tanımlanır. 03-antrenmanlar/antrenman.html
// kendi workouts objesindeki title alanlarını buradan okur, aynı isim iki yerde tutulmaz.
const ANTRENMAN_ADI={S1:"Göğüs, Omuz ve Arka Kol",S2:"Sırt, Arka Omuz ve Ön Kol",S3:"Bacak, Kalça ve Baldır",S4:"Tam Vücut",E1:"Ekipmansız Üst Vücut",E2:"Ekipmansız Bacak ve Kalça",E3:"Evde Tam Vücut",E4:"Bantla Sırt ve Çekiş",Y1:"Teknik ve Rahat Yüzme",Y2:"Kısa Aralıklı Yüzme",Y3:"Kesintisiz Yüzme"};

// Basit HTML kaçış yardımcısı — Günlük, Antrenmanlar ve Egzersizler sayfaları
// kullanıcı girdisini (ağırlık, not, egzersiz adı vb.) DOM'a yazarken bunu kullanır.
function gunlukKacis(deger=""){const d=document.createElement("div");d.textContent=deger;return d.innerHTML}

const GUNLUK_BASLANGIC=[
  {id:"ornek-s1-1",gun:"2026-08-19",antrenman:"S1",egzersiz:"Dambıl bench press",agirlik:"10 kg",setTekrar:"3 × 10",aciklama:""},
  {id:"ornek-s1-2",gun:"2026-08-19",antrenman:"S1",egzersiz:"Dambıl lateral raise",agirlik:"7 kg",setTekrar:"3 × 10",aciklama:""},
  {id:"ornek-s1-3",gun:"2026-08-19",antrenman:"S1",egzersiz:"Oturarak dambıl shoulder press",agirlik:"7 kg",setTekrar:"3 × 10",aciklama:""},
  {id:"ornek-s1-4",gun:"2026-08-19",antrenman:"S1",egzersiz:"Tek dambılla overhead triceps extension",agirlik:"10 kg",setTekrar:"3 × 10",aciklama:""},
  {id:"2026-08-19-s1-incline-dambil-press",gun:"2026-08-19",antrenman:"S1",egzersiz:"Incline dambıl press",agirlik:"10 kg",setTekrar:"3 × 10",aciklama:""},
  {id:"2026-08-21-s3-goblet-squat",gun:"2026-08-21",antrenman:"S3",egzersiz:"Goblet squat",agirlik:"15 kg",setTekrar:"3 × 10",aciklama:""},
  {id:"2026-08-21-s3-deadlift",gun:"2026-08-21",antrenman:"S3",egzersiz:"Deadlift",agirlik:"40 kg",setTekrar:"3 × 10",aciklama:""},
  {id:"2026-08-21-s3-hip-thrust",gun:"2026-08-21",antrenman:"S3",egzersiz:"Bench üzerinde dambıllı hip thrust",agirlik:"15 kg",setTekrar:"3 × 10",aciklama:""},
  {id:"2026-08-21-s3-bulgarian-split-squat",gun:"2026-08-21",antrenman:"S3",egzersiz:"Bulgarian split squat",agirlik:"5 kg",setTekrar:"Her bacak 3 × 10",aciklama:"Dengemi korumakta zorlandım. Ağırlık ağır gelmese de dengesiz kaldım ve yorulduğum için zor tamamladım. Çok terledim. Calf raise yapmadan antrenmanı bitirdim."},
  {id:"2026-08-22-s2-tek-kol-dambil-row",gun:"2026-08-22",antrenman:"S2",egzersiz:"Tek kol dambıl row",agirlik:"12,5 kg",setTekrar:"3 × 10",aciklama:""},
  {id:"2026-08-22-s2-dambil-reverse-fly",gun:"2026-08-22",antrenman:"S2",egzersiz:"Dambıl reverse fly",agirlik:"Her elde 7 kg",setTekrar:"3 × 10",aciklama:"9. ve 10. tekrarlar zorladı."},
  {id:"2026-08-22-s2-dambil-pullover",gun:"2026-08-22",antrenman:"S2",egzersiz:"Dambıl pullover",agirlik:"12,5 kg",setTekrar:"3 × 10",aciklama:"9. ve 10. tekrarlarda zorlandım. Bileklerim ağrıdı."},
  {id:"2026-08-22-s2-dambil-biceps-curl",gun:"2026-08-22",antrenman:"S2",egzersiz:"Dambıl biceps curl",agirlik:"Her elde 7 kg",setTekrar:"3 × 10",aciklama:""},
  {id:"2026-08-22-s2-dambil-hammer-curl",gun:"2026-08-22",antrenman:"S2",egzersiz:"Dambıl hammer curl",agirlik:"Her elde 7 kg",setTekrar:"3 × 10",aciklama:"Antrenman toplam 50 dakika sürdü."},
  {id:"2026-08-26-s1-dambil-bench-press",gun:"2026-08-26",antrenman:"S1",egzersiz:"Dambıl bench press",agirlik:"Her elde 10 kg",setTekrar:"3 × 10",aciklama:""},
  {id:"2026-08-26-s1-dambil-lateral-raise",gun:"2026-08-26",antrenman:"S1",egzersiz:"Dambıl lateral raise",agirlik:"Her elde 7 kg",setTekrar:"3 × 10",aciklama:""},
  {id:"2026-08-26-s1-incline-dambil-press",gun:"2026-08-26",antrenman:"S1",egzersiz:"Incline dambıl press",agirlik:"Her elde 10 kg",setTekrar:"3 × 10",aciklama:""},
  {id:"2026-08-26-s1-dambil-shoulder-press",gun:"2026-08-26",antrenman:"S1",egzersiz:"Dambıl shoulder press",agirlik:"Her elde 7 kg",setTekrar:"3 × 10",aciklama:""},
  {id:"2026-08-26-s1-dambil-overhead-triceps-extension",gun:"2026-08-26",antrenman:"S1",egzersiz:"Dambıl overhead triceps extension",agirlik:"10 kg",setTekrar:"3 × 10",aciklama:"Antrenman zorlamadı."},
  {id:"2026-09-09-s4-goblet-squat",gun:"2026-09-09",antrenman:"S4",egzersiz:"Goblet squat",agirlik:"15 kg",setTekrar:"3 × 10",aciklama:""},
  {id:"2026-09-09-s4-dambil-bench-press",gun:"2026-09-09",antrenman:"S4",egzersiz:"Dambıl bench press",agirlik:"Her elde 12,5 kg",setTekrar:"3 × 10",aciklama:""},
  {id:"2026-09-09-s4-tek-kol-dambil-row",gun:"2026-09-09",antrenman:"S4",egzersiz:"Tek kol dambıl row",agirlik:"12,5 kg",setTekrar:"3 × 10",aciklama:""},
  {id:"2026-09-09-s4-dambil-romanian-deadlift",gun:"2026-09-09",antrenman:"S4",egzersiz:"Dambıl Romanian deadlift",agirlik:"Her elde 10 kg",setTekrar:"3 × 10",aciklama:""},
  {id:"2026-09-09-s4-dambil-shoulder-press",gun:"2026-09-09",antrenman:"S4",egzersiz:"Dambıl shoulder press",agirlik:"Her elde 7 kg",setTekrar:"3 × 10",aciklama:""},
  {id:"2026-09-12-s3-goblet-squat",gun:"2026-09-12",antrenman:"S3",egzersiz:"Goblet squat",agirlik:"15 kg",setTekrar:"3 × 10",aciklama:""},
  {id:"2026-09-12-s3-deadlift",gun:"2026-09-12",antrenman:"S3",egzersiz:"Deadlift",agirlik:"40 kg",setTekrar:"3 × 10",aciklama:""},
  {id:"2026-09-12-s3-dambil-hip-thrust",gun:"2026-09-12",antrenman:"S3",egzersiz:"Dambıl hip thrust",agirlik:"15 kg",setTekrar:"3 × 10",aciklama:""},
  {id:"2026-09-12-s3-bulgarian-split-squat",gun:"2026-09-12",antrenman:"S3",egzersiz:"Bulgarian split squat",agirlik:"5 kg",setTekrar:"Her bacak 3 × 10",aciklama:"Ortalama zorlukta geçti."},
  {id:"2026-09-13-s1-dambil-bench-press",gun:"2026-09-13",antrenman:"S1",egzersiz:"Dambıl bench press",agirlik:"Her elde 10 kg",setTekrar:"3 × 10",aciklama:""},
  {id:"2026-09-13-s1-dambil-lateral-raise",gun:"2026-09-13",antrenman:"S1",egzersiz:"Dambıl lateral raise",agirlik:"Her elde 7 kg",setTekrar:"3 × 10",aciklama:""},
  {id:"2026-09-13-s1-incline-dambil-press",gun:"2026-09-13",antrenman:"S1",egzersiz:"Incline dambıl press",agirlik:"Her elde 10 kg",setTekrar:"3 × 10",aciklama:""},
  {id:"2026-09-13-s1-dambil-shoulder-press",gun:"2026-09-13",antrenman:"S1",egzersiz:"Dambıl shoulder press",agirlik:"Her elde 7 kg",setTekrar:"3 × 10",aciklama:""},
  {id:"2026-09-13-s1-dambil-overhead-triceps-extension",gun:"2026-09-13",antrenman:"S1",egzersiz:"Dambıl overhead triceps extension",agirlik:"10 kg",setTekrar:"3 × 10",aciklama:""},
  {id:"2026-09-16-s2-tek-kol-dambil-row",gun:"2026-09-16",antrenman:"S2",egzersiz:"Tek kol dambıl row",agirlik:"15 kg",setTekrar:"3 × 10",aciklama:""},
  {id:"2026-09-16-s2-dambil-reverse-fly",gun:"2026-09-16",antrenman:"S2",egzersiz:"Dambıl reverse fly",agirlik:"Her elde 7 kg",setTekrar:"3 × 10",aciklama:""},
  {id:"2026-09-16-s2-dambil-pullover",gun:"2026-09-16",antrenman:"S2",egzersiz:"Dambıl pullover",agirlik:"15 kg",setTekrar:"3 × 10",aciklama:""},
  {id:"2026-09-16-s2-dambil-biceps-curl",gun:"2026-09-16",antrenman:"S2",egzersiz:"Dambıl biceps curl",agirlik:"Her elde 7 kg",setTekrar:"3 × 10",aciklama:""},
  {id:"2026-09-16-s2-dambil-hammer-curl",gun:"2026-09-16",antrenman:"S2",egzersiz:"Dambıl hammer curl",agirlik:"Her elde 7 kg",setTekrar:"3 × 10",aciklama:"Bazı ağırlıkları önceki antrenmana göre artırdım. Hareketlerin çoğu zorladı ama antrenmanı tamamladım."},
  {id:"2026-09-17-s3-goblet-squat",gun:"2026-09-17",antrenman:"S3",egzersiz:"Goblet squat",agirlik:"15 kg",setTekrar:"3 × 10",aciklama:""},
  {id:"2026-09-17-s3-deadlift",gun:"2026-09-17",antrenman:"S3",egzersiz:"Deadlift",agirlik:"40 kg",setTekrar:"3 × 5",aciklama:""},
  {id:"2026-09-17-s3-dambil-hip-thrust",gun:"2026-09-17",antrenman:"S3",egzersiz:"Dambıl hip thrust",agirlik:"15 kg",setTekrar:"3 × 10",aciklama:""},
  {id:"2026-09-17-s3-bulgarian-split-squat",gun:"2026-09-17",antrenman:"S3",egzersiz:"Bulgarian split squat",agirlik:"5 kg",setTekrar:"Tamamlanamadı",aciklama:"Dengede duramadığım için hareket yarım kaldı. Bu nedenle Bulgarian split squat S3 kartından çıkarıldı."},
  {id:"2026-09-17-s3-dambil-calf-raise",gun:"2026-09-17",antrenman:"S3",egzersiz:"Dambıl calf raise",agirlik:"12,5 kg",setTekrar:"3 × 15",aciklama:""}
];

const GUNLUK_DEPOLAMA_ANAHTARI="antrenman-notlarim-gunluk-v1";
const GUNLUK_BASLANGIC_SURUMU="2026-09-17-10";
const GUNLUK_SURUM_ANAHTARI=GUNLUK_DEPOLAMA_ANAHTARI+"-baslangic-surumu";
function gunlukKopyala(deger){return JSON.parse(JSON.stringify(deger))}
function gunlukKayitlariniGetir(){
  try{
    const veri=localStorage.getItem(GUNLUK_DEPOLAMA_ANAHTARI);
    let liste=veri?JSON.parse(veri):gunlukKopyala(GUNLUK_BASLANGIC);
    let eskiAlanBulundu=false;
    liste=liste.map(k=>{
      if(k.antrenman||!k.kart)return k;
      eskiAlanBulundu=true;
      const yeni={...k,antrenman:k.kart};delete yeni.kart;return yeni;
    });
    if(eskiAlanBulundu)localStorage.setItem(GUNLUK_DEPOLAMA_ANAHTARI,JSON.stringify(liste));
    if(localStorage.getItem(GUNLUK_SURUM_ANAHTARI)!==GUNLUK_BASLANGIC_SURUMU){
      const mevcutIdler=new Set(liste.map(k=>k.id));
      GUNLUK_BASLANGIC.forEach(k=>{if(!mevcutIdler.has(k.id))liste.push(gunlukKopyala(k))});
      localStorage.setItem(GUNLUK_DEPOLAMA_ANAHTARI,JSON.stringify(liste));
      localStorage.setItem(GUNLUK_SURUM_ANAHTARI,GUNLUK_BASLANGIC_SURUMU);
    }
    return liste;
  }
  catch(hata){return gunlukKopyala(GUNLUK_BASLANGIC)}
}
function gunlukKayitlariniKaydet(kayitlar){localStorage.setItem(GUNLUK_DEPOLAMA_ANAHTARI,JSON.stringify(kayitlar))}
function gunlukYeniId(){return `kayit-${Date.now()}-${Math.random().toString(36).slice(2,8)}`}
function gunlukKaydiEkle(kayit){const liste=gunlukKayitlariniGetir();liste.push({...kayit,id:kayit.id||gunlukYeniId()});gunlukKayitlariniKaydet(liste)}
function gunlukKaydiGuncelle(id,kayit){const liste=gunlukKayitlariniGetir();const i=liste.findIndex(x=>x.id===id);if(i>-1){liste[i]={...liste[i],...kayit,id};gunlukKayitlariniKaydet(liste)}}
function gunlukKaydiSil(id){gunlukKayitlariniKaydet(gunlukKayitlariniGetir().filter(x=>x.id!==id))}
function gunlukTarihEtiketi(iso){const [y,a,g]=iso.split("-").map(Number);return new Intl.DateTimeFormat("tr-TR",{day:"numeric",month:"long",year:"numeric"}).format(new Date(y,a-1,g))}
const GUNLUK=gunlukKayitlariniGetir();

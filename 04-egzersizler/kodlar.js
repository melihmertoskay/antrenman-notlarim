const EGZERSIZ_KODLARI={
"Omuz ve kol ısınması":"I1","Omuz ve sırt ısınması":"I2","Squat ve bacak ısınması":"I3","Genel ısınma":"I4","Sırt ve omuz ısınması":"I5",
"Dambıl bench press":"G1","Dambıl lateral raise":"G2","Incline dambıl press":"G3","Dambıl shoulder press":"G4","Dambıl overhead triceps extension":"G5","Şınav":"G6","Dar tutuş şınav":"G7","Pike şınavı":"G8",
"Tek kol kablo row":"S1","Dambıl reverse fly":"S2","Dambıl pullover":"S3","Dambıl hammer curl":"S4","Dambıl biceps curl":"S5","Tek kol dambıl row":"S6","Bant row":"S7","Tek kol bant row":"S8","Bant pull-apart":"S9","Bant ile lat pullover":"S10","Superman":"S11","Bant ile biceps curl":"S12",
"Goblet squat":"B1","Deadlift":"B2","Kablo pull-through":"B3","Dambıl sumo squat":"B4","Dambıl calf raise":"B5","Dambıl Romanian deadlift":"B6","Dambıl hip thrust":"B7","Bulgarian split squat":"B8","Barbell glute bridge":"B9","Yavaş squat":"B10","Tek bacak glute bridge":"B11","Reverse lunge":"B12","Tek bacak calf raise":"B13","Glute bridge":"B14","Calf raise":"B15","Ağırlıksız squat":"B16",
"Plank shoulder tap":"K1","Side plank":"K2","Plank":"K3",
"Rahat yüzme":"Y1","Uzun kulaç ve kontrollü nefes":"Y2","Rahat ve kesintisiz yüzme":"Y3","Çok rahat yüzme":"Y4","Tempolu yüzme":"Y5","Bir rahat, bir orta tempo":"Y6","Rahat-orta tempoda kesintisiz yüzme":"Y7","Her 25 metrenin ikinci yarısında hızlan":"Y8"
};


const EGZERSIZ_ES_ADLARI={
  "Bench destekli tek kol dambıl row": "Tek kol dambıl row",
  "Bench üzerinde dambıl pullover": "Dambıl pullover",
  "Oturarak dambıl shoulder press": "Dambıl shoulder press",
  "Tek dambılla overhead triceps extension": "Dambıl overhead triceps extension",
  "Bench üzerinde dambıllı hip thrust": "Dambıl hip thrust",
  "Ayakta dambıllı calf raise": "Dambıl calf raise",
  "Bant ile oturarak row": "Bant row",
  "Bant ile tek kol row": "Tek kol bant row",
  "Kuru zeminde calf raise": "Calf raise",
  "Normal şınav": "Şınav",
  "Tempolu yüzme, her tekrarda 30 sn ara": "Tempolu yüzme"
};
function egzersizAdi(ad){return EGZERSIZ_ES_ADLARI[ad]||ad}

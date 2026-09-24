const EGZERSIZ_KODLARI={
"Omuz ve kol ısınması":"I1","Omuz ve sırt ısınması":"I2","Squat ve bacak ısınması":"I3","Genel ısınma":"I4","Sırt ve omuz ısınması":"I5",
"Dambıl bench press":"G1","Incline dambıl press":"G2","Şınav":"G3","Dar tutuş şınav":"G4","Dambıl shoulder press":"G5","Dambıl lateral raise":"G6","Pike şınavı":"G7","Dambıl overhead triceps extension":"G8",
"Tek kol dambıl row":"S1","Dambıl reverse fly":"S2","Dambıl pullover":"S3","Dambıl biceps curl":"S4","Dambıl hammer curl":"S5","Bant row":"S6","Tek kol bant row":"S7","Bant pull-apart":"S8","Bant ile lat pullover":"S9","Superman":"S10","Bant ile biceps curl":"S11",
"Dambıl calf raise":"B1","Goblet squat":"B2","Deadlift":"B3","Dambıl hip thrust":"B4","Bulgarian split squat":"B5","Dambıl Romanian deadlift":"B6","Yavaş squat":"B7","Tek bacak glute bridge":"B8","Reverse lunge":"B9","Tek bacak calf raise":"B10","Glute bridge":"B11","Calf raise":"B12","Ağırlıksız squat":"B13","Dambıl sumo squat":"B14","Kablo pull-through":"B15",
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

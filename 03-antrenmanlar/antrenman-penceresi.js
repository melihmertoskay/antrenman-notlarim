(function(){
  const stil=`
    .antrenman-modal{position:fixed;inset:0;z-index:60;display:none;align-items:center;justify-content:center;padding:16px;background:rgba(24,27,23,.58)}
    .antrenman-modal.open{display:flex}
    .antrenman-modal-box{position:relative;width:min(100%,800px);height:min(92vh,820px);overflow:hidden;border-radius:18px;background:#fffefa;box-shadow:0 24px 80px rgba(0,0,0,.25)}
    .antrenman-modal-close{position:absolute;top:10px;right:10px;z-index:3;display:grid;width:38px;height:38px;place-items:center;border:1px solid #d8d4ca;border-radius:50%;background:rgba(255,254,250,.96);color:#22241f;font:inherit;font-size:1.25rem;cursor:pointer}
    .antrenman-modal-frame{display:block;width:100%;height:100%;border:0;background:#f4f2ec}
    body.antrenman-modal-acik{overflow:hidden}
    @media(max-width:560px){.antrenman-modal{padding:0}.antrenman-modal-box{width:100%;height:100%;border-radius:0}}
  `;
  function baslat(ayar={}){
    const yol=ayar.yol||"../03-antrenmanlar/antrenman.html";
    const style=document.createElement("style");style.textContent=stil;document.head.appendChild(style);
    document.body.insertAdjacentHTML("beforeend",'<div class="antrenman-modal" id="antrenmanModal" role="dialog" aria-modal="true" aria-label="Antrenman kartı"><div class="antrenman-modal-box"><button class="antrenman-modal-close" type="button" aria-label="Antrenmanı kapat">×</button><iframe class="antrenman-modal-frame" title="Antrenman kartı"></iframe></div></div>');
    const modal=document.getElementById("antrenmanModal"),frame=modal.querySelector("iframe"),closeButton=modal.querySelector(".antrenman-modal-close");
    let acik=false;
    // iframe.src ile normal gezinme, tarayıcının "ortak geçmişine" kendi kaydını ekler; bu da
    // popup'ı açmak için attığımız history.pushState ile çakışıp bazı tarayıcılarda (özellikle
    // mobil Chrome) tek geri tuşuna iki adım gibi davranmasına yol açar. location.replace() aynı
    // içeriği yükler ama geçmişe kayıt eklemez, tek "geri" adımı garanti olur.
    function iframeYukle(url){try{frame.contentWindow.location.replace(url)}catch(hata){frame.src=url}}
    function gercektenKapat(){if(!acik)return;acik=false;modal.classList.remove("open");document.body.classList.remove("antrenman-modal-acik");iframeYukle("about:blank")}
    function ac(kod){
      if(!kod)return;
      const ayirici=yol.includes("?")?"&":"?";
      iframeYukle(yol+ayirici+"gomulu=1&v="+Date.now()+"#"+encodeURIComponent(kod));
      modal.classList.add("open");document.body.classList.add("antrenman-modal-acik");acik=true;
      history.pushState({antrenmanPenceresi:true,kod},"",location.pathname+location.search+"#antrenman="+encodeURIComponent(kod));
      closeButton.focus();
    }
    function kapat(){if(history.state&&history.state.antrenmanPenceresi)history.back();else gercektenKapat()}
    document.addEventListener("click",e=>{const hedef=e.target.closest("[data-antrenman]");if(!hedef)return;e.preventDefault();ac(hedef.dataset.antrenman)});
    closeButton.addEventListener("click",kapat);modal.addEventListener("click",e=>{if(e.target===modal)kapat()});
    addEventListener("keydown",e=>{if(e.key==="Escape"&&acik)kapat()});
    addEventListener("popstate",()=>{if(acik&&!(history.state&&history.state.antrenmanPenceresi))gercektenKapat()});
  }
  window.AntrenmanPenceresi={baslat};
})();

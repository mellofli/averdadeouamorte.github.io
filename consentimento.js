/* Consentimento opcional: scripts de medição nunca carregam antes de aceitar. */
(function(){
'use strict';
var key='avom_consent_v1', choice=null, gaReady=false;
try { choice=localStorage.getItem(key); } catch(e) {}
function inject(src){var s=document.createElement('script');s.async=true;s.src=src;document.head.appendChild(s);}
function enable(){
 if(gaReady)return;gaReady=true;
 window.dataLayer=window.dataLayer||[];window.gtag=function(){window.dataLayer.push(arguments);};
 window.gtag('js',new Date());window.gtag('config','G-MGKENMSYKV');
 inject('https://www.googletagmanager.com/gtag/js?id=G-MGKENMSYKV');
 // TikTok: carregamento só após escolha afirmativa do visitante.
 (function(w,d,t){w.TiktokAnalyticsObject=t;var q=w[t]=w[t]||[];
 q.methods=['page','track','identify','instances','debug','on','off','once','ready','alias','group','enableCookie','disableCookie','holdConsent','revokeConsent','grantConsent'];
 q.setAndDefer=function(e,m){e[m]=function(){e.push([m].concat(Array.prototype.slice.call(arguments,0)));};};
 for(var i=0;i<q.methods.length;i++)q.setAndDefer(q,q.methods[i]);
 q.instance=function(id){for(var e=q._i[id]||[],j=0;j<q.methods.length;j++)q.setAndDefer(e,q.methods[j]);return e;};
 q.load=function(id){var src='https://analytics.tiktok.com/i18n/pixel/events.js';q._i=q._i||{};q._i[id]=[];q._i[id]._u=src;q._t=q._t||{};q._t[id]=+new Date;q._o=q._o||{};q._o[id]={};inject(src+'?sdkid='+encodeURIComponent(id)+'&lib='+t);};
 q.load('D5NOVSJC77U4HM3KJPA0');q.page();
 })(window,document,'ttq');
}
window.siteTrack=function(eventName,params){if(choice==='accepted'&&typeof window.gtag==='function')window.gtag('event',eventName,params||{});};
function setChoice(value){var previous=gaReady;choice=value;try{localStorage.setItem(key,value);}catch(e){}if(value==='accepted')enable();document.getElementById('privacy-banner')?.remove();if(value==='rejected'&&previous)window.location.reload();}
function banner(){
 if(choice==='accepted'){enable();return;}
 if(choice==='rejected')return;
 var el=document.createElement('aside');el.id='privacy-banner';el.setAttribute('aria-label','Preferências de privacidade');
 el.style.cssText='position:fixed;bottom:12px;left:12px;right:12px;z-index:99999;max-width:850px;margin:auto;background:#112c38;color:#fff;border:1px solid #8ccbd0;border-radius:12px;padding:16px;box-shadow:0 6px 30px #000a;font:15px/1.5 system-ui,sans-serif;';
 el.innerHTML='<strong>Privacidade e medição</strong><p style="margin:7px 0">Com sua permissão, usamos Google Analytics e TikTok Pixel para compreender visitas e campanhas. Recusar não impede o uso do site. <a style="color:#9fe3e9" href="/privacidade.html">Leia a política de privacidade</a>.</p><div style="display:flex;gap:10px;flex-wrap:wrap"><button type="button" data-consent="rejected" style="padding:10px 16px;cursor:pointer">Recusar</button><button type="button" data-consent="accepted" style="padding:10px 16px;cursor:pointer;background:#137d8b;color:white;border:1px solid #8bd3d8">Aceitar medição</button></div>';
 el.addEventListener('click',function(e){var value=e.target && e.target.getAttribute('data-consent');if(value)setChoice(value);});
 document.body.appendChild(el);
}
window.openPrivacyPreferences=function(){choice=null;try{localStorage.removeItem(key);}catch(e){}banner();};
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',banner);else banner();
})();

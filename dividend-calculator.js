(function(){
  'use strict';
  var market='tw',frequency='monthly';
  var $=function(id){return document.getElementById(id);};
  var fmt=function(value,currency){return new Intl.NumberFormat('zh-TW',{style:'currency',currency:currency,maximumFractionDigits:0}).format(Math.round(value));};
  function update(){
    var budget=Number($('budget').value),price=Number($('price').value),dividend=Number($('dividend').value),fx=market==='us'?Number($('fx').value):1,tax=market==='us'?Number($('tax').value):0;
    var valid=budget>0&&price>0&&dividend>=0&&fx>0&&tax>=0&&tax<=100;
    if(!valid){['shares','capital','once','monthly','annual','yield'].forEach(function(id){$(id).textContent='—';});return;}
    var shares=Math.floor(budget/(price*fx)),capital=shares*price*fx,once=shares*dividend*(1-tax/100)*fx;
    var count={weekly:52,monthly:12,quarterly:4,annual:1}[frequency]||12,annual=once*count,monthly=annual/12;
    $('shares').textContent=shares.toLocaleString('zh-TW')+' 股';$('capital').textContent=fmt(capital,'TWD');$('once').textContent=fmt(once,'TWD');$('monthly').textContent=fmt(monthly,'TWD');$('annual').textContent=fmt(annual,'TWD');$('yield').textContent=capital?(annual/capital*100).toFixed(2)+'%':'—';
  }
  document.addEventListener('DOMContentLoaded',function(){
    document.querySelectorAll('input').forEach(function(input){input.addEventListener('input',update);});
    document.querySelectorAll('[data-market]').forEach(function(button){button.addEventListener('click',function(){market=button.dataset.market;document.querySelectorAll('[data-market]').forEach(function(item){item.setAttribute('aria-pressed',String(item===button));});$('tax-field').hidden=market!=='us';$('fx-field').hidden=market!=='us';$('price-unit').textContent=market==='us'?'USD':'TWD';$('dividend-unit').textContent=market==='us'?'USD':'TWD';update();});});
    document.querySelectorAll('[data-frequency]').forEach(function(button){button.addEventListener('click',function(){frequency=button.dataset.frequency;document.querySelectorAll('[data-frequency]').forEach(function(item){item.setAttribute('aria-pressed',String(item===button));});update();});});
    update();
  });
})();

javascript:(async()=>{const PORT=37564;const m=/https:\/\/atcoder.jp\/contests\/([-\w]+)\/tasks\/([-\w]+)/.exec(location.href);if(m){const examples=[];document.querySelectorAll(".lang-ja [id^=pre-sample]").forEach((e,i)=>{(examples[i/2|0]??=[]).push(e.textContent.trim())});const problem={url:m[0],contestId:m[1],problemId:m[2],subject:document.title,examples,timestamp:new Date().toISOString()};await fetch(`http://localhost:${PORT}`,{method:"POST",mode:"no-cors",body:JSON.stringify(problem)}).catch(()=>alert(`\u300Cpnpm serve\u300D\u3057\u3066\u306A\u3044\u304B\u3082\uFF1F`))}else{alert("AtCoder\u306E\u554F\u984C\u30DA\u30FC\u30B8\u3067\u4F7F\u3063\u3066\u306D")}})();
var iTorr = function(d, c, b) {
b = function(e, f) {
    return (f || c).querySelector(e)
};
$$ = b.S = function(e, f) {
    return (f || c).querySelectorAll(e)
};
b.css = function(f, e) {
    f.style.cssText += (";" + e)
};
b.x = function(e) {
    return function(h, l, k, i, f, g) {
        if (typeof l == "function") {
            i = k;
            k = l;
            l = 0
        }
        if (e[h] && !l) {
            return k(e[h])
        }
        (f = new XMLHttpRequest()).open(l ? "POST" : "GET", h, 1);
        !l || f.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        if (k || i) {
            f.onreadystatechange = function() {
                if (f.readyState == 4) {
                    if ((f.status > 199 && f.status < 301) || f.status == 304) {
                        g = f.responseText;
                        if ((f.getResponseHeader("Content-Type") || "").match(/json/)) {
                            g = JSON.parse(g || null)
                        }
                        if (!l) {
                            e[h] = g
                        }
                        k(g)
                    } else {
                        if (i) {
                            i(f.status)
                        }
                    }
                }
            }
        }
        f.send(l || "");
        return f
    }
}({});
b.cookie = function(l, m, k) {
    if (typeof m != "undefined") {
        k = k || 31536000;
        var i = new Date();
        i.setTime(i.getTime() + k * 1000);
        c.cookie = l + "=" + escape(m) + ";expires=" + i.toGMTString()
    } else {
        var n = c.cookie.match(new RegExp("(^| )" + l + "=([^;]*)(;|$)"));
        return n == null ? null : unescape(n[2])
    }
};
b.D = {
    m: function(e) {
        return c.createElement(e)
    },
    d: function(e) {
        if (e) {
            return e.parentNode.removeChild(e)
        }
    },
    a: function(f, g) {
        !g && (g = f) && (f = c.body);
        return f.appendChild(g)
    },
    b: function(f, g) {
        f.insertBefore(g, f.childNodes[0])
    },
    c: function(e) {
        return e.cloneNode(1)
    }
};
b.j = function(f, h, g, i, e) {
    i = b.D.m("script");
    e = 'cb'+ (+((+new Date()+'').substr(6)+(Math.random()+'').substring(3,7))).toString(32);
    if (h && f.match(/\{cb\}/)) {
        d[e] = h
    }
    i.src = f.replace(/\{cb\}/, e);
    i.charset = "UTF-8";
    i.onload = function() {
        if (h && !f.match(/\{cb\}/)) {
            h()
        }
        b.D.d(i)
    };
    i.onerror = function() {
        if (g) {
            g()
        }
        b.D.d(i)
    };
    b.D.a(i)
};
b.lcss = function(e) {
    return function(i, j, f) {
        if (e.indexOf(i) < 0) {
            (j = b.D.m("link")).href = i;
            f = b("head");
            j.rel = "stylesheet";
            j.charset = "UTF-8";
            b.D.a(f, j);
            e += i + "|"
        }
    }
}("|");
b.b = b("html").className += " " + self.ActiveXObject ? "IE" : self.chrome ? "Cr" : self.mozPaintCount > ~[] ? "FF" : self.opera ? "Op" : self.WebKitPoint ? "Wk" : "";
b.swf = function(e) {
    return c[e] || b("#" + e)
};
b.re_date = function(l) {
    var i = new Date(),
        m = new Date((l + "").match(/[0-9]{10}/) ? l * 1000 : l),
        j = parseInt,
        k = j((i - m) / 1000);
    return !l || k < 0 ? "刚刚" : k < 60 ? (k + "秒前") : (k /= 60) < 60 ? j(k) + "分前" : (k /= 60) < 24 ? j(k) + "时前" : (k /= 24) < 7 ? j(k) + "天前" : (k /= 7) < 2 ? j(k) + "周前" : m > new Date(i.getFullYear() + "-01-01") ? (m.getMonth() + 1) + "月" + m.getDate() + "日" : m.getFullYear() + "年" + (m.getMonth() + 1) + "月" + m.getDate() + "日"
};
String.prototype.enTxt = function() {
    return this.replace(/(^\s*)|(\s*$)/g, "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\t/g, "&nbsp;&nbsp;&nbsp;&nbsp;").replace(/\'/g, "&#39;").replace(/\"/g, "&quot;")
};
String.prototype.enHtml = function() {
    return this.replace(/(^\s*)|(\s*$)/g, "").replace(/(http\:\/\/[\w\/.#&!?%:;=_]+\.)(gif|jpg|jpeg|png)/g, '<img src="$1$2">').replace(/(http\:\/\/ww[0-9]{1}\.sinaimg\.cn\/)([\w]{4,10})(\/[\w]{16,32}\.)(gif|jpg|jpeg|png)/g, "$1mw1024$3$4").replace(/http:\/\/www\.xiami\.com\/song\/([0-9]{5,12})[\?\w\.\=]*/g, '<a href="//www.xiami.com/song/$1" target="_blank" class="xiami">http://www.xiami.com/song/$1</a>').replace(/(@)([\u0800-\u9fa5\w\-_]{2,32})/g, '<a href="//weibo.com/n/$2" target="_blank" class="at">$1$2</a>').replace(/(^|[^\"\'\]>])(http|ftp|mms|rstp|news|https|telnet)\:\/\/([\w\/\.#&!?%:;=\-_]+)/g, '$1<a href="$2://$3" rel="external nofollow noreferer" class="link" target="_blank">$2://$3</a>').replace(/\n/g, "<br>")
};
if (!d.console) {
    d.console = {
        log: function() {}
    }
}
return b
}(window, document);




var 
UP=(function($){

var 
微博尾缀替换={
	'png':'jpg',
	'bmp':'jpg',
},
按顺序执行=function(items,step,end){
	items=Array.prototype.slice.call(items);
	var 
	next=function(){
		item=items.shift();
		if(!item){
			if(end){
				end();
				end=null;
			}
			
			return;
		}

		step(item,next);
	};

	next();
	next();
	next();
},
staticPath,
token;



$.x('http://danmu.fm/api/hosts',function(r){
	var 
	ip=''+r.cmcc.match(/[\d\.]+/);

	staticPath='http://'+ip+':'+672+'/';

	$.j(API('sign')+'?cb={cb}',function(r){
		if(!r.error){
			token=r.token;
		}
	});
});


var 
API=function(url){
	return staticPath+'v1/'+url;
}
uploadFile=function(file,success,error,upload){
	if(!staticPath)
		return;


	var 
	x=new XMLHttpRequest();
	x.open('POST',API('upload'),true);

	if(token)
		x.setRequestHeader('token',token);


	if(upload)
		x.upload.onprogress=function(e){
			upload(e.loaded/e.total)
		};


	x.onload=function(){
		var 
		r=JSON.parse(x.response);


		if(r.error&&error){
			return error(r.error)
		}

		if(success){
			success(r.wbpid,r,'http://ww2.sinaimg.cn/large/'+r.wbpid+'.'+(微博尾缀替换[r.type]||r.type)+"\n");
		}
	};

	var 
	fd=new FormData();
	fd.append('file',file);
	x.send(fd);

};

return uploadFile
})(iTorr);
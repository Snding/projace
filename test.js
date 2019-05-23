$.get('test.json',function(res){
			
			if(res.code==200){//返回数据成功
			var user =res.data;
			$(".name").text(user.name);
			$(".sex").text(user.sex);
			$(".age").text(user.age);
			//each遍历  参数1:数据 (对象，数组)  参数2: 回调函数 (下标,对象);
			var hoppyHtml='';
			$.each(user.hoppy,function(i,item){
				hoppyHtml += '<span style="color:red">'+item+',</span>'
				
			})
			$('.hoppy').after(hoppyHtml);
			
			//遍历手机
			var phoneHtml='';
			$.each(user.phone,function(i,item){
				phoneHtml += '<span style="color:#096">'+item.pp+'</span>:<span style="color:red;margin-right:10px">￥'+item.price+'元</span>'
				
			})
			$('.phone').after(phoneHtml)
			}
		})
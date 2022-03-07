$(document).ready(function() {
	$('#nhap_nam').on('keyup', function() {
		nam = $(this).val();
		if(nam<1900 || nam>2100) {
			$(".ket_qua").html("Vui lòng nhập năm từ 1900 đến năm 2100");
		}
		else {
			nam = nam-1900;
			can = nam % 10;
			chi = nam % 12;
			switch(can) {
				case 0:
					can_text = "Canh";
				break;
				case 1:
					can_text = "Tân";
				break;
				case 2:
					can_text = "Nhâm";
				break;
				case 3:
					can_text = "Quý";
				break;
				case 4:
					can_text = "Giáp";
				break;
				case 5:
					can_text = "Ất";
				break;
				case 6:
					can_text = "Bính";
				break;
				case 7:
					can_text = "Đinh";
				break;
				case 8:
					can_text = "Mậu";
				break;
				case 9:
					can_text = "Kỷ";
				break;
			}
			switch(chi) {
				case 0:
					chi_text = "Tý";
				break;
				case 1:
					chi_text = "Sửu";
				break;
				case 2:
					chi_text = "Dần";
				break;
				case 3:
					chi_text = "Mẹo";
				break;
				case 4:
					chi_text = "Thìn";
				break;
				case 5:
					chi_text = "Tỵ";
				break;
				case 6:
					chi_text = "Ngọ";
				break;
				case 7:
					chi_text = "Mùi";
				break;
				case 8:
					chi_text = "Thân";
				break;
				case 9:
					chi_text = "Dậu";
				break;
				case 10:
					chi_text = "Tuất";
				break;
				case 11:
					chi_text = "Hợi";
				break;
			}
			$(".ket_qua").html(can_text + " " + chi_text);
		}
	});	
	
	$.ajax({
        url : "sever.php",
        type : "post",
        dataType:"text",
        data : {
        	id : 1
        },
        success : function (result){
            $(".anh").html(result);
        }
    });
});
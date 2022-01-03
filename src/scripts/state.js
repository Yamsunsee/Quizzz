const state = [
  {
    answers: ["a. Giảm khứu giác", "b. Sốt*", "c. Nghẹt mũi", "d. Chảy mũi"],
    question: "Câu 1: Triệu chứng sau không phải của viêm mũi xoang mạn tính:",
  },
  {
    answers: ["a. Hạch sau góc hàm*", "b. Cảm giác đầy tai", "c. Nghe kém", "d. Nghẹt mũi"],
    question: "Câu 2: Trong ung thư vòm, dấu hiệu thường có sớm là:",
  },
  {
    answers: [
      "a. Que gắp dị vật thích hợp",
      "b. Mê nội khí quản",
      "c. Không nên soi khi thực quản phù nề",
      "d. Các yếu tố trên*",
    ],
    question: "Câu 3: Tránh tai biến trong soi thực quản lấy dị vật cần phải:",
  },
  {
    answers: ["a. Do co thắt các tiểu phế quản", "b. Thanh quản độ I", "c. Thanh quản độ II*", "d. Do nhu mô phổi"],
    question: "Câu 4: Đây là loại khó thở:",
  },
  {
    answers: ["a. 70%", "b. 50%*", "c. 40%", "d. 60%"],
    question: "Câu 5: Sau khi mở khí quản, giảm khoảng chết, khối lượng không khí được trao đổi tăng lên:",
  },
  {
    answers: ["a. Thông bào nhiều ", "b. Khói “lam chiều”", "c. Mờ đục*", "d.Khói rộng mất xương"],
    question: "Câu 6: Đặc điểm X quang hình ảnh Cholesteatoma:",
  },
  { answers: ["a. 50*", "b. 60", "c. 70", "d. 40"], question: "Câu 7: Lão thính thường bắt đầu ở độ tuổi trên:" },
  {
    answers: ["a. Nhánh khẩu cái của động mạch hầu ", "b. Khẩu cái xuống", "c. Bướm khẩu cái*", "d. Khẩu cái lên"],
    question: "Câu 8: Amidan được nuôi dưỡng bởi các động mạch sau, NGOẠI TRỪ:",
  },
  {
    answers: ["a. Chỉnh hình tai giữa", "b. Vá màng nhĩ", "c. Hủy mê nhĩ", "d. Khoét rộng đá chũm toàn phần *"],
    question: "Câu 9: Phẫu thuật tai sau đây có thể gây nhức đầu nhiều:",
  },
  {
    answers: [
      "a. Có yếu tố mùa và dịch",
      "b. Do liên cầu là chủ yếu*",
      "c. Do siêu vi trùng",
      "d. Vi khuẩn là do bội nhiễm",
    ],
    question: "Câu 10: Viêm họng đỏ thông thường có các đặc điểm sau, NGOẠI TRỪ:",
  },
  {
    answers: ["a. 60%-65%", "b. 80%-85%", "c. 70%-75%", "d. 90%-95%*"],
    question: "Câu 11: Chảy máu mũi trước chiếm tỉ lệ:",
  },
  {
    answers: ["a. Chóng mặt*", "b. Giảm mùi", "c. Nghẹt mũi 1 bên", "d. Chảy mũi nhày đục"],
    question: "Câu 12: Triệu chứng sau không thuộc ung thư vòm:",
  },
  {
    answers: [
      "a. Ung thư thực quản*",
      "b. Túi thừa thực quản",
      "c. Trào ngược dạ dày thực quản",
      "d. Co thắt thực quản",
    ],
    question:
      "Câu 13: Bệnh nhân thường xuyên có dấu hiệu nuốt nghẹn và hay mắc dị vật thực quản thì cần chẩn đoán phân biệt với:",
  },
  {
    answers: ["a. Sờ vành tai đau", "b. Vành tai còn ấm", "c. Lộ sụn*", "d. Vành tai đỏ"],
    question: "Câu 14: Dấu hiệu không thuộc bỏng tai ngoài do nhiệt độ I và II:",
  },
  {
    answers: ["a.Virus", "b. Hút thuốc lá*", "c. Hóa chất.", "d. Môi trường"],
    question: "Câu 15: Yếu tố nào liên quan nhiều nhất đến ung thư đường hô hấp trên : ",
  },
  {
    answers: ["a. thứ 9", "b. sau khi sinh*", "c. thứ 7 ", "d. thứ 8"],
    question: "Câu 16:Trung tâm màm chức năng của amidan có thể xuất hiện vào tháng:",
  },
  {
    answers: [
      "a. Carcinoma không biệt hóa*",
      "b. Carcinoma biệt hóa cao",
      "c. Lympho sarcoma",
      "d. Carcinoma biệt hóa vừa",
    ],
    question: "Câu 17: Ung thư vòm xuất phát từ gờ loa vòi thường ở dạng:",
  },
  {
    answers: ["a. Viêm mũi mạn tính*", "b. Viêm V.A", "c. Viêm khí phế quản", "d. Viêm xoang mạn"],
    question: "Câu 18: Nếu không được chẩn đoán sớm và điều trị sớm thì biến chứng thường gặp nhất là:",
  },
  {
    answers: ["a. Do cuốn giữa thoái hóa", "b. Khe mũi trên", "c. Khe mũi giữa", "d. Xoang sàng trước*"],
    question: "Câu 19: Polype mũi thường xuất phát từ:",
  },
  {
    answers: [
      "a. Hiếm gặp*",
      "b. Có thể lành tự nhiên",
      "c. Đôi khi kèm viêm niêm mạc",
      "d. Ít khi gây viêm tấy amidan",
    ],
    question: "Câu 20: Viêm họng do virus có các đặc điểm sau, NGOẠI TRỪ:",
  },
  {
    answers: ["a. Mềm, màu vàng*", "b. Bên trong trắng như bã đậu", "c. Có các tế bào mỡ", "d. Lớp vỏ dày"],
    question: "Câu 21: Cholesteatoma có tính chất sau, ngoại trừ:",
  },
  {
    answers: [
      "a. Các triệu chứng trên*",
      "b. Mủ tai thối khắm hơn",
      "c. Chảy tai nhiều hơn hoặc ít hơn",
      "d. Đau nhức trong tai",
    ],
    question: "Câu 22: Hội chứng hồi viêm trong viêm tai xương chũm bao gồm các triệu chứng sau:",
  },
  {
    answers: [
      "a. Do người bệnh không có răng",
      "b. Do ăn uống không cẩn trọng",
      "c. Chứng nhược cơ thực quản ở người già",
      "d. Ung thư thực quản*",
    ],
    question: "Câu 23: Một người bệnh lớn tuổi, thường xuyên bị mắc xương, có thể là:",
  },
  {
    answers: ["a. Đạm giảm*", "b. Tế bào tăng", "c. Đường giảm", "d. Clor giảm"],
    question: "Câu 24: Thành phần dịch não tủy trong viêm màng não do tai bao gồm, ngoại trừ:",
  },
  {
    answers: [
      "a. U băng thanh thất",
      "b. Viêm thanh quản phù nề hạ thanh môn",
      "c. Liệt cả 2 dây thanh do tổn thương dây thần kinh thanh quản trên*",
      "d. Bạch hầu thanh quản",
    ],
    question: "Câu 25: Khó thở thanh quản thường do các bệnh sau, NGOẠI TRỪ:",
  },
  {
    answers: ["a. Mê tĩnh mạch", "b. Mê nội khí quản", "c. Tê tại chỗ", "d. A, B đúng*"],
    question: "Câu 26: Phương pháp vô cảm có thể chỉ định trong phẫu thuật cắt amidan:",
  },
  {
    answers: ["a. Chảy mủ", "b. Ống tai đầy mủ*", "c. Hết sốt", "d. Màng nhĩ thủng"],
    question: "Câu 27: Đa số trẻ em đến khám Tai mũi họng trong viêm tai gữa cấp tính mủ với dấu hiệu:",
  },
  {
    answers: ["a. Chấn thương thanh quản", "b. Chấn thương ngực", "c. Bể sụn giáp*", "d. Chấn thương khí quản"],
    question: "Câu 28: Chấn thương ở vị trí nào có thể làm cho bệnh nhân tử vong tức thì:",
  },
  {
    answers: ["a. V*", "b. VII", "c. VI", "d. III"],
    question: "Câu 29: Dấu hiệu tê bì vùng miệng và mặt 1 bên là do dây thần kinh nào bị chèn ép:",
  },
  {
    answers: [
      "a. Chụp xquang tim phổi",
      "b. Kháng viêm mạnh",
      "c. Soi thanh quản trực tiếp*",
      "d. Phải dùng kháng sinh liều cao và kéo dài",
    ],
    question: "Câu 30: Xử trí đúng nhất một trường hợp khàn tiếng trên 3 tuần là:",
  },
  {
    answers: ["a. XI", "b. V", "c. IX", "d. VI*"],
    question: "Câu 31: Các đôi thần kinh sọ thường dễ bị tổn thương nhất trong ung thư vòm là dây:",
  },
  {
    answers: ["a. Trụ trước", "b. Đáy lưỡi", "c. Amidan*", "d. Thành sau họng"],
    question: "Câu 32: Dị vật ở họng miệng thường cắm vào:",
  },
  {
    answers: ["a. Không thâm nhiễm", "b. Giới hạn không rõ*", "c. Giọng nói mềm", "d. Dây thanh di động mềm mại"],
    question: "Câu 33: Triệu chứng phân biệt giữa u lành và ung thư dây thanh, dựa vào tính chất:",
  },
  {
    answers: ["a. Trên 15 tuổi.", "b. Từ 10 – 15 tuổi", "c. Trẻ từ 5 – 10 tuổi", "d. Trẻ từ 1 – 5 tuổi*"],
    question: "Câu 34: Viêm mũi do dị ứng với thức ăn thường gặp ở lứa tuổi:",
  },
  {
    answers: ["a. Chấn thương kín, nhẹ", "b. Dập sụn*", "c. Đứt 1 phần vành tai", "d. Chấn thương do rách da hở sụn"],
    question: "Câu 35: Tụ máu vành tai thường do:",
  },
  {
    answers: ["a. S.aureus", "b. S.pneumoniae*", "c. H.influenza", "d. M.Catarrhalis"],
    question: "Câu 36: Vi khuẩn gặp nhiều nhất trong viêm mũi xoang cấp là:",
  },
  {
    answers: ["a. Nội soi tai", "b. CT-Scan*", "c. X quang tư thế schiiller", "d. X quang tư thế Schause III"],
    question: "Câu 37: Để xác định biến chứng nội sọ, xét nghiệm cận lâm sàng cần thiết nhất là:",
  },
  {
    answers: [
      "a. Quá sản biểu mô lát",
      "b. Biểu mô lát xâm lấn vào trong hòm nhĩ ",
      "c. Túi co lõm*",
      "d. Cấy biểu mô lát",
    ],
    question: "Câu 38: Cholesteatoma mắc phải thứ phát thường do các cơ chế bệnh sinh sau, NGOẠI TRỪ:",
  },
  {
    answers: ["a. 6", "b. 5*", "c. 3", "d. 4"],
    question: "Câu 39: Thời kỳ bào thai, mô tân bào của sùi vòm xuất hiện đầu tiên vào tuần lễ thứ:",
  },
  {
    answers: ["a. Thành trên-sau", "b. Hướng trước trên", "c. Ra trước", "d. Nền sọ*"],
    question: "Câu 40: Lé trong thường là do khối u xâm lấn:",
  },
  {
    answers: ["a. V.A", "b. U xơ vòm*", "c. Sa màng não", "d. K vòm"],
    question: "Câu 41: Khối u ở vùng vòm ở trẻ em trên 12 tuổi thường là:",
  },
  {
    answers: ["a. Dị vật tai", "b. Xốp xơ tai*", "c. Viêm tai ngoài", "d. Viêm tai giữa"],
    question: "Câu 42: Nghe kém kèm theo chóng mặt ù tai gặp trong bệnh sau:",
  },
  {
    answers: [
      "a. Điều trị các yếu tố cục bộ tại mũi",
      "b. Nâng cao sức đề kháng của cơ thể",
      "c. Cách ly các dị nguyên gây bệnh*",
      "d. Vệ sinh môi trường sống và điều kiện làm việc",
    ],
    question: "Câu 43: Trong viêm mũi dị ứng, cách phòng bệnh tốt nhất là:",
  },
  {
    answers: ["a. Máu đỏ tươi", "b. Nhầy trong", "c. Nhầy đục", "d. Máu cá*"],
    question: "Câu 44: Ung thư vòm dịch mũi có đặc điểm:",
  },
  {
    answers: ["a. 15%.", "b. 10-15%.", "c. 5%.", "d. 5-10%.*"],
    question: "Câu 45: Viêm họng cấp ở người lớn do liên cầu chiếm:",
  },
  {
    answers: ["a. Viêm thanh quản bạch hầu*", "b. Bạch hầu mũi", "c. Phế quản phế viêm", "d. Bạch hầu ống tai "],
    question: "Câu 46: Biến chứng tại chỗ thường gặp và nguy hiểm nhất của viêm họng bạch hầu là:",
  },
  {
    answers: ["a. Mẫu giáo", "b. Các giai đoạn trên*", "c. Sơ sinh", "d. Thời kỳ bào thai"],
    question: "Câu 47: Nghe kém có thể phát hiện được ở lứa tuổi:",
  },
  {
    answers: ["a. Đo mạch", "b. Nước bọt*", "c. Đo huyết áp", "d. Sắc mặt."],
    question: "Câu 48: Theo dõi chảy máu sau cắt Amidan:",
  },
  {
    answers: [
      "a. Xác định loại khối u*",
      "b. Phóng đại khối u",
      "c. Xác định hướng xâm lấn khối u",
      "d. Xác định vị trí khối u",
    ],
    question: "Câu 49: Đặc điểm sau không phải là lợi ích của ung thư vòm:",
  },
  {
    answers: ["a. Các dấu hiệu trên.*", "b. Khó thở 2 thì.", "c. Co kéo cơ hô hấp phụ.", "d. Không có ran rít"],
    question: "Câu 50: Đặc điểm phế quản, phế viêm trong viêm họng bạch hầu ác tính là:",
  },
  {
    answers: ["a. Giọng ướt", "b. Giọng mờ", "c. Giọng mềm", "d. Giọng cứng*"],
    question: "Câu 51: Đặc điểm khàn tiếng trong ung thư dây thanh là:",
  },
  {
    answers: [
      "a. Phối hợp thêm nhiều loại kháng sinh",
      "b. Cấy mủ kèm kháng sinh đồ",
      "c. Nội soi thanh khí phế quản*",
      "d. Điều trị thêm corticoid",
    ],
    question:
      "Câu 52: Một cháu bé viêm phổi tái phát nhiều lần ở cùng một thùy hoặc 1 phân thùy, chụp X quang phổi nhiều lần thấy cùng 1 hình ảnh xẹp phổi 1 bên hoặc xẹp 1 thùy phổi. Thái độ xử trí đúng đắn nhất là:",
  },
  {
    answers: ["a. áp xe amidan", "b.viêm họng", "c. Viêm tấy quanh amidan", "d. phế quản phế viêm*"],
    question: "Câu 53: Biến chứng tại chỗ của viêm amidan mạn tính, ngoại trừ:",
  },
  {
    answers: ["a. Nước muối sinh lý.", "b. Corticoid.", "c. Thuốc co mạch.*", "d. Kháng sinh tại chỗ."],
    question: "Câu 54: Các thuốc sau cần thận trọng dùng cho trẻ em:",
  },
  {
    answers: ["a. Kháng nấm", "b. Corticoid*", "c. Kháng sinh", "d. Kháng Histamine"],
    question: "Câu 55: Thuốc điều trị chính trong viêm thanh quản hạ thanh môn là:",
  },
  {
    answers: [
      "a. Có thể kèm theo nhức đầu, lồi mắt",
      "b. Thường xảy ra ở nam giới trên 40 tuổi",
      "c. Tái đi tái lại với số lượng không nhiều*",
      "d. Tự phát, đỏ tươi, tự cầm",
    ],
    question: "Câu 56:",
  },
  {
    answers: ["a. Các loại khác", "b. Có nguồn gốc động vật*", "c. Có nguồn gốc thực vật", "d. Kim loại"],
    question: "Câu 57: Loại dị vật dễ mắc ở đường ăn nhất là:",
  },
  {
    answers: [
      "a. Không có triệu chứng nào đặc hiệu cho K vòm",
      "b. Người thầy thuốc không nghĩ đến K vòm lúc đầu*",
      "c. Dễ lầm với các bệnh tai mũi họng khác",
      "d. Thường phát triển âm thầm kín đáo",
    ],
    question: "Câu 58: Ở Việt Nam người bệnh bị ung thư vòm thường đến muộn, tiên lượng xấu là do:",
  },
  {
    answers: [
      "a. Sốt cao",
      "b. Tổng trạng suy kiệt",
      "c. Không đáp ứng với điều trị kháng sinh",
      "d. Thường xảy ra ở người già*",
    ],
    question: "Câu 59: Viêm họng do bạch cầu đơn nhân có các đặc điểm sau, NGOẠI TRỪ:",
  },
  {
    answers: ["a. Thanh thất Morgagni", "b. Băng thanh thất", "c. Hai dây thanh*", "d. Nẹp phễu thanh thiệt"],
    question: "Câu 60: Tầng trên thanh môn bao gồm các thành phần sau, NGOẠI TRỪ:",
  },
  {
    answers: ["a. Các dấu hiệu trên*", "b. Rối tầm", "c. Nôn ói liên tục", "d. Động mắt"],
    question: "Câu 61: Dấu hiệu lâm sàng nghi ngờ áp xe tiểu não:",
  },
  {
    answers: [
      "a. Viêm amidan mạn tính không đáp ứng với điều trị nội khoa",
      "b. Viêm amidan mạn tính tái hồi ≥ 3 lần/năm",
      "c. Viêm amidan quá phát gây chứng ngừng thở trong lúc ngủ",
      "d. Áp xe amidan*",
    ],
    question: "Câu 62: Cắt amidan bao gồm các chỉ định sau, NGOẠI TRỪ:",
  },
  {
    answers: [
      "a. Viêm mũi xoang mạn tính kéo dài",
      "b. Nghẹt mũi, phải thở bằng miệng*",
      "c. Cung răng trên kém phát triển",
      "d. Suy dinh dưỡng",
    ],
    question: "Câu 63: Nguyên nhân chủ yếu gây ra “bộ mặt V.A” là do:",
  },
  {
    answers: ["a. Chảy mủ tai", "b. Đau tai và sốt*", "c. Chóng mặt", "d. Nghe kém"],
    question: "Câu 64: Triệu chứng cơ năng trong viêm tai giữa mạn tính mủ có thể có biến chứng:",
  },
  { answers: ["a. 8", "b. 6", "c. 7*", "d. 5"], question: "Câu 65: Ung thư vòm ở Việt Nam đứng hàng thứ:" },
  {
    answers: ["a. Thủng sau dưới", "b. Thủng trước dưới", "c. Thủng trung tâm", "d. Thủng sau trên*"],
    question: "Câu 66: Tính chất lỗ thủng màng nhĩ có thể có Cholesteatoma:",
  },
  {
    answers: ["a. Thính lực đồ", "b. Nhĩ lượng đồ", "c. Lời nói*", "d. Âm thoa"],
    question: "Câu 67: Thăm khám chức năng nghe tổng quát thường dùng phương pháp thăm dò:",
  },
  {
    answers: ["a. Thanh quản", "b. Mũi", "c. Khí quản*", "d. Miệng"],
    question: "Câu 68: Đường hô hấp trên bao gồm các thành phần sau, NGOẠI TRỪ:",
  },
  {
    answers: [
      "a. Soi thực quản đặt sonde dạ dày",
      "b. Mở cạnh cổ",
      "c. Tất cả điều đúng*",
      "d. Kháng sinh, kháng viêm liều cao",
    ],
    question: "Câu 69:",
  },
  {
    answers: [
      "a. nhiễm liên cầu beta tan huyết nhóm A ",
      "b. “lò viêm”",
      "c.ngưng thở trong lúc ngủ",
      "d. các nguy cơ trên*",
    ],
    question: "Câu 70: Nguy cơ viêm amidan mạn tính ở trẻ em:",
  },
  {
    answers: ["a. Ù tai", "b. Bệnh diễn tiến từ từ*", "c. Chóng mặt", "d. Nghe kém"],
    question: "Câu 71: Bệnh Meniere (sũng nước mê nhĩ) gồm các hội chứng sau, NGOẠI TRỪ:",
  },
  {
    answers: ["a. Chấn thương", "b. Ngộ độc thuốc", "c. Viêm*", "d. Tiếng ồn"],
    question: "Câu 72: Nguyên nhân gây điếc sau sinh gặp nhiều nhất là:",
  },
  {
    answers: [
      "a. Ăn nhiều chất ngọt, dầu mỡ*",
      "b. Uống nhiều chất có gas",
      "c. Cơ địa dị ứng",
      "d. Trào ngược dạ dày- thực quản",
    ],
    question: "Câu 73: Ngày nay nguyên nhân gây viêm họng mạn được chú ý đến nhiều nhất là:",
  },
  {
    answers: [
      "a. Các nguyên nhân trên",
      "b. Chặn ngang gây hẹp thanh quản",
      "c. Phản xạ co thắt liên tục*",
      "d. Hội chứng xâm nhập",
    ],
    question: "Câu 74: Khó thở thanh quản do dị vật đường thở là do, chọn câu đúng nhất:",
  },
  {
    answers: ["a. Đái dầm", "b. Tất cả đều đúng*", "c. Ngủ ngáy", "d. Hay nôn ọe"],
    question: "Câu 75: Amidan quá phát ở trẻ thường có triệu chứng:",
  },
  {
    answers: ["a. CT-Scan thiết lập hình ảnh 3D*", "b. Coronal", "c. Sagittal", "d. Axial"],
    question: "Câu 76: Tư thế CT-Scan có giá trị nhất trong chấn thương xoang trán:",
  },
  {
    answers: ["a. Lao tiến triển", "b.Nhiễm siêu vi ", "c. Rối loạn đông máu ", "d.Amidan viêm thể ẩn*"],
    question: "Câu 77: Chống chỉ định cắt amidan, ngoại trừ:",
  },
  {
    answers: ["a. Viêm mũi xoang mạn tính", "b. Hen suyễn*", "c. Viêm đường hô hấp mạn tính", "d. Chàm"],
    question: "Câu 78: Bệnh sau liên quan bệnh polype mũi xoang:",
  },
  {
    answers: [
      "a. Tiếng rít thì thở ra",
      "b. Cơn ngưng thở",
      "c. Tiếng thở ngáy và co kéo cơ hô hấp",
      "d. Khàn tiếng, mất tiếng*",
    ],
    question: "Câu 79: Dấu hiệu tương ứng với dị vật ở thanh quản là:",
  },
  {
    answers: [
      "a. Rửa tai trước cho khô mủ",
      "b. Rắc thuốc bột kháng sinh vào tai*",
      "c. Ống tai phải được làm sạch mủ",
      "d. Thuốc đó không độc với ốc tai",
    ],
    question: "Câu 80: Trước khi rỏ thuốc vào tai, cần phải thực hiện những điều sau, NGOẠI TRỪ:",
  },
  {
    answers: [
      "a. Sự di chuyển của mũi và cung răng trên khỏi xương trán",
      "b. Bầm tím màng tiếp hợp, hàm ếch",
      "c. Sự di chuyển của mũi so với cung răng",
      "d. Dấu hiệu hàm giả*",
    ],
    question: "Câu 81: Dấu hiệu của gãy Lefort I là:",
  },
  {
    answers: ["a. Dùng ống hút sạch mủ, rửa mũi", "b. Dùng dụng cụ lấy dị vật*", "c. Kháng viêm", "d. Kháng sinh"],
    question: "Câu 82: Phương pháp điều trị bệnh triệt để là:",
  },
  {
    answers: [
      "a. Chế độ ăn uống hợp lý",
      "b. Phòng ngừa bị viêm V.A*",
      "c. Quan tâm tới trẻ khi thời tiết thay đổi, giao mùa",
      "d. Tránh suy dinh dưỡng",
    ],
    question: "Câu 83: Biện pháp dự phòng và chăm sóc bệnh nhân viêm V.A quan trọng nhất là:",
  },
  {
    answers: ["a. Điều trị bằng thuốc kháng đông*", "b. U xơ vòm mũi họng", "c. Suy gan", "d. Cao huyết áp"],
    question:
      "Câu 84: Chảy máu mũi nặng ở người lớn tuổi có thể tái phát sau điều trị nhiều nguyên nhân. Chọn câu đúng nhất:",
  },
  {
    answers: ["a. Xoang bướm", "b. Xoang hàm *", "c. Xoang sàng", "d. Xoang trán"],
    question: "Câu 85: Xoang thường bị viêm cấp nhiều nhất là:",
  },
  {
    answers: ["a. Ho", "b. Nuốt đau", "c. Khó thở", "d. Khàn tiếng*"],
    question: "Câu 86: Phân biệt chẩn đoán giữa viêm thanh thiệt cấp và viêm thanh quản cấp ở trẻ em dựa vào:",
  },
  {
    answers: ["a. Răng mọc lạc chỗ", "b. Sâu răng*", "c. Răng mọc lệch", "d. Nang chân răng"],
    question: "Câu 87: Các bệnh về răng liên quan đến viêm xoang hàm:",
  },
  {
    answers: [
      "a. Cả 3 đều đúng*",
      "b. Bệnh nội khoa đang trong thời kỳ tiến triển",
      "c. Hở hàm ếch",
      "d. Bệnh ưa chảy máu",
    ],
    question: "Câu 88: Chống chỉ định nạo V.A là:",
  },
  {
    answers: [
      "a. Viêm ống tai ngoài cấp",
      "b. Viêm tai giữa cấp",
      "c. Viêm tai xương chũm mạn tính hồi viêm biến chứng viêm màng não",
      "d. Viêm tai xương chũm mạn tính hồi viêm biến chứng viêm tắc xoang tĩnh mạch bên*",
    ],
    question: "Câu 89: Chẩn đoán được nghĩ đến nhiều nhất là:",
  },
  {
    answers: ["a. Dầy chân vách ngăn", "b. Gai vách ngăn", "c. Mào vách ngăn", "d. Vẹo vách ngăn phần cao *"],
    question: "Câu 90: Bệnh ở vách ngăn có thể gây nhức đầu:",
  },
  {
    answers: ["a. Khàn tiếng*", "b. Nuốt đau", "c. Sốt", "d. Hạch cổ viêm"],
    question: "Câu 91: Viêm họng đỏ cấp có các triệu chứng sau, NGOẠI TRỪ:",
  },
  {
    answers: [
      "a. Tai không có tổn thương",
      "b. Không có hội chứng hồi viêm",
      "c. Xquang tai không có tổn thương xương chũm",
      "d. Các căn cứ trên*",
    ],
    question: "Câu 92: Chẩn đoán phân biệt với nhiễm trùng huyết không do tai căn cứ vào:",
  },
  {
    answers: ["a. Hội chứng dạ dày tá tràng", "b. Trào ngược dạ dày - thực quản *", "c. Viêm đại tràng", "d. Sỏi mật"],
    question: "Câu 93: Bệnh đường tiêu hóa có thể gây triệu chứng ở họng:",
  },
  { answers: ["a. 80db*", "b. 60db", "c. >100db", "d. 40db"], question: "Câu 94: Điếc đặc khi sức nghe giảm sút:" },
  {
    answers: [
      "a. Hội chứng màng não",
      "b. Hội chứng thần kinh khu trú*",
      "c. Hội chứng nhiễm trùng",
      "d. Viêm tai xương chũm hồi viêm",
    ],
    question: "Câu 95: Các triệu chứng sau làm cho ta nghĩ đến viêm màng não do tai, NGOẠI TRỪ:",
  },
  {
    answers: ["a. Viêm xoang vận mạch", "b. Viêm xoang hàm", "c. Viêm xoang sàng sau*", "d. Viêm xoang trán"],
    question: "Câu 96: Viêm các xoang sau dễ nhầm với triệu chứng của cao huyết áp:",
  },
  {
    answers: ["a. Ù tai", "b. Cảm giác đầy tai", "c. Nghe kém giọng trầm", "d. Đau nhói trong tai"],
    question: "Câu 97: Triệu chứng chủ yếu của viêm tai giữa cấp xuất tiết dịch thấm:",
  },
  {
    answers: ["a. Thân nền đến đoạn III", "b. Trên hạch gối", "c. Trên thừng nhĩ*", "d. Thừng nhĩ trở lên"],
    question: "Câu 98: Tổn thương ở đoạn nào bệnh nhân không có bài tiết nước bọt:",
  },
  {
    answers: [
      "a. CT Scan Coronal",
      "b. X Quang Blondeau",
      "c. X Quang Blondeau – Hirtz",
      "d. CT Scan Axial – Coronal*",
    ],
    question: "Câu 99: Nghi ngờ có vỡ phức hợp sàng hàm cần chụp:",
  },
  {
    answers: ["a. Chảy dịch mũi xuất tiết*", "b. Liệt dây thần kinh mặt", "c. Chóng mặt", "d. Nghe kém"],
    question:
      "Câu 100: Các triệu chứng gợi ý có tổn thương vỡ xương thái dương sau khi bệnh nhân bị tai nạn giao thông bao gồm, ngoại trừ:",
  },
  {
    answers: ["a. Phần trước trên", "b. Phần màng căng", "c. Trước trên", "d. Màng chùng góc sau trên*"],
    question:
      "Câu 101: Kích thước và vị trí của lỗ thủng nào có thể tỷ lệ nghịch với tình trạng giảm thích lực của người bệnh viêm tai giữa mạn tính:",
  },
  {
    answers: ["a. Nhu mô phổi", "b. Khí quản", "c. Thanh quản*", "d. Phế quản"],
    question: "Câu 102: Đây là loại khó thở do:",
  },
  {
    answers: ["a. Phế nang", "b. Tiểu phế quản hô hấp*", "c. Ống phế nang", "d. Tiểu phế quản tận"],
    question: "Câu 103: Đơn vị cơ sở của hệ hô hấp là:",
  },
  {
    answers: ["a. Sàng trước", "b. Bướm*", "c. Hàm", "d. Trán"],
    question: "Câu 104: Xoang trước gồm có các xoang sau, NGOẠI TRỪ:",
  },
  {
    answers: ["a. Ho húng hắng", "b. Đau họng nhiều*", "c. Vướng họng", "d. Niêm mạc họng teo"],
    question: "Câu 105: Triệu chứng sau không thuộc viêm họng mạn tính:",
  },
  {
    answers: ["a. Hạt Sapôchê", "b. Hạt Mãng Cầu", "c. Sặc cháo*", "d. Xương cá"],
    question: "Câu 106: Bản chất dị vật sau dễ có biến chứng phế quản phế viêm:",
  },
  {
    answers: ["a. Tétanie", "b. Uốn ván", "c. Mềm sụn thanh quản*", "d. Nhược giáp"],
    question: "Câu 107: Khó thở thanh quản do các bệnh toàn thân bao gồm, ngoại trừ:",
  },
  {
    answers: ["a. Giáp – phễu dưới", "b. Giáp – phễu trên", "c. Nhẫn – giáp*", "d. Liên phễu"],
    question: "Câu 108: Dây thần kinh thanh quản trên chi phối một cơ vận động thanh quản sau:",
  },
  {
    answers: [
      "a. Trào ngược dạ dày thực quản",
      "b. Viêm thực quản co thắt",
      "c. Dài mỏm trâm*",
      "d. Thiểu năng tuyến giáp",
    ],
    question: "Câu 109: Nguyên nhân gây loạn cảm họng phải phẫu thuật trong điều trị:",
  },
  {
    answers: [
      "a. Nâng cao chất lượng cuộc sống.",
      "b. Amidan không còn chức năng miễn dịch.*",
      "c. Loại bỏ “lò viêm”.",
      "d. Amidan không có chức năng miễn dịch.",
    ],
    question: "Câu 110: Cơ sở lý luận để có chỉ định cắt Amidan:",
  },
  {
    answers: [
      "a. Nội soi thanh quản",
      "b. X quang tim phổi",
      "c. Huyết thanh chẩn đoán",
      "d. Soi thanh quản trực tiếp*",
    ],
    question: "Câu 111: Xác định chẩn đoán quan trọng bao gồm các phương pháp cận lâm sàng sau, NGOẠI TRỪ:",
  },
  {
    answers: [
      "a. Chấn thương trực tiếp vào tai",
      "b. Tổn thương xương bàn đạp",
      "c. Chấn thương do áp lực*",
      "d. Vỡ xương đá",
    ],
    question:
      "Câu 112: Loại chấn thương nào bệnh nhân có các triệu chứng: nghe kém dẫn truyền nặng, chóng mặt, buồn nôn:",
  },
  {
    answers: ["a. Mủ.", "b. Dịch não tủy.", "c. Dịch mũi trong ung thư vòm.", "d. Máu.*"],
    question: "Câu 113: Dịch mũi có thể là, ngoại trừ:",
  },
  {
    answers: ["a. Nam Trung Quốc", "b. Quảng Đông Trung Quốc*", "c. Bắc Á", "d. Đông Nam Á"],
    question: "Câu 114: Trên thế giới, ung thư vòm gặp nhiều nhất ở vùng:",
  },
  {
    answers: [
      "a. Nghẹt mũi thường xuyên",
      "b. Thoái hóa các tế bào trụ-lông chuyển*",
      "c. Chảy nước mũi nhiều",
      "d. Đau rát trong mũi",
    ],
    question: "Câu 115: Dấu hiệu lâm sàng và tổn thương niêm mạc trong viêm mũi do thuốc:",
  },
  {
    answers: ["a. Tĩnh mạch cảnh trong", "b. Dây thần kinh X", "c. Tĩnh mạch chủ trên*", "d. Động mạch cảnh gốc"],
    question: "Câu 116: Từ xương móng đến sụn nhẫn, thành bên họng liên hệ với các thành phần sau, NGOẠI TRỪ:",
  },
  {
    answers: ["a. Vệ sinh răng miệng*", "b. Xúc họng.", "c. Bôi họng", "d. Khí dung."],
    question: "Câu 117: Điều trị tại chỗ tốt nhất trong viêm họng mạn tính:",
  },
  {
    answers: ["a. ¼ sau trên", "b. ¼ trước dưới", "c. ¼ sau dưới*", "d. ¼ trước trên"],
    question: "Câu 118: Vị trí đặt Diabolo trong viêm tai giữa tiết dịch:",
  },
  {
    answers: ["a. Viêm đại tràng", "b. Sỏi mật", "c. Viêm nội tâm mạc *", "d. Cắt dạ dày tá tràng"],
    question: "Câu 119: Bệnh nào sau đây có thể liên quan đến nhiễm trùngTMH:",
  },
  {
    answers: ["a. Chủ yếu là niêm mạc*", "b. Khó chẩn đoán", "c. Nghẹt mũi là chủ yếu", "d. Viêm nhiễm dễ lan rộng"],
    question: "Câu 120: Viêm xoang trẻ em có đặc điểm sau, ngoại trừ:",
  },
  {
    answers: ["a. Tam giác sáng rõ", "b. Mạch máu chạy dọc cán búa*", "c. Vôi hóa màng nhĩ", "d. Thủng vùng sau trên"],
    question: "Câu 121: Triệu chứng thực thể màng nhĩ có tình trạng viêm tai giữa xuất tiết dịch thấm:",
  },
  {
    answers: ["a. Đặt thuốc co mạch", "b. Rửa mũi", "c. Sì sạch nhầy", "d. Hút sạch nhầy ở mũi*"],
    question: "Câu 122: Đánh giá khối u vòm khi khám mũi bằng đèn Clar cần phải:",
  },
  {
    answers: ["a. 66-70*", "b. 50-65", "c. 71-75", "d. 76-80"],
    question: "Câu 123: Liều lượng grays phù hợp vào 2 xạ trường: u nguyên phát và hạch cổ cao là:",
  },
  {
    answers: ["a. Viêm mũi xoang", "b. Polyp mũi", "c. Gai vách ngăn*", "d. Quá phát cuốn mũi"],
    question:
      "Câu 124: Bệnh nào có liên quan đến viêm mũi dị ứng, khi phẫu thuật triệu chứng viêm mũi dị ứng giảm hoặc hết hẳn:",
  },
  {
    answers: ["a. 10 -14 ngày*", "b. Trên 3 tuần", "c. 5-20 ngày", "d. 5-10 ngày"],
    question: "Câu 125: Kháng sinh điều trị trong viêm tai cấp:",
  },
  {
    answers: ["a. Rung giật nhãn cầu*", "b. Ốc tai – mi mắt", "c. Ốc tai – cử động", "d. Định hướng"],
    question:
      "Câu 126: Trước một kích thích âm cường độ lớn và đột ngột trẻ sơ sinh sẽ xuất hiện một số phản xạ sau, NGOẠI TRỪ:",
  },
  {
    answers: ["a. Có giả mạc nhiều ở niêm mạc họng.", "b. Sốt cao.", "c. Khàn tiếng.*", "d. Khó thở thanh quản."],
    question: "Câu 127: Dấu hiệu điển hình không phải của viêm thanh quản bạch hầu là:",
  },
  {
    answers: [
      "a. Tránh suy dinh dưỡng.",
      "b. Chăm sóc trẻ khi thời tiết thay đổi.",
      "c. Các nội dung trên.*",
      "d. Tuyên truyền cho bà mẹ về chăm sóc mũi cho trẻ.",
    ],
    question: "Câu 128: Các phương pháp chăm sóc viêm V.A tại nhà:",
  },
  { answers: ["a. 2 thì", "b. 4 thì", "c. 3 thì*", "d. 5 thì"], question: "Câu 129: Sinh lý nuốt có mấy thì:" },
  {
    answers: ["a. 60m", "b. 40m", "c. 70m", "d. 50m*"],
    question: "Câu 130: Tai bình thường có thể nghe được tiếng nói to ở khoảng cách:",
  },
  {
    answers: [
      "a. Huyết thanh chẩn đoán",
      "b. Tốc độ lắng máu",
      "c. Cấy tìm vi khuẩn*",
      "d. Tìm albumin trong nước tiểu",
    ],
    question: "Câu 131:",
  },
  {
    answers: [
      "a. Phẫu thuật ung thư hàm mặt",
      "b. Cắt thanh quản toàn phần",
      "c. Hôn mê do chấn thương sọ não",
      "d. Cắt một phần dây thanh*",
    ],
    question: "Câu 132: Mở khí quản dự phòng trong trường hợp sau, ngoại trừ:",
  },
  {
    answers: ["a. Đa u tủy", "b. Liệt dây IX, X, XI *", "c. U não", "d. Tai biến mạch máu não"],
    question: "Câu 133: Bệnh thần kinh sau làm bệnh nhân nuốt sặc:",
  },
  {
    answers: [
      "a. Nhiều mô tân bào*",
      "b. Gần các cơ quan viêm nhiễm kế cận: mũi, xoang, răng miệng…",
      "c. Có cấu trúc nhiều khe, kẽ",
      "d. Là ngã tư đường ăn, đường thở",
    ],
    question: "Câu 134: Do đặc điểm cấu tạo giải phẫu, amidan dễ bị viêm mạn tính, NGOẠI TRỪ:",
  },
  {
    answers: [
      "a. Amidan sùi 1 bên*",
      "b. Amidan 2 bên to không đều",
      "c. Amidan có nhiều hốc mủ",
      "d. Amidan to xâm lấn đường giữa",
    ],
    question: "Câu 135: Nghi ngờ ung thư amidan khi có dấu hiệu sau:",
  },
  {
    answers: [
      "a. Haemophilus influenza*",
      "b. Streptococcus pyogenes",
      "c. Staphylococcus aureus",
      "d. Streptococcus pneumoniae",
    ],
    question: "Câu 136: Viêm thanh thiệt nguyên nhân chủ yếu do:",
  },
  {
    answers: [
      "a. Vỡ xoang trán 2 bên",
      "b. Vỡ xoang trán 1 bên gây tắc cùng bên",
      "c. Vỡ phức tạp",
      "d. Vỡ khối mũi trán*",
    ],
    question: "Câu 137: Kiểu vỡ xoang trán thường dễ bị tắc hẹp lỗ thông mũi trán:",
  },
  {
    answers: ["a. Nấm", "b. Siêu vi*", "c. Dị ứng", "d. Vi khuẩn"],
    question: "Câu 138: Nguyên nhân viêm V.A cấp chủ yếu là:",
  },
  {
    answers: ["a. Rối loạn tinh thần", "b. Rối loạn phản xạ", "c. Rối loạn vận động*", "d. Rối loạn cảm giác"],
    question: "Câu 139: Ngoài hội chứng màng não, viêm màng não còn có các triệu chứng sau, ngoại trừ:",
  },
  {
    answers: ["a. Viêm thanh quản", "b. Viêm đường hô hấp dưới", "c. Viêm họng mạn", "d. Viêm tai giữa*"],
    question: "Câu 140: Biến chứng thường gặp nhất của viêm xoang:",
  },
  {
    answers: ["a. Hút thuốc lá.", "b. Uống rượu.", "c. Các nguyên nhân trên.*", "d. Sử dụng các chất kích thích."],
    question: "Câu 141: Nguyên nhân viêm họng ở người già lớn tuổi là do:",
  },
  {
    answers: ["a. Viêm tiểu cốt", "b. Viêm thượng nhĩ", "c. Polype hòm nhĩ*", "d. Viêm sào đạo"],
    question: "Câu 142: Chụp tư thế Schause III có thể thấy được các bệnh tích sau, NGOẠI TRỪ:",
  },
  {
    answers: [
      "a. Cơ thể trẻ cần phải có sức đề kháng để chống lại nhiễm khuẩn",
      "b. V.A cần phải có sự tiếp xúc vi khuẩn đầu tiên",
      "c. Sự suy giảm kháng thể của trẻ*",
      "d. V.A nằm ngay ngã tư đường ăn, đường thở",
    ],
    question: "Câu 143: Bệnh thích ứng là do các nguyên nhân sau, NGOẠI TRỪ:",
  },
  {
    answers: [
      "a. Tình trạng thông bào của xương chũm",
      "b. Sức đề kháng của cơ thể",
      "c. Độc lực của vi khuẩn",
      "d. Tuổi mắc bệnh*",
    ],
    question: "Câu 144: Diễn tiến của bệnh viêm tai giữa mạn tính mủ thường phụ thuộc vào các yếu tố sau, NGOẠI TRỪ:",
  },
  {
    answers: ["a. Tinh thần trì truệ", "b. Sốt cao", "c. Huyết áp tăng", "d. Mạch nhanh*"],
    question: "Câu 145: Dấu hiệu tăng áp lực nội sọ bao gồm các dấu hiệu sau, ngoại trừ:",
  },
  { answers: ["a. Khe giữa", "b. Khe trên", "c. Cửa mũi sau", "d. a, b đúng*"], question: "Câu 146:" },
  {
    answers: ["a. Khai thác bệnh sử*", "b. Khám phổi", "c. Soi thanh quản trực tiếp", "d. Điều trị thử"],
    question: "Câu 147: Để chẩn đoán nhanh viêm thanh quản rít ở trẻ em, người thầy thuốc cần phải:",
  },
  {
    answers: ["a. 10 giờ", "b. 12 giờ", "c. 8 giờ*", "d. 6 giờ"],
    question: "Câu 148: Trước khi cắt amidan, bệnh nhân phải nhịn ăn:",
  },
  {
    answers: ["a. Dùng thuốc cầm máu", "b. Khâu cột cầm máu*", "c. Thay băng mới", "d. Băng ép vết mổ"],
    question: "Câu 149: Chảy máu vết mổ sau mở khí quản tái phát nhiều lần cần phải:",
  },
  {
    answers: ["a. H.influenzae", "b. S.pyogenes*", "c. M.catarrhalis", "d. S.aureus"],
    question: "Câu 150: Vi khuẩn sau sản xuất ra men beta-lactamase, NGOẠI TRỪ:",
  },
  {
    answers: [
      "a. Niêm mạc họng đỏ",
      "b. Giả mạc ở họng trắng dai*",
      "c. Các mạch máu ở thành sau họng xung huyết nổi rõ",
      "d. Bề mặt của amidan có nhày trong",
    ],
    question: "Câu 151: Viêm họng đỏ thông thường có các triệu chứng sau, NGOẠI TRỪ:",
  },
  {
    answers: [
      "a. Có thể trong trường hợp trên*",
      "b. Không mắc xương",
      "c. Dị vật quá nhỏ, bị cột sống cổ che lấp",
      "d. Dị vật không cản quang",
    ],
    question: "Câu 152: Chụp X Quang cổ thẳng nghiêng không thấy hình ảnh dị vật thì:",
  },
  {
    answers: ["a. Tắc lỗ thông xoang*", "b. Quá phát bóng sàng", "c. Quá phát cuốn giữa", "d. Qua phát mỏm móc"],
    question: "Câu 153: Yếu tố tại chỗ chủ yếu, quan trọng gây viêm mũi xoang:",
  },
  {
    answers: ["a. Xơ nhĩ*", "b. Biến chứng viêm màng não", "c. Viêm mê nhĩ", "d. Giảm thính lực"],
    question: "Câu 154: Biến chứng lâu dài thường gặp của viêm tai giữa cấp tính mủ:",
  },
  {
    answers: ["a. Ấn các điểm sau tai đau*", "b. Nghe kém hơn", "c. Tiền sử chảy mủ tai", "d. Sốt"],
    question: "Câu 155: Triệu chứng nghĩ đến viêm tai xương chũm mạn tính hồi viêm nhất là:",
  },
  {
    answers: [
      "a. Thường gặp ở người già",
      "b. Nghẹt mũi, nhức đầu, mất ngửi",
      "c. Chảy máu ít, tự cầm",
      "d. Chảy máu thường số lượng nhiều, ít khi tự cầm*",
    ],
    question: "Câu 156: Chảy máu mũi trong ung thư sàng hàm có các đặc điểm sau, NGOẠI TRỪ:",
  },
  {
    answers: ["a. Phế quản gốc (P)", "b. Phế quản gốc (T)", "c. Khí quản*", "d. Thanh quản"],
    question: "Câu 157: Hội chứng “xâm nhập” tái diễn dị vật thường ở:",
  },
  {
    answers: [
      "a. Thành sau họng chảy dịch.",
      "b. Niêm mạc họng đỏ.",
      "c. Nhiều tổ chức lympho quá sản.",
      "d. Tăng xuất tiết nhầy ở họng.*",
    ],
    question: "Câu 158: Triệu chứng chủ yếu của viêm họng mạn tính xuất tiết:",
  },
  {
    answers: ["a. M.cartarralis", "b. S.pneumoniae*", "c. H.influenzae", "d. Streptococcus nhóm A"],
    question: "Câu 159: Vi khuẩn thường gặp nhất trong viêm tai giữa cấp ở trẻ em là:",
  },
  {
    answers: ["a. Ấn vùng sau tai đau", "b. Thính lực giảm nhiều", "c. Sốt", "d. Vận động rối tầm*"],
    question: "Câu 160: Dấu hiệu sau không nghĩ đến viêm tai xương chũm mạn tính hồi viêm",
  },
  {
    answers: ["a. Chấn thương", "b. A,B đúng*", "c. Lão hóa thần kinh tai", "d. Tiếng ồn"],
    question: "Câu 161: Trong xã hội nguyên nhân có thể gây giảm thính lực:",
  },
  {
    answers: ["a. Sinh hóa*", "b. “Halo Test”", "c. Tế bào", "d. Huyết học"],
    question: "Câu 162: Xét nghiệm dịch mũi là dịch não tủy:",
  },
  {
    answers: [
      "a. Chấn thương lồng ngực",
      "b. Nhiễm trùng nguyên phát ở phổi",
      "c. Dị vật đường thở “bỏ quên” *",
      "d. Dãn phế quản",
    ],
    question: "Câu 163: Áp xe phổi có thể do:",
  },
  {
    answers: [
      "a. Sùi một bên Amidan",
      "b. Hạch sau góc hàm",
      "c. Rối loạn về nuốt, đau lên tai",
      "d. Các dấu hiệu trên*",
    ],
    question: "Câu 164: Các dấu hiệu sau ở vùng họng miệng có thể nghi ngờ ung thư:",
  },
  {
    answers: ["a. Bệnh xơ nang.", "b. Sỏi trong mũi.", "c. Tắc cửa mũi sau.", "d. Viêm mũi.*"],
    question: "Câu 165: Bệnh sau hiếm gặp gây chảy mũi ở trẻ em, ngoại trừ:",
  },
  {
    answers: ["a. 5 nhóm", "b. 2 nhóm*", "c. 3 nhóm", "d. 4 nhóm"],
    question: "Câu 166: Chảy máu mũi có mấy nhóm nguyên nhân:",
  },
  {
    answers: ["a. Viêm tai giữa thanh dịch*", "b. Viêm phế quản", "c. Rối loạn tiêu hóa", "d. Viêm mũi xoang"],
    question: "Câu 167: Biến chứng thường gặp nhất của viêm V.A là:",
  },
  {
    answers: ["a. Biến chứng nội sọ do tai", "b. Viêm tai xương chũm", "c. Giảm thính lực*", "d. Viêm tai giữa mủ"],
    question: "Câu 168: Hậu quả lâu dài và thường gặp của viêm tai giữa thanh dịch do V.A là:",
  },
  {
    answers: [
      "a. Thường xuyên có cảm giác nghẹt mũi",
      "b. Cuốn mũi dưới quá phát*",
      "c. Hốc mũi rộng",
      "d. Hốc mũi nhiều vẩy vàng, xanh",
    ],
    question: "Câu 169: Viêm mũi teo bao gồm các triệu chứng sau, NGOẠI TRỪ:",
  },
  {
    answers: ["a. Viêm phổi đồ", "b. Viêm thanh quản cấp*", "c. Viêm tai giữa", "d. Viêm mũi cấp"],
    question: "Câu 170:",
  },
  {
    answers: ["a. Chậm liên tục", "b. Nhanh liên tục", "c. Nhanh từng lúc", "d. Chậm từng lúc*"],
    question: "Câu 171: Tính chất mạch cho phép nghĩ đến áp xe não do tai là:",
  },
  {
    answers: ["a. Tắc ống mũi trán", "b. Viêm màng não", "c. U nhầy xoang trán", "d. Viêm xoang trán*"],
    question: "Câu 172: Biến chứng thường gặp nhất của chấn thương xoang trán là:",
  },
  {
    answers: [
      "a. Chảy mủ tai kéo dài *",
      "b. Viêm ống tai ngoài mạn tính",
      "c. Viêm sụn vành tai",
      "d. Viêm tai giữa mạn tính",
    ],
    question: "Câu 173: Chàm xuất hiện ở tai khi:",
  },
  {
    answers: [
      "a. Dùng kháng sinh sau mở khí quản",
      "b. Tất cả đều đúng*",
      "c. Săn sóc vết thương hằng ngày",
      "d. Tránh ứ đọng",
    ],
    question: "Câu 174: Tránh nhiễm trùng vết mổ cần phải:",
  },
  {
    answers: ["a. Giang mai*", "b. Chàm", "c. Phong", "d. Penphigus"],
    question: "Câu 175: Một bệnh sau đây có thể gây điếc ở trẻ em:",
  },
  {
    answers: [
      "a. Viêm thanh quản mạn tính xuất tiết*",
      "b. Ung thư dây thanh",
      "c. Viêm họng mạn tính",
      "d. Papiloma thanh quản",
    ],
    question: "Câu 176: Chẩn đoán đầu tiên là:",
  },
  {
    answers: [
      "a. Xuất tiết, màng nhĩ kín",
      "b. Không xuất tiết, màng nhĩ không thủng",
      "c. Mạn tính xuất tiết, màng nhĩ thủng*",
      "d. Mạn tính, màng nhĩ thủng",
    ],
    question: "Câu 177: Viêm tai giữa mạn tính có các thể sau, NGOẠI TRỪ:",
  },
  {
    answers: ["a. CT-scan*", "b. Nội soi", "c. Blondeu", "d. Hirtz"],
    question: "Câu 178: Xác định tình trạng viêm xoang chính xác nhất là:",
  },
  {
    answers: ["a. Thanh dịch", "b. Mủ", "c. Dịch hồng*", "d. Nhầy"],
    question:
      "Câu 179: Trong viêm tai giữa mạn tính có màng nhĩ thủng, phân loại dựa vào tính chất sau của dịch hòm nhĩ, NGOẠI TRỪ:",
  },
  {
    answers: [
      "a. Khối u nhỏ đơn thuần",
      "b. Các vị trí trên*",
      "c. Ở tiền đình dây thanh",
      "d. Khu trú 1 vị trí trên dây thanh",
    ],
    question: "Câu 180: Xạ trị liệu trong điều trị ung thư thanh quản:",
  },
  { answers: ["a. Vi khuẩn", "b. Virus*", "c. Virus bội nhiễm", "d. Vi khuẩn Loefler"], question: "Câu 181:" },
  {
    answers: ["a. Trước 3 ngày", "b. Trước 24 giờ", "c. Trước 5 ngày", "d. Trước 3 giờ*"],
    question: "Câu 182: Nắn chỉnh xương chính mũi gãy tốt nhất là:",
  },
  {
    answers: ["a. Chóng mặt", "b. Ù tai*", "c. Nuốt đau tai", "d. Nghe kém"],
    question: "Câu 183: Triệu chúng sớm khi khối u vòm xâm lấn vào loa vòi nhĩ là:",
  },
  {
    answers: ["a. Xoang sàng trước", "b. Xoang bướm*", "c. Xoang trán", "d. Xoang hàm"],
    question: "Câu 184: Nhóm xoang trước bao gồm các xoang sau, NGOẠI TRỪ:",
  },
  {
    answers: ["a. Viêm niêm mạc hòm nhĩ*", "b. Thủng nhĩ", "c. Giảm thính lực", "d. Chảy dịch tai"],
    question: "Câu 185: Được gọi là viêm tai giữa khi:",
  },
  {
    answers: ["a. Corticoide", "b. Kháng sinh", "c. Long đàm", "d. Kháng histamine*"],
    question: "Câu 186: Thuốc chống chảy mũi, ngứa mũi là:",
  },
  {
    answers: ["a. Tế bào B.", "b. Tiểu cầu.", "c. Tế bào T.", "d. Bạch cầu.*"],
    question: "Câu 187: Loại tế bào vận chuyển vi khuẩn trên bề mặt V.A :",
  },
  {
    answers: ["a. Farabeuf", "b. Các dụng cụ trên*", "c. Kelly", "d. Lưỡi dao"],
    question: "Câu 188: Dụng cụ quan trọng nhất trong mở khí quản:",
  },
  {
    answers: ["a. 12 tuổi", "b. 6 tuổi*", "c. 9 tuổi", "d. 4 tuổi"],
    question: "Câu 189: Lứa tuổi thấy rõ hình ảnh xoang hàm trên Xquang:",
  },
  {
    answers: ["a. quá phát", "b. nhiều tế bào lympho", "c. nhiều tế bào mủ", "d. xơ hóa*"],
    question: "Câu 190:Vi thể amidan viêm mạn tính:",
  },
  {
    answers: [
      "a. Khí đạo 2 bên",
      "b. Khí đạo và cốt đạo 1 bên*",
      "c. Khi tỉ số lớn hơn 1 gọi là dương tính ",
      "d. Cốt đạo 2 bên",
    ],
    question: "Câu 191: Nghiệm pháp Rinne là dùng âm thoa so sánh thời gian:",
  },
  {
    answers: ["a. Não đồ", "b. CT-Scan*", "c. MRI", "d. Schiiller"],
    question: "Câu 192: Hiện nay chẩn đoán và xác định số lượng ổ áp xe thường dựa vào:",
  },
  {
    answers: ["a. mủ vàng, loãng", "b.thối, khắm*", "c. mủ xanh, loãng", "d. như bã đậu "],
    question: "Câu 193: Tính chất của mủ trong áp xe amidan:",
  },
  {
    answers: ["a. Viêm da dị ứng", "b. Chàm", "c. Bệnh phổi tắc nghẽn mạn tính*", "d. Hen suyễn"],
    question: "Câu 194: Bệnh nào sau đây không liên quan đến viêm mũi xoang dị ứng:",
  },
  {
    answers: ["a. Thiểu năng trí tuệ", "b. Đảo ngược phủ tạng*", "c. Dị dạng tai ngoài", "d. Mắt xếch, lưỡi to"],
    question: "Câu 195: Dấu hiệu nào sau đây không thuộc hội chứng Franchesti:",
  },
  {
    answers: [
      "a. Phần lưng hành não",
      "b. Phần bụng bên của hành não",
      "c. Phần lưng phía trên của cầu não",
      "d. Gần trung tâm thở ra*",
    ],
    question: "Câu 196: Trung tâm hô hấp nằm ở các phần sau, NGOẠI TRỪ:",
  },
  {
    answers: ["a. U máu ở niêm mạc mũi", "b. Xảy ra đột ngột", "c. Tái phát nhiều lần", "d. Trẻ dưới 15 tuổi*"],
    question: "Câu 197: Chảy máu mũi trong bệnh Rendu-Osler có các đặc điểm sau, ngoại trừ:",
  },
  {
    answers: [
      "a. Dùng kháng sinh liều cao bằng đường chích",
      "b. Đặt sonde dạ dày nuôi ăn",
      "c. Chụp thực quản có cản quang*",
      "d. Giữ người bệnh ở lại để theo dõi",
    ],
    question: "Câu 198: Sau khi soi lấy dị vật ở thực quản, niêm mạc thường bị trầy xước nhiều và chảy máu, không nên:",
  },
  { answers: ["a. Biệt hóa vừa", "b. Biệt hóa cao*", "c. Biệt hóa kém", "d. Không biệt hóa"], question: "Câu 199:" },
  {
    answers: ["a. Viêm V.A*", "b. Viêm mũi – xoang.", "c. Viêm mũi.", "d. Dị vật mũi."],
    question: "Câu 200: Nguyên nhân chảy mũi chủ yếu ở trẻ em là:",
  },
  {
    answers: ["a. Thai già tháng*", "b. Ngộ độc thuốc", "c. Cúm", "d. Rubella"],
    question: "Câu 201: Nghe kém xảy ra trước lúc sinh thường do, ngoại trừ:",
  },
  {
    answers: [
      "a.Chích tê tại chỗ",
      "b.Vừa mê nội khí quản vừa chích tê tại chỗ",
      "c. Mê tĩnh mạch*",
      "d. Mê nội khí quản ",
    ],
    question: "Câu 202: Phương pháp vô cảm chống chỉ định trong cắt amidan:",
  },
  {
    answers: ["a. Mang cá", "b. Xương cá", "c. Vỏ tâm", "d. Hạt đậu phộng*"],
    question: "Câu 203: Dị vật ở thanh quản thường là, ngoại trừ:",
  },
  {
    answers: ["a. XQ sàn sọ trước nghiêng.*", "b. Nội soi.", "c. Giải phẫu bệnh.", "d. Vi khuẩn trong mô V.A."],
    question: "Câu 204: Cận lâm sàng giúp ích cho nghiên cứu về viêm V.A:",
  },
  {
    answers: ["a. Hạch cổ góc hàm*", "b. Ù tai", "c. Nghẹt mũi", "d. Chảy máu mũi 2 bên hoặc 1 bên"],
    question: "Câu 205: Triệu chứng nào sau đây không có trong bệnh u xơ vòm:",
  },
  {
    answers: ["a. Kháng sinh", "b. Kháng sinh tại chỗ", "c. Giải quyết nguyên nhân*", "d. Phẫu thuật FESS"],
    question: "Câu 206: Điều trị căn bản viêm xoang mạn tính:",
  },
  {
    answers: ["a. Đa nhiễm khuẩn", "b. Viêm mạn tính", "c. Cholesteatoma", "d. Viêm xương, tiêu xương*"],
    question: "Câu 207: Mủ thối, khắm trong viêm tai giữa mạn tính mủ thường là do:",
  },
  {
    answers: [
      "a. Ho cơn dữ dội, ngạt thở cấp, tím tái và co kéo cơ hô hấp*",
      "b. Ho ông ống từng cơn, thở rít khi hít vào",
      "c. Khó thở đột ngột",
      "d. Cơn ngạt kèm tiếng rít thì thở ra",
    ],
    question: "Câu 208: Đặc điểm thuộc hội chứng xâm nhập là:",
  },
  {
    answers: ["a. 1-5 tuổi*", "b. 6-10 tuổi", "c. 11-15 tuổi", "d. Dưới 1 tuổi"],
    question: "Câu 209: Lưa tuổi hay gặp viêm thanh quản cấp ở trẻ em là:",
  },
  {
    answers: ["a. Gerlach", "b. Lingle de Frankel", "c. Luschka*", "d. Palatine"],
    question: "Câu 210: V.A còn được gọi là amidan:",
  },
  {
    answers: ["a. Viêm tai giữa cấp", "b. Viêm amidan quá phát", "c. Viêm V.A", "d. Viêm sào bào cấp ở hài nhi *"],
    question: "Câu 211: Một bệnh TMH có thể gây triệu chứng đường tiêu hóa ở trẻ em:",
  },
  {
    answers: [
      "a. Mở ngang sụn khí quản 4-5",
      "b. Mở ngang sụn khí quản 3-4",
      "c. Màng giáp nhẫn",
      "d. Mở ngang sụn khí quản 1-2*",
    ],
    question: "Câu 212: Vị trí mở khí quản nào nhanh nhất:",
  },
  {
    answers: ["a. 30 dB", "b. 20 dB*", "c. 10 dB", "d. 40 bB"],
    question: "Câu 213: Được gọi là nghe kém khi thính lực giảm trên:",
  },
  {
    answers: ["a.55-70%. ", "b. 60-75%.*", "c. 50-65%.", "d. 65-80%."],
    question: "Câu 214: Viêm họng cấp do siêu vi ở trẻ em chiếm:",
  },
  {
    answers: ["a. Màng nhĩ lõm đục", "b. Ù tai tiếng trầm", "c. Điếc dẫn truyền", "d. Các dấu hiệu trên*"],
    question: "Câu 215: Dấu hiệu chủ yếu của viêm tai giữa mạn tính xuất tiết xơ nhĩ:",
  },
  {
    answers: ["a. Viêm ống tai ngoài", "b. Tất cả đều đúng*", "c. Viêm tai giữa", "d. Xốp xơ tai"],
    question: "Câu 216: Nghe kém kèm theo ù tai có thể gặp trong bệnh sau:",
  },
  {
    answers: ["a. Thành sau trên vòm*", "b. Thành bên của vòm", "c. Vòm khẩu cái", "d. Cửa mũi sau"],
    question: "Câu 217: Vị trí của V.A ở:",
  },
  {
    answers: [
      "a. Qua nội soi*",
      "b. Cung chân mày",
      "c. Vào xoang trán qua thành trước",
      "d. Đường rạch chân tóc liên thái dương",
    ],
    question: "Câu 218: Phương pháp tiếp cận xoang trán có nhiều ưu điểm hiện nay:",
  },
  {
    answers: ["a. VI", "b. III", "c. V1", "d. V2*"],
    question: "Câu 219: Hội chứng khe bướm bao gồm liệt các dây thần kinh sau, NGOẠI TRỪ:",
  },
  {
    answers: ["a. Hút thông mũi", "b. Kháng viêm", "c. Rạch thoát lưu mủ*", "d. Kháng sinh liều cao"],
    question: "Câu 220:",
  },
  {
    answers: [
      "a. X quang tim phổi",
      "b. Soi tươi giả mạc tìm vi khuẩn*",
      "c. Công thức máu",
      "d. Cấy máu tìm vi khuẩn và làm kháng sinh đồ",
    ],
    question: "Câu 221: Xét nghiệm hữu ích giúp cho chẩn đoán xác định là:",
  },
  {
    answers: ["a. Nước đường lạnh", "b. Cháo", "c. Sữa lạnh", "d. Súp nguội*"],
    question: "Câu 222: 2 giờ đầu sau cắt amidan chế độ ăn hợp lý nhất là:",
  },
  {
    answers: ["a. Đau rát họng.", "b. Mệt mỏi.", "c. Sốt vừa.", "d. Giả mạc lan rộng vùng họng.*"],
    question: "Câu 223: Viêm họng bạch hầu có triệu chứng chủ yếu sau:",
  },
  {
    answers: ["a. Nôn nhiều và nôn vọt*", "b. Liệt VII trung ương", "c. Mất ngôn ngữ", "d. Phù gai thị"],
    question: "Câu 224: Triệu chứng thường xuất hiện sớm và thường có trong áp xe não do tai là:",
  },
  {
    answers: ["a. Hạt dưa", "b. Hạt Sapoche", "c. Hạt đậu phộng", "d. Hạt Mãng Cầu*"],
    question: "Câu 225: Nguồn gốc thực vật ở phía nam trong dị vật đường thở gặp nhiều:",
  },
  {
    answers: ["a. Đỉnh mũi", "b. Rễ mũi", "c. Phần sụn", "d. Phần xương*"],
    question: "Câu 226: Phần nào của tháp mũi dễ bị chấn thương nhất:",
  },
  {
    answers: ["a. Cấy máu", "b. Đo thính lực đồ", "c. X quang tư thế shiiller*", "d. Xét nghiệm huyết học"],
    question:
      "Câu 227: Phương pháp cận lâm sàng được đề xuất giúp cho chẩn đoán xác định trong điều kiện tuyến huyện là:",
  },
  {
    answers: [
      "a. Gặp nhiều nhất trong ung thư tai mũi họng*",
      "b. Thường là ung thư biểu mô",
      "c. Thường gặp ở khoảng tuổi trên 60 ",
      "d. Nam mắc nhiều hơn nữ",
    ],
    question: "Câu 228: Ung thư thanh quản có các đặc điểm sau, NGOẠI TRỪ:",
  },
  {
    answers: ["a. Biểu mô bề mặt.*", "b. Đường máu.", "c. Các đường trên.", "d. Bạch huyết."],
    question: "Câu 229: Kháng viêm xâm nhập vào mô V.A qua đường:",
  },
  {
    answers: ["a. Gr(+)*", "b. Gr(-)", "c. Vi khuẩn kỵ khí", "d. Proteus"],
    question: "Câu 230: Loại vi khuẩn gặp nhiều nhất trong biến chứng nội sọ là:",
  },
  {
    answers: [
      "a. Miệng thực quản mở ra đón thức ăn",
      "b. Đường miệng bị bít lại do lưỡi nhô lên cao",
      "c. Màn hầu kéo lên trên và hai trụ khép lại",
      "d. Thanh quản mở ra*",
    ],
    question: "Câu 231: Khi thức ăn từ họng miệng xuống thực quản, các cơ vận động đồng thời, NGOẠI TRỪ: ",
  },
  {
    answers: ["a. Từ 4 đến 5", "b. Trên 3", "c. Từ 8 đến 9", "d. Từ 6 đến 7*"],
    question: "Câu 232: Cholesteatoma nguyên phát thường gặp ở lứa tuổi:",
  },
  {
    answers: ["a. Các nguyên nhân trên.", "b. Dài mỏm trâm.", "c. Viêm V.A.*", "d. Viêm xoang sau."],
    question: "Câu 233: Triệu chứng trong viêm họng mạn tính có thể do các nguyên nhân khác:",
  },
  {
    answers: ["a. Giảm thính lực*", "b. Viêm xương chũm", "c. Viêm mê nhĩ", "d. Viêm não – màng não"],
    question: "Câu 234: Biến chứng thường xảy ra nhất của viêm tai giữa cấp là:",
  },
  {
    answers: ["a. Mất mùi", "b. Nghẹt mũi", "c. a, b đúng*", "d. Chảy mũi"],
    question: "Câu 235: Triệu chứng chủ yếu của viêm V.A là:",
  },
  {
    answers: ["a. Khít hàm*", "b. Đau tai", "c. Nuốt đau", "d. Chảy nhiều nước miếng"],
    question: "Câu 236: Dấu hiệu thường gặp và tương đối đặc hiệu của viêm tấy quanh amidan là:",
  },
  {
    answers: ["a. Nhức đầu", "b. Chảy mũi xuống họng", "c. Nghẹt mũi một bên*", "d. Giảm khứu giác"],
    question: "Câu 237: Triệu chứng vẹo vách ngăn sau chấn thương chủ yếu là:",
  },
  {
    answers: ["a. Lymphoma non Hoggin", "b. Carcinoma*", "c. Bệnh bạch cầu.", "d. Lymphomasarcom"],
    question: "Câu 238: Ung thư Amidan. Thể giải phẫu bệnh thường gặp:",
  },
  {
    answers: [
      "a. Mở trung thất dẫn lưu",
      "b. Các nội dung trên*",
      "c. Soi thực quản kiểm tra",
      "d. Đặt ống sonde dạ dày",
    ],
    question: "Câu 239: Biến chứng trung thất do dị vật thực quản cần xử trí:",
  },
  {
    answers: [
      "a. Xác định động mạch cảnh",
      "b. Sờ có cảm giác đốt khí quản",
      "c. Ép vào xem bệnh nhân có khó thở không",
      "d. Rút kim bơm tiêm có khí không*",
    ],
    question: "Câu 240: Muốn biết chắc chắn tìm đúng khí quản cần làm là:",
  },
  {
    answers: ["a. Các bệnh trên*", "b. U ống tai ngoài", "c. Nút ráy tai", "d. Viêm tai ngoài"],
    question: "Câu 241: Nghe kém 1 bên do ống tai ngoài thường do:",
  },
  {
    answers: ["a. Khó thở", "b. Ho, kích thích", "c. Bé há miệng để thở *", "d. Tím tái"],
    question: "Câu 242: Dấu hiệu nghi ngờ tắc cửa mũi sau sau sinh:",
  },
  {
    answers: [
      "a. Chỉ làm khi có chỉ định trong hòm nhĩ*",
      "b. Trích rạch ở vị trí ¼ sau trên",
      "c. Không cần làm",
      "d. Nên làm cho mọi trường hợp",
    ],
    question: "Câu 243: Trích rạch màng nhĩ trong viêm tai giữa cấp:",
  },
  {
    answers: ["a. 7", "b. 5", "c. 4", "d. 6*"],
    question: "Câu 244: Thời kỳ bào thai xuất hiện xoang sàng từ tháng thứ mấy:",
  },
  {
    answers: ["a. Hạ thanh môn", "b. Thượng thanh môn", "c. Thể rít*", "d. Xuất tiết"],
    question: "Câu 245: Trong các thể viêm thanh quản dưới đây, thể còn có tên bạch hầu giả hiệu là:",
  },
  {
    answers: ["a. Mọi lứa tuổi", "b. Trẻ em dưới 15 tuổi", "c. Trẻ dưới 5 tuổi", "d. Trẻ từ 2 đến 4 tuổi*"],
    question: "Câu 246: Khó thở thanh quản do dị vật đường thở thường gặp ở:",
  },
  {
    answers: ["a. Dầy dính màng nhện", "b. a và b đúng*", "c. Rối loạn vận động", "d. Nhức đầu"],
    question: "Câu 247: Di chứng của viêm màng não do tai là:",
  },
  {
    answers: [
      "a. Cấy máu tìm được vi khuẩn*",
      "b. Tốc độ lắng máu tăng mạnh",
      "c. Công thức bạch cầu tăng cao",
      "d. Nước tiểu có albumin và trụ niệu",
    ],
    question: "Câu 248: Xét nghiệm có giá trị chẩn đoán viêm tĩnh mạch bên là:",
  },
  {
    answers: [
      "a. Nạo V.A khi có chỉ định*",
      "b. Kháng sinh thích hợp",
      "c. Dùng thuốc rỏ thông mũi",
      "d. Chích rạch màng nhĩ",
    ],
    question: "Câu 249: Phòng ngừa viêm tai giữa thanh dịch do viêm V.A tốt nhất là:",
  },
  {
    answers: ["a. Tràn khí màng phổi*", "b. Tràn khí trung thất", "c. Tràn khí dưới da", "d. Khí phế thủng"],
    question: "Câu 250: Biến chứng tràn khí do dị vật đường thở thường:",
  },
  {
    answers: ["a. Polyp vòm", "b. Ung thư vòm", "c. U xơ vòm*", "d. U nhú đảo ngược"],
    question: "Câu 251: Khối u vùng vòm gây chảy máu thường xuyên ở trẻ em <15 tuổi cần chẩn đoán bệnh:",
  },
  {
    answers: ["a. Giải phẫu bệnh.*", "b. Miễn dịch.", "c. Vi khuẩn .", "d. Không cần thiết."],
    question: "Câu 252: Xét nghiệm nào cần thiết sau nghi nạo V.A tồn lưu :",
  },
  {
    answers: ["a. Trên xuống dưới", "b. Trong ra ngoài", "c. Sau ra trước", "d. Trước ra sau và từ ngoài vào trong*"],
    question: "Câu 253: Vòi nhĩ đi từ các hướng sau, NGOẠI TRỪ:",
  },
  {
    answers: [
      "a. Bé nô đùa trong khi ăn",
      "b. Cha mẹ ép buộc thô bạo khi ăn hoặc khi uống thuốc",
      "c. Các phản xạ chưa được hoàn chỉnh*",
      "d. Bé quấy khóc trong khi ăn",
    ],
    question: "Câu 254: Dị vật ở trẻ nhỏ thường là do:",
  },
  {
    answers: ["a. Nghe kém", "b. Ù tai", "c. Chóng mặt*", "d. Đau tai"],
    question: "Câu 255: Dấu hiệu sau không thuộc viêm tai giữa xuất tiết dịch thấm:",
  },
  {
    answers: ["a. Liệt mặt *", "b. Chấn thương tai trong", "c. Vỡ xương ống tai", "d. Chấn thương vành tai"],
    question: "Câu 256: Tai biến TMH trong sản khoa thường gặp nhất khi sanh bằng dụng cụ hỗ trợ:",
  },
  {
    answers: [
      "a. Nội soi thực quản",
      "b. X quang thực quản cổ thẳng",
      "c. X quang thực quản cổ nghiêng*",
      "d. X quang tim phổi",
    ],
    question: "Câu 257: Xét nghiệm nào sau đây có thể chẩn đoán được áp xe thực quản:",
  },
  {
    answers: ["a. Cả hai màng", "b. Màng chùng", "c. Phần dưới của màng căng*", "d. Màng căng"],
    question: "Câu 258: Sự dẫn truyền âm thanh của màng nhĩ chủ yếu do:",
  },
  {
    answers: ["a. May kín da", "b. Mở khí quản thấp*", "c. Ống canuyn đúng kích cỡ", "d. Lỗ rạch khí quản vừa phải"],
    question: "Câu 259: Hạn chế phòng tránh biến chứng tràn khí dưới da cần phải, ngoại trừ:",
  },
  {
    answers: ["a. Âm ốc tai", "b. ABR", "c. Thính học đồ*", "d. Nhĩ lượng đồ"],
    question: "Câu 260: Tầm soát thính lực ở trẻ em , xét nghiệp sau đây không phù hợp:",
  },
  {
    answers: [
      "a. Khai thông đường thở để lấy dị vật",
      "b. Đặt nội khí quản để khai thông đường thở ngay",
      "c. Khai thông đường thở giúp người bệnh thở lại bình thường*",
      "d. Xác định nguyên nhân để xử trí thích hợp",
    ],
    question: "Câu 261: Mục đích chủ yếu nhất trong xử trí cấp cứu khó thở thanh quản là:",
  },
  {
    answers: ["a. Viêm tai giữa*", "b. Nhiễm độc", "c. Chấn thương", "d. Nhiễm siêu vi"],
    question: "Câu 262: Nghe kém xảy ra sau khi sanh nguyên nhân thường gặp là:",
  },
  {
    answers: ["a. U góc cầu tiểu não", "b. Xốp xơ tai", "c. U dây VIII", "d. Các bệnh trên*"],
    question: "Câu 263: Nghe kém một bên kèm chóng mặt gặp trong bệnh:",
  },
  {
    answers: [
      "a. Biến dạng tháp mũi",
      "b. Tím da vùng mũi",
      "c. Đau khi sờ nắn vùng xương chính mũi",
      "d. Có tiếng “lạo sạo” xương chính mũi* ",
    ],
    question: "Câu 264: Dấu hiệu chắc chắn của gẫy xương chính mũi là:",
  },
  {
    answers: [
      "a. Có xu hướng lan vào khoang trước thanh thiệt",
      "b. Có xu hướng lan vào khoang sau móng",
      "c. Dấu hiệu nuốt đau là chủ yếu",
      "d. Hạch thường có muộn*",
    ],
    question: "Câu 265: Ung thư thanh thiệt có các đặc điểm sau, NGOẠI TRỪ:",
  },
  {
    answers: ["a. Viêm tắc tĩnh mạch bên", "b. Áp xe đại não", "c. Áp xe tiểu não", "d. Viêm màng não*"],
    question: "Câu 266: Trong viêm tai xương chũm, biến chứng nội sọ gặp nhiều nhất là:",
  },
  {
    answers: [
      "a. Viêm thanh thiệt cấp",
      "b. Viêm thanh quản mạn tính*",
      "c. Viêm thanh quản co thắt",
      "d. Viêm thanh quản cấp hạ thanh môn. ",
    ],
    question: "Câu 267: Ở trẻ em dưới 5 tuổi các dạng viêm thanh quản gây khó thở thanh quản, ngoại trừ:",
  },
  {
    answers: [
      "a. Chụp phim Blondeau-Hirtz",
      "b. Dùng kháng sinh, kháng viêm",
      "c. Nội soi vòm mũi họng",
      "d. Chọc hút hạch làm tế bào học*",
    ],
    question:
      "Câu 268: Chẩn đoán xác định bao gồm các việc sau, NGOẠI TRỪ? Tình huống: Người bệnh nam, 55 tuổi có một hạch to ở sau góc hàm phải từ 2 tháng nay. Nghẹt mũi bên phải, thỉnh thoảng có khạc ra nhày lẫn máu. Hút sạch nhày và máu, đưa ống soi vào cửa mũi sau, thấy có 1 khối sùi to bít 1 phần cửa mũi sau",
  },
  {
    answers: ["a. Bệnh thích ứng", "b. U xơ vòm mũi họng", "c. Viêm V.A mạn tính", "d. Viêm V.A tồn lưu*"],
    question: "Câu 269: V.A to sau tuổi 15 được gọi là:",
  },
  {
    answers: ["a. Nuốt đau chỉ ở một vị trí*", "b. Nuốt vướng", "c. Nuốt sặc", "d. Nuốt đau"],
    question: "Câu 270: Dấu hiệu có giá trị nhất để chẩn đoán dị vật mới lọt vào đường ăn là:",
  },
  {
    answers: ["a.Nuốt vướng", "b.Loạn cảm họng* ", "c. Nuốt khó ", "d.Nuốt sặc"],
    question: "Câu 271: Biến chứng lâu dài sau cắt amidan:",
  },
  {
    answers: [
      "a. Miệng thực quản*",
      "b. Đoạn ngang tầm động mạch chủ",
      "c. Đoạn ngang đầu phế quản gốc trái",
      "d. Lỗ tâm vị",
    ],
    question: "Câu 272: Đoạn hẹp của thực quản dễ bị mắc dị vật nhất là:",
  },
  { answers: ["a. I", "b. III", "c. IV", "d. II*"], question: "Câu 273: Với T1N1 xếp loại ung thư vòm ở giai đoạn:" },
  {
    answers: ["a. Hạch sau góc hàm", "b. Hạch nhóm cổ cao", "c. Tất cả đúng*", "d. Bờ sau cơ nhị thân"],
    question: "Câu 274: Hạch di căn trong ung thư vòm:",
  },
  {
    answers: [
      "a. Rắc bột kháng sinh vào tai*",
      "b. Loại thuốc sử dụng không làm độc ốc tai",
      "c. Phải hút sạch mủ trước",
      "d. Kháng sinh thích hợp, không gây dị ứng thuốc",
    ],
    question: "Câu 275: Điều không nên làm khi rỏ thuốc vào tai là:",
  },
  {
    answers: [
      "a. Kính hiển vi kết hợp nội soi hòm nhĩ với ống 300*",
      "b. Nội soi tai",
      "c. Nguồn sáng phải rõ (đèn clar)",
      "d. Đèn soi tai có loa tai thích hợp",
    ],
    question: "Câu 276: Muốn đánh giá tổn thương tai giữa, cần phải có:",
  },
  {
    answers: ["a. Phế cầu", "b. Liên cầu tiêu huyết beta nhóm A", "c. H.influenzae", "d. Siêu vi trùng*"],
    question: "Câu 277: Nguyên do chủ yếu của viêm họng cấp là:",
  },
  {
    answers: ["a. Sũng nước mê nhĩ", "b. Viêm amidan", "c. Viêm tai giữa", "d. Viêm mũi xoang dị ứng *"],
    question: "Câu 278: Bệnh TMH liên quan đến yếu tố toàn thân:",
  },
  {
    answers: [
      "a. Thay đổi môi trường có tiếng ồn thường xuyên",
      "b. Đeo nút tai*",
      "c. Hạn chế tiếng ồn trong nhà máy",
      "d. Che chắn không gian làm việc ",
    ],
    question: "Câu 279: Phòng tránh điếc nghề nghiệp hữu hiệu nhất là:",
  },
  {
    answers: ["a. Sốt", "b. Các yếu tố trên*", "c. Nghẹt mũi, chảy mũi", "d. Nuốt đau"],
    question: "Câu 280: Ở trẻ em viêm amidan cấp kèm theo:",
  },
  {
    answers: [
      "a. Viêm thanh quản sởi",
      "b. Viêm đường hô hấp trên*",
      "c. Bạch hầu thanh quản",
      "d. Viêm thanh quản cúm",
    ],
    question: "Câu 281: Khó thở thanh quản ở trẻ em thường do:",
  },
  {
    answers: ["a. Thuốc dãn phế quản*", "b. An thần", "c. Thở oxy", "d. Mở khí quản"],
    question: "Câu 282: Thái độ xử trí không nên thực hiện ngay tức thì là:",
  },
  {
    answers: [
      "a. Biến dạng xương chính mũi",
      "b. Đau chói vùng rễ mũi",
      "c. Tụ máu khóe mắt trong lan rộng*",
      "d. Vẹo và rách niêm mạc vách ngăn",
    ],
    question: "Câu 283: Triệu chứng lâm sàng gợi ý vỡ khối sàng mũi:",
  },
  {
    answers: [
      "a. Chất lượng dịch xuất tiết",
      "b.Kinh kỳ ở phụ nữ*",
      "c. Chức năng lông chuyển",
      "d.Thông thoáng lỗ thông khe ",
    ],
    question: "Câu 284: Yếu tố sau đây không ảnh hưởng sinh lý bình thường của mũi xoang:",
  },
  {
    answers: ["a. Viêm quanh xoang*", "b. Loạn sản niêm mạc", "c. Phì đại niêm mạc", "d. Có polype xoang sàng"],
    question: "Câu 285: Thể viêm xoang mạn tính nào thường gây biến chứng về mắt:",
  },
  {
    answers: ["a. IV", "b. V", "c. III", "d. VI*"],
    question: "Câu 286: Mắt lé trong là do khối u chèn ép dây thần kinh",
  },
  {
    answers: ["a. Khạc ra nhày máu*", "b. Mất mùi", "c. Nhức vùng mặt", "d. Nghẹt mũi hoàn toàn"],
    question: "Câu 287: Triệu chứng mũi xoang giai đoạn muộn là:",
  },
  {
    answers: [
      "a. Không có triệu chứng đặc hiệu",
      "b. Tất cả các đặc điểm trên*",
      "c. Ung thư ở vùng khó khảo sát.",
      "d. Mượn các triệu chứng của các cơ quan khác",
    ],
    question: "Câu 288: Ung thư vòm họng ở Việt Nam được chẩn đoán muộn là do:",
  },
  {
    answers: ["a. Hóa trị liệu", "b. Xạ trị*", "c. Phẫu thuật", "d. Miễn dịch trị liệu"],
    question: "Câu 289: Phương pháp điều trị hiện nay được áp dụng nhiều nhất trong ung thư vòm họng là:",
  },
  {
    answers: ["a. Nhiễm độc", "b. Các nguyên nhân trên", "c. Nhiễm siêu vi", "d. Chấn thương*"],
    question: "Câu 290: Nghe kém bẩm sinh không thuộc bệnh:",
  },
  {
    answers: ["a. Cán xương búa nằm ngang", "b. Màng nhĩ lõm", "c. Valsava (+)*", "d. Nghe kém dẫn truyền"],
    question: "Câu 291: Đặc điểm sau đây thuộc bệnh tắc vòi nhĩ:",
  },
  {
    answers: [
      "a. Điếc dẫn truyền",
      "b. Amidan to độ IV",
      "c. Chảy mũi, nhảy mũi 3 ngày nay*",
      "d. Có tiền sử chảy máu cam",
    ],
    question: "Câu 292: Cần hạn chế đi máy bay, lặn xuống nước sâu khi bị:",
  },
  {
    answers: ["a. Cố định sụn giáp*", "b. Máng cảnh", "c. Đường trắng giữa", "d. Xác định các đốt khí quản"],
    question: "Câu 293: Xác định đường rạch da vùng trước cổ cần phải:",
  },
  {
    answers: ["a. Sốt nhẹ", "b. Nhảy mũi, ngứa mũi*", "c. Chảy mũi, nhầy trong", "d. Nghẹt mũi"],
    question: "Câu 294: Triệu chứng lâm sàng cho phép nghĩ đến viêm mũi dị ứng là:",
  },
  {
    answers: ["a. Hạ thanh môn", "b. Xuất tiết thông thường", "c. Khí phế quản do vi khuẩn", "d. Thanh thiệt cấp*"],
    question: "Câu 295: Rối loạn về nuốt thường có trong viêm thanh quản:",
  },
  {
    answers: ["a. Kháng viêm", "b. Chọc hút mủ", "c. Kháng sinh", "d. Rạch thoát lưu mủ*"],
    question: "Câu 296: Điều trị chủ yếu trong áp xe amidan giai đoạn cấp là:",
  },
  {
    answers: ["a. Dưới 2 tuổi", "b. Người già không có răng", "c. Trẻ lớn và người lớn*", "d. 2-4 tuổi"],
    question: "Câu 297: Lứa tuổi hay mắc dị vật đường ăn nhất là:",
  },
  {
    answers: ["a. Hầu", "b. Các nhánh mũi của động mạch mặt", "c. Động mạch bướm khẩu cái*", "d. Khẩu cái xuống"],
    question: "Câu 298: Đám rối Kisselback được hình thành bởi động mạch:",
  },
  {
    answers: ["a. Mất đồng vận", "b. Rối loạn cử động", "c. Động mắt", "d. Thay đổi dịch não tủy*"],
    question: "Câu 299: Triệu chứng không thuộc hội chứng tiểu não là:",
  },
  {
    answers: [
      "a. Tiên lượng xấu",
      "b. Điều trị chủ yếu là xạ trị",
      "c. Người Trung Quốc chiếm tỷ lệ cao",
      "d. Ung thư vòm thường chẩn đoán muộn do “ mượn” triệu chứng của cơ quan khác*",
    ],
    question: "Câu 300: Chọn câu đúng nhất trong các câu sau:",
  },
  {
    answers: [
      "a. Thở oxy hỗ trợ",
      "b. Bộc lộ đường truyền tĩnh mạch đồng thời",
      "c. Soi thanh khí phế quản ngay để lấy dị vật",
      "d. Mở khí quản ngay*",
    ],
    question: "Câu 301: Xử trí cấp cứu tại bệnh viện khi bé đang bị ngạt thở dữ dội do dị vật đường thở là:",
  },
  {
    answers: [
      "a. Chấn thương đầu mặt cổ",
      "b. Ung thư thanh quản",
      "c. Hôn mê sau chấn thương sọ não",
      "d. Khó thở thanh quản*",
    ],
    question: "Câu 302: Chỉ định mở khí quản chủ yếu trong trường hợp:",
  },
  {
    answers: ["a. Viêm kết mạc", "b. Đau nhức các khớp*", "c. Chảy nước mắt.", "d. Nặng mặt"],
    question: "Câu 303: Triệu chứng ngoài mũi có trong viêm mũi dị ứng:",
  },
  {
    answers: ["a. Người lớn, hút thuốc lá nhiều", "b. Dưới 5 tuổi*", "c. 6-10", "d. 11-15"],
    question: "Câu 304: Viêm mũi cấp tính, thường gặp nhất ở lứa tuổi:",
  },
  {
    answers: ["a. Dây VIII", "b. Dây VI", "c. Dây VII", "d. Dây V*"],
    question: "Câu 305: Dấu hiệu khít hàm do tổn thương dây thần kinh nào trong ung thư vòm:",
  },
  {
    answers: ["a. Dây thần kinh VIII", "b. Các vị trí trên *", "c. Tại ốc tai", "d. Từ cửa sổ bầu dục đến vỏ não"],
    question: "Câu 306: Được gọi là nghe kém tiếp nhận khi tổn thương ở, ngoại trừ:",
  },
  {
    answers: ["a. Cán búa nằm ngang", "b. Mấu ngắn nhô ra ngoài*", "c. Màng nhĩ bị lõm", "d. Tam giác sáng thu nhỏ"],
    question: "Câu 307: Đặc điểm màng nhĩ trong viêm tai giữa xuất tiết dịch thấm:",
  },
  {
    answers: [
      "a. Chấn thương tai",
      "b. Viêm tai xương chũm mạn tính có cholesteatome*",
      "c. Viêm tai xương chũm cấp",
      "d. Nhiễm trùng tai trên bệnh nhân suy giảm miễn dịch",
    ],
    question: "Câu 308: Bệnh tai thường gây biến chứng nội sọ nhất là:",
  },
  {
    answers: ["a. Nấm thanh quản, thực quản", "b. Loét họng, miệng", "c. Nấm họng, miệng*", "d. Sarca Kaposi"],
    question: "Câu 309: HIV/AIDS biểu hiện thương tổn thường gặp nhất tại cơ quan tai mũi họng là:",
  },
  {
    answers: ["a. Ho tái diễn", "b. Chảy mũi", "c. Nghẹt mũi*", "d. Nhức đầu"],
    question: "Câu 310: Triệu chứng chủ yếu và có sớm của viêm V.A quá phát là:",
  },
  {
    answers: [
      "a. Viêm Amidan cấp",
      "b. Viêm cấp tính niêm mạc vùng họng miệng kể cả viêm Amidan khẩu cái*",
      "c. Viêm niêm mạc họng",
      "d. Viêm thành sau họng cấp",
    ],
    question: "Câu 311: Viêm họng cấp là:",
  },
  {
    answers: ["a. Ngứa kết mạc mắt.", "b. Các triệu chứng trên.", "c. Nước mũi loãng trong.", "d. Nhảy mũi."],
    question: "Câu 312: Ngoài triệu chứng nghẹt mũi, trẻ em có các triệu chứng sau nghĩ đến viêm mũi dị ứng:",
  },
  {
    answers: [
      "a. Kháng viêm toàn thân",
      "b. Kháng histamine",
      "c. Sử dụng corticoid trị tại chỗ",
      "d. Giải mẫn cảm đặc hiệu đối với dị nguyên*",
    ],
    question: "Câu 313: Điều trị có hiệu quả, đúng nguyên nhân trong viêm mũi dị ứng là:",
  },
  {
    answers: [
      "a. Phản xạ ốc tai – mi mắt",
      "b. Phản xạ ốc tai – cử động",
      "c. Phản xạ định hướng",
      "d. Các nghiệm pháp trên*",
    ],
    question: "Câu 314: Các nghiệm pháp phát hiện điếc ở trẻ dưới 18 tháng tuổi:",
  },
  {
    answers: [
      "a. Màng nhĩ nề đỏ, hơi tím",
      "b. Tam giác sáng mờ hoặc mất",
      "c. Màng nhĩ lõm, mạch máu chạy dọc cán búa*",
      "d. Không thấy cán búa hoặc mấu ngắn xương búa",
    ],
    question:
      "Câu 315: Có thể gặp các triệu chứng thực thể sau khi khám màng nhĩ trong viêm tai giữa cấp mủ, NGOẠI TRỪ:",
  },
  {
    answers: [
      "a. Dị vật ở khí quản*",
      "b. Khối u dây thanh",
      "c. Viêm thanh khí phế quản",
      "d. Viêm thanh quản bạch hầu",
    ],
    question: "Câu 316: Khó thở thanh quản có hội chứng “xâm nhập” tái diễn là do:",
  },
  {
    answers: [
      "a. Môi trường bị ô nhiễm",
      "b. Viêm thanh quản mạn tính kéo dài",
      "c. Uống nhiều rượu và hút thuốc lá*",
      "d. U nhú thanh quản",
    ],
    question: "Câu 317: Ung thư thanh quản thường là do:",
  },
  {
    answers: ["a. Viêm xoang tĩnh mạch bên", "b. Áp xe ngoài màng cứng*", "c. Liệt mặt", "d. Viêm màng não"],
    question: "Câu 318: Biến chứng nào sau đây không phải là biến chứng nội sọ do tai:",
  },
  {
    answers: ["a. Liên cầu.", "b. Các loại trên.*", "c. Phế cầu.", "d. Hemophylus Influenzae."],
    question: "Câu 319: Viêm họng giả mạc trắng thông thường do:",
  },
  {
    answers: ["a. Xung huyết đơn thuần", "b. Xuất tiết", "c. Quá phát", "d. Teo*"],
    question: "Câu 320: Ở người bị trĩ mũi, thể lâm sàng viêm họng mạn tính hay gặp là:",
  },
  {
    answers: ["a. Da vùng cổ tấy đỏ", "b. Vùng cổ bành to", "c. Niểng cổ 1 bên*", "d. Cổ gập"],
    question: "Câu 321: Dấu hiệu có giá trị khi quan sát người bệnh bị mắc xương biến chứng áp xe cạnh cổ:",
  },
  {
    answers: ["a. Viêm V.A", "b. Viêm ống tai ngoài", "c. Viêm mũi họng cấp", "d. Viêm tai giữa thanh dịch*"],
    question: "Câu 322: Nguyên nhân thường gặp nhất gây giảm thính lực ở trẻ em là:",
  },
  {
    answers: ["a. Có giả mạc ở niêm mạc họng", "b. Sốt cao", "c. Khàn tiếng", "d. Khó thở thanh quản*"],
    question: "Câu 323: Dấu hiệu điển hình của viêm thanh quản bạch hầu là:",
  },
  {
    answers: ["a. Nguồn sáng tập trung", "b. Gương soi phù hợp", "c. Giảm phản xạ họng*", "d. Hơ nóng gương soi"],
    question: "Câu 324: Khi soi thanh quản gián tiếp, điều kiện để thấy rõ hình ảnh của thanh quản là:",
  },
  {
    answers: ["a. Liệt mặt ngoại biên", "b. Chảy mủ tai", "c. Chảy máu tai*", "d. Chảy dịch não tủy qua tai"],
    question: "Câu 325: Nghe kém do vỡ xương đá không có triệu chứng sau:",
  },
  {
    answers: ["a. Viêm tai hồi viêm", "b. Viêm màng não", "c. Viêm tắc xoang tĩnh mạch bên*", "d. Viêm xương đá"],
    question:
      "Câu 326: Bệnh nhân có tiền căn chảy mủ tai nhiều lần, hiện tại sốt cao, lạnh run, đau nhức tai, cần nghĩ đến:",
  },
  {
    answers: [
      "a. Chỉ gặp ở người lớn*",
      "b. Chảy máu mũi 1 bên, máu đỏ tươi",
      "c. Máu có thể chảy cả 2 bên",
      "d. Soi gắp dị vật ra mới hết chảy máu",
    ],
    question: "Câu 327: Chảy máu mũi do sinh vật sống chui vào mũi có các đặc điểm sau, NGOẠI TRỪ:",
  },
  {
    answers: ["a. Vòm khẩu cái cứng*", "b. Amidan khẩu cái", "c. Màn hầu", "d. Nền lưỡi"],
    question: "Câu 328: Mặt trước eo họng được bao vây bởi những bộ phận sau, NGOẠI TRỪ:",
  },
  {
    answers: [
      "a. Dị vật đường thở",
      "b. Viêm đường hô hấp trên",
      "c. Viêm thanh quản cấp",
      "d. Các câu trên đều có thể đúng*",
    ],
    question:
      "Câu 329: Một em bé 3 tuổi vào viện vì khó thở thanh quản, hỏi bệnh sử không rõ hội chứng “xâm nhập”, xảy ra đột ngột, những bệnh sau đây có thể nghĩ đến:",
  },
  {
    answers: ["a. Viêm mê nhĩ", "b. Viêm tai giữa*", "c. Vỡ xương đá", "d. Meniere"],
    question: "Câu 330: Nghe kém kèm theo triệu chứng chóng mặt không gặp trong bệnh sau:",
  },
  {
    answers: [
      "a. Viêm tai xương chũm cấp",
      "b. Áp xe amidan",
      "c. Viêm tắc xoang tĩnh mạch bên*",
      "d. Viêm tấy quanh amidan",
    ],
    question: "Câu 331: Bệnh sau đây dễ chẩn đoán lầm với bệnh sốt rét:",
  },
  {
    answers: ["a. 2 gò má không cân đối*", "b. Bầm tím gò má", "c. Sưng nề vùng mặt", "d. Chảy máu mũi"],
    question: "Câu 332: Dấu hiệu quan trọng chẩn đoán vỡ mặt trước xoang hàm là:",
  },
  {
    answers: [
      "a. Sụn phễu căng phồng",
      "b. Dây thanh thâm nhiễm",
      "c. Màn hầu sung huyết đỏ*",
      "d. Thanh thiệt phù nề",
    ],
    question: "Câu 333: Viêm thanh quản do lao có các đặc điểm sau, ngoại trừ:",
  },
  {
    answers: ["a. Dễ phạm loa vòi nhĩ", "b. Chảy máu nhiều", "c. Thời gian nạo lâu", "d. Dễ tái phát*"],
    question: "Câu 334: Hạn chế của phương pháp nạo V.A bằng thìa nạo Mource:",
  },
  {
    answers: ["a. Sau ốc tai*", "b. Màng nhĩ", "c. Ốc tai", "d. Hòm nhĩ"],
    question: "Câu 335: Phản xạ cơ bàn đạp xác định tổn thương ở:",
  },
  {
    answers: ["a. Xơ hóa hòm nhĩ", "b. Thính lực giảm nhiều", "c. Lõm nhĩ", "d. Viêm mê nhĩ*"],
    question: "Câu 336: Diễn tiến chủ yếu của viêm tai giữa mạn tính tiết nhầy, ngoại trừ:",
  },
  {
    answers: ["a. Hội chứng Franchesti", "b. Dò khí-thực quản*", "c. Sứt môi", "d. Tắc cửa mũi sau"],
    question: "Câu 337: Dị dạng sau đây nếu không xử trí kịp thời sẽ ảnh hưởng đến tính mạng của trẻ:",
  },
  {
    answers: ["a. Nội soi mũi xoang", "b. CT-scan mũi xoang*", "c. Blondeau", "d. Hirtz"],
    question:
      "Câu 338: Cận lâm sàng có giá trị nhất trong chẩn đoán viêm xoang mạn tính và giúp ích cho phẫu thuật là:",
  },
  {
    answers: ["a. Viêm tấy niêm mạc thực quản", "b. Áp xe thực quản", "c. Áp xe cạnh cổ", "d. Thủng thực quản*"],
    question: "Câu 339: Tràn khí dưới da vùng cổ trong dị vật thực quản gặp trong:",
  },
  {
    answers: ["a. Giảm thính lực", "b. Chóng mặt", "c. Cảm giác ù tai", "d. Đau nhói ở trong tai*"],
    question: "Câu 340: Triệu chứng chủ yếu nhất của viêm tai giữa cấp xuất tiết dịch thấm là:",
  },
  {
    answers: ["a. Mủ vàng, loãng", "b. Nhầy, trong, tanh", "c. Mủ bã đậu, thối*", "d. Nhầy, máu cá"],
    question: "Câu 341: Mủ trong viêm xoang hàm do răng có tính chất nào sau đây:",
  },
  {
    answers: [
      "a. Viêm thanh quản teo",
      "b. Papilom sừng hóa dây thanh*",
      "c. Viêm thanh quản quá phát",
      "d. Polype dây thanh",
    ],
    question: "Câu 342: Loại bệnh của thanh quản được coi như tiền ung thư là:",
  },
  {
    answers: [
      "a. Mổ dò khe mang",
      "b. Cắt amidan",
      "c. Phẫu thuật u nang giáp – móng",
      "d. Cắt thanh quản toàn phần *",
    ],
    question: "Câu 343: Phẫu thuật nào TMH có thể kết hợp với bác sĩ phẫu thuật tiêu hóa:",
  },
  {
    answers: [
      "a. Chụp phim Blondeau và sọ nghiêng ",
      "b. Sinh thiết qua nội soi làm giải phẫu bệnh*",
      "c. Miễn dịch huỳnh quang tìm tế bào ung thư",
      "d. Chụp CT-Scan sọ",
    ],
    question:
      "Câu 344: Thái độ xử trí đúng nhất là? Tình huống: Người bệnh nam, 55 tuổi có một hạch to ở sau góc hàm phải từ 2 tháng nay. Nghẹt mũi bên phải, thỉnh thoảng có khạc ra nhày lẫn máu. Hút sạch nhày và máu, đưa ống soi vào cửa mũi sau, thấy có 1 khối sùi to bít 1 phần cửa mũi sau",
  },
  {
    answers: ["a. Cửa sổ tròn", "b. Mặt xương đe", "c. Mặt trong của màng nhĩ", "d. Cửa sổ bầu dục*"],
    question: "Câu 345: Đế các xương bàn đạp áp sát vào:",
  },
  {
    answers: ["a. Khe mũi dưới", "b. Khe mũi trên", "c. Khe giữa", "d. Phức hợp lỗ thông khe*"],
    question: "Câu 346: Đơn vị cơ sở của quá trình viêm mũi xoang:",
  },
  {
    answers: [
      "a. Sốt cao, chảy mũi nhiều",
      "b. Chảy mủ tai",
      "c. Diễn tiến âm thầm, kín đáo, nghe kém*",
      "d. Đau tai đột ngột",
    ],
    question: "Câu 347: Triệu chứng chủ yếu trong viêm tai giữa cấp mủ do vi khuẩn bao gồm, NGOẠI TRỪ:",
  },
  {
    answers: ["a. Xuất tiết", "b. Mạn tính mủ có cholesteatoma*", "c. Mạn tính mủ", "d. Thanh dịch"],
    question: "Câu 348: Bệnh tích trong viêm tai giữa thể dễ gây áp xe não nhất là:",
  },
  {
    answers: ["a. Lệch vách ngăn", "b. Viêm mũi xoang", "c. U xơ vòm mũi họng*", "d. Polyp mũi xoang"],
    question: "Câu 349: Trong số các bệnh sau, bệnh nào gây nghẹt mũi và chảy mũi:",
  },
  {
    answers: ["a. Các hóa chất kích thích", "b. Dị ứng", "c. Siêu vi trùng*", "d. Vi khuẩn"],
    question: "Câu 350: Nguyên nhân thường gây viêm mũi cấp là:",
  },
  {
    answers: ["a. Dùng kháng sinh", "b. Rỏ thuốc co mạch*", "c. Dùng kháng viêm", "d. Rỏ nước muối sinh lý"],
    question: "Câu 351: Điều không nên làm đối với viêm mũi cấp ở trẻ dưới 2 tuổi là:",
  },
  {
    answers: ["a. Amidan to", "b.Amidan có giả mạc", "c. Bề mặt amidan có hốc mủ", "d.Amidan sung huyết, đỏ*"],
    question: "Câu 352:Triệu chứng thực thể chủ yếu của viêm amidan cấp:",
  },
  {
    answers: ["a. Hạ họng.", "b. Tất cả điều đúng.", "c. Họng mũi.", "d. Họng miệng.*"],
    question: "Câu 353: Viêm họng chỉ là viêm ở vùng:",
  },
  {
    answers: ["a. ¼ sau – trên*", "b. ¼ trước – trên", "c. ¼ sau – dưới", "d. ¼ trước – dưới"],
    question: "Câu 354: Chích rạch màng nhĩ không được thực hiện ở vị trí:",
  },
  {
    answers: ["a. Màng natrice", "b. Có chất cholesterin*", "c. Hình ảnh trên X quang tai", "d. Óng ánh như xà cừ"],
    question: "Câu 355: Chẩn đoán chính xác có hiện diện Cholesteatoma:",
  },
  {
    answers: ["a. Viêm thanh quản.", "b. Viêm tai giữa.", "c. Các biến chứng trên.*", "d. Rối loạn tiêu hóa."],
    question: "Câu 356: Biến chứng của viêm V.A mạn tính:",
  },
  {
    answers: [
      "a. Rách màng phổi vùng đỉnh",
      "b. Khí từ khí quản thoát ra*",
      "c. Vết mổ may kín",
      "d. Ống canuyn không có lổ lủng",
    ],
    question: "Câu 357: Tràn khí dưới da là do:",
  },
  {
    answers: [
      "a. Dẫn truyền âm thanh theo cơ chế đòn bẩy*",
      "b. Chuyển âm thanh từ dạng sóng âm sang sóng cơ học",
      "c. Biên độ rung nhỏ nhưng lực rung lớn",
      "d. Hoạt động như là một máy cộng hưởng",
    ],
    question: "Câu 358: Chức năng dẫn truyền âm thanh bao gồm các tác dụng sau, NGOẠI TRỪ:",
  },
  {
    answers: [
      "a. Tìm cách làm chết con cá",
      "b. Đẩy con cá xuống họng theo đường mũi",
      "c. Kết hợp kéo đầu qua đường miệng ",
      "d. Kéo từ đằng đuôi qua mũi*",
    ],
    question: "Câu 359: Khi một con cá rô chui vào nóc vòm, không nên:",
  },
  {
    answers: ["a. Sụp mi", "b. Mắt lồi", "c. Chảy máu mũi", "d. Nuốt sặc*"],
    question: "Câu 360: Dấu hiệu rõ chứng tỏ ung thư vòm ở giai đoạn IV:",
  },
  {
    answers: ["a. Nhiễm trùng huyết", "b. Viêm thị thần kinh hậu nhãn cầu*", "c. Biến chứng nội sọ", "d. Viêm cốt tủy"],
    question: "Câu 361: Biến chứng nguy hiểm và thường gặp nhất của viêm xoang sau mạn tính là:",
  },
  {
    answers: [
      "a. Chống rối loạn thăng bằng kiềm toan",
      "b. Hút đàm nhớt được dễ dàng",
      "c. Làm giảm khoảng chết",
      "d. Khai thông đường thở, tái lập quá trình hô hấp*",
    ],
    question: "Câu 362: Mục đích quan trọng nhất của mở khí quản là:",
  },
  {
    answers: ["a. Vỡ xương đá*", "b. Trật khớp đe đạp", "c. Rách màng nhĩ", "d. Vỡ xương ống tai"],
    question: "Câu 363: Trong tổn thương tai có nghe kém 1 bên kèm chóng mặt nghĩ đến:",
  },
  {
    answers: ["a. Viêm màng não", "b. Thoát vị não", "c. Áp xe não*", "d. Chảy dịch não tủy qua mũi"],
    question: "Câu 364: Biến chứng của chấn thương vỡ xương thái dương bao gồm, ngoại trừ:",
  },
  {
    answers: [
      "a. Rối loạn xương cuốn.",
      "b. Giãn mạch",
      "c. Dị sản biểu mô",
      "d. Hệ thống lông chuyển hoạt động gần như bình thường.",
    ],
    question: "Câu 365: Niêm mạc trong viêm mũi teo có các đặc điểm sau, ngoại trừ:",
  },
  {
    answers: ["a. Sàng hàm", "b. Vòm mũi họng*", "c. Phế quản", "d. Họng thanh quản"],
    question: "Câu 366: Ở Việt Nam loại ung thư đường hô hấp trên thường gặp nhất là:",
  },
  {
    answers: ["a. Lậu", "b. Sởi", "c. Bạch hầu", "d. Virus cúm*"],
    question: "Câu 367: Nguyên nhân thường gặp nhất của viêm mũi cấp ở trẻ em là do:",
  },
  {
    answers: ["a. Đèn khám đủ sáng", "b. Đặt thuốc co mạch", "c. Xì hoặc hút sạch nhầy mũi*", "d. Banh mũi thích hợp"],
    question: "Câu 368: Khám mũi bằng đèn Clar, để quan sát kỹ hốc mũi đầu tiên cần phải:",
  },
  {
    answers: ["a. Virus.*", "b. Viêm họng mũi cấp.", "c. Cúm.", "d. GABHS."],
    question: "Câu 369: Loại viêm họng nào có thể gây thấp khớp ở trẻ em:",
  },
  {
    answers: ["a. Sờ vòm", "b. Nội soi vòm*", "c. Soi gián tiếp cửa mũi sau", "d. Triệu chứng cơ năng nghẹt mũi"],
    question: "Câu 370: Chẩn đoán chính xác V.A dựa vào:",
  },
  {
    answers: ["a. Dị vật tai*", "b. Eczema da ống tai bội nhiễm", "c. Polype ống tai", "d. Nút ráy tai"],
    question: "Câu 371: Ở trẻ em nghe kém 1 bên kèm chảy dịch đục thường gặp nhất là:",
  },
  {
    answers: ["a. Vỡ ổ áp xe vào não thất", "b. Tụt kẹt hạnh nhân tiểu não*", "c. Động kinh", "d. Suy kiệt"],
    question: "Câu 372: Nguy cơ có thể làm người bệnh chết đột ngột trong biến chứng áp xe não là:",
  },
  {
    answers: ["a. Khó thở*", "b. Ho kích thích", "c. Nuốt đau", "d. Khàn tiếng"],
    question: "Câu 373: Triệu chứng viêm thanh quản cấp nổi bật nhất ở trẻ em là:",
  },
  {
    answers: ["a. Viêm tai giữa", "b. Xốp xơ tai", "c. Bệnh Meniere*", "d. Tắc vòi nhĩ"],
    question: "Câu 374: Nghe kém do tai giữa không bao gồm:",
  },
  {
    answers: ["a. Quá phát mỏm móc", "b. Quá phát cuốn dưới", "c. Vẹo vách ngăn", "d. Bất thường cuốn giữa*"],
    question: "Câu 375:",
  },
  {
    answers: ["a. Bệnh phổi mạn tính", "b. Bệnh lý mạch vành*", "c. Polype mũi", "d. Quá phát cuốn mũi"],
    question: "Câu 376: Thuốc rỏ mũi làm thông mũi tác dụng kéo dài cần thận trong trong trường hợp sau:",
  },
  {
    answers: [
      "a. Kháng sinh + kháng kỵ khí",
      "b. Kháng viêm",
      "c. Chữa hoặc nhổ răng gây bệnh*",
      "d. Rửa xoang hàm bị viêm",
    ],
    question: "Câu 377: Phương pháp điều trị triệt để trong viêm xoang hàm do răng là:",
  },
  {
    answers: [
      "a. Cắt thanh quản toàn phần",
      "b. Cắt thanh quản có chọn lựa và nạo vét hạch cổ*",
      "c. Cắt thanh quản bán phần",
      "d. Cắt trọn khối u",
    ],
    question: "Câu 378: Trong phẫu thuật ung thư thanh quản, nội dung chủ yếu là:",
  },
  {
    answers: ["a. Vệ sinh môi trường", "b. Không để béo phì*", "c. Dinh dưỡng", "d. Tiêm ngừa định kỳ"],
    question: "Câu 379: Dự phòng viêm V.A bao gồm các nội dung sau, ngoại trừ:",
  },
  {
    answers: [
      "a. Ô nhiễm môi trường",
      "b. Thay đổi thời tiết, giao mùa",
      "c. Các yếu tố trên*",
      "d. Sức đề kháng cơ thể yếu",
    ],
    question: "Câu 380:Các yếu tố thuận lợi của viêm amidan:",
  },
  {
    answers: ["a. Mất một phần vành tai", "b. Nhiễm trùng da vành tai", "c. Mất da vành tai", "d. Viêm sụn vành tai*"],
    question: "Câu 381: Vết thương rách vành tai, biến chứng đáng sợ nhất là:",
  },
  {
    answers: [
      "a. Trùng các cơ căng*",
      "b. Làm giảm dẫn truyền âm thanh",
      "c. Cơ căng màng nhĩ co lại",
      "d. Cơ bàn đạp màng nhĩ co lại",
    ],
    question: "Câu 382: Phản xạ nhĩ làm màng cửa sổ bầu dục không bị rung quá mức là do, NGOẠI TRỪ:",
  },
  {
    answers: [
      "a. Nhĩ lõm với mấu ngắn, xương búa nhô ra ngoài",
      "b. Màng nhĩ phồng, cán búa có xu hướng nằm ngang*",
      "c. Mạch máu chạy dọc theo cán búa từ trên xuống dưới",
      "d. Có nước trong hòm nhĩ ngang tầm với rốn nhĩ",
    ],
    question: "Câu 383: Dấu hiệu thực thể khi khám màng nhĩ trong viêm tai giữa cấp xuất tiết, NGOẠI TRỪ:",
  },
  {
    answers: [
      "a. Xơ dầy màng nhĩ",
      "b. Xơ cứng khớp búa đe",
      "c. Xơ cứng bàn đạp – cửa sổ bầu dục* ",
      "d. Xơ cứng khớp đe đạp",
    ],
    question: "Câu 384: Điếc trong bệnh xốp xơ tai tổn thương chủ yếu ở:",
  },
  {
    answers: ["a. Nghe", "b. Phát âm", "c. Nuốt*", "d. Thở"],
    question: "Câu 385: Vai trò quan trọng nhất của họng là:",
  },
  {
    answers: [
      "a. Thở nhanh co kéo cánh mũi",
      "b. Khó thở chậm thì hít vào*",
      "c. Khó thở chậm thì thở ra",
      "d. Khó thở cả 2 thì",
    ],
    question: "Câu 386: Đặc điểm chính chẩn đoán khó thở thanh quản là:",
  },
  {
    answers: ["a. Khó nuốt", "b. Nuốt đau", "c. Nhạy cảm với xạ trị", "d. Khàn tiếng*"],
    question: "Câu 387: Ung thư mặt sau sụn nhẫn dấu hiệu chủ yếu, ngoại trừ:",
  },
  {
    answers: ["a. Ngoài", "b. Giữa", "c. Nội mạch*", "d. Thanh mạc"],
    question: "Câu 388: Lớp của mạch máu đóng vai trò quan trọng trong điều hòa cầm máu sơ khởi là lớp:",
  },
  {
    answers: ["a. Cao huyết áp*", "b. U nhú hốc mũi", "c. Ung thư máu", "d. Chấn thương"],
    question: "Câu 389: Chảy máu mũi ở người già nguyên nhân thường gặp nhất là do:",
  },
  {
    answers: ["a. Nghe kém", "b. Ù tai", "c. Chóng mặt", "d. Đau tai*"],
    question: "Câu 390: Triệu chứng sau không thuộc bệnh Meniere:",
  },
  {
    answers: ["a. Dưới cơ nhị thân*", "b. Hố trên đòn", "c. Dưới hàm", "d. Cảnh"],
    question: "Câu 391: Di căn trong ung thư thanh quản thường ở nhóm hạch là:",
  },
  {
    answers: [
      "a. Đến tuổi dậy thì, sau đó thoái hóa",
      "b. 3-6 tuổi, thoái hóa khi lớn",
      "c. 1-3 tuổi, đến tuổi trưởng thành thì thoái hóa",
      "d. 3 năm đầu, sau đó phát triển chậm lại, thoái hóa ở tuổi dậy thì*",
    ],
    question: "Câu 392: V.A phát triển mạnh vào khoảng tuổi:",
  },
  {
    answers: ["a. Xuất tiết.", "b. Mất mùi.*", "c. Có giả mạc ở mũi trước.", "d. Dễ lây nhiễm."],
    question: "Câu 393: Bạch hầu ở mũi có các đặc điểm sau, ngoại trừ:",
  },
  {
    answers: ["a. Các ống bán khuyên", "b. Tiền đình", "c. Thần kinh số VIII", "d. Cửa sổ bầu dục*"],
    question: "Câu 394: Tai trong bao gồm các thành phần sau, NGOẠI TRỪ:",
  },
  {
    answers: ["a. Tất cả đều đúng*", "b. Penicilin liều cao kéo dài", "c. Theo dõi biến chứng", "d. Vitamin C"],
    question: "Câu 395: Điều trị đúng nhất viêm họng do liên cầu:",
  },
  {
    answers: ["a. Sỏi amidan", "b. Viêm tấy quanh amidan", "c. Viêm xoang*", "d. Áp xe amidan"],
    question: "Câu 396: Viêm amidan có các biến chứng tại chỗ sau, NGOẠI TRỪ:",
  },
  { answers: ["a. Nóc vòm*", "b. Hạ họng", "c. Miệng thực quản", "d. Xoang lê"], question: "Câu 397:" },
  {
    answers: ["a. Các bệnh trên*", "b. Meniere", "c. Rối loạn mạch máu tai trong", "d. Vỡ xương đá"],
    question: "Câu 398: Bệnh nào có thể gây điếc đột ngột:",
  },
  {
    answers: ["a. Đáy lưỡi", "b. Thành sau trên vòm*", "c. Thành sau họng", "d. Thành bên"],
    question: "Câu 399: V.A là mô tân bào nằm ở:",
  },
  {
    answers: ["a. Siêu vi trùng*", "b. S.pneumococcus", "c. Haemophilus", "d. Liên cầu tan huyết beta nhóm A"],
    question: "Câu 400: Nguyên nhân chủ yếu gây viêm thanh quản cấp ở trẻ em là:",
  },
  {
    answers: ["a. U nhầy xoang trán", "b. Viêm xoang cấp", "c. Viêm xoang sàng xuất ngoại *", "d. Ung thư sàng hàm"],
    question: "Câu 401: Bệnh TMH dễ nhầm với viêm túi lệ:",
  },
  {
    answers: ["a. Bệnh Meniere*", "b. Tổn thương nhân thính giác ở thân não", "c. U góc cầu tiểu não", "d. U dây VIII"],
    question: "Câu 402: Nghe kém sau ốc tai không bao gồm:",
  },
  {
    answers: ["a. Miệng thực quản", "b. Đoạn hẹp thực quản", "c. Cung răng trên*", "d. Các câu trên đều đúng"],
    question: "Câu 403: Trong quá trình soi thực quản lấy dị vật người thầy thuốc thường nói dị vật ở khoảng cách:",
  },
  {
    answers: ["a. Liệt màng hầu-lưỡi gà.*", "b. Viêm đa rễ thần kinh.", "c. Liệt mặt.", "d. Liệt các cơ vận nhãn."],
    question: "Câu 404: Biến chứng thần kinh xuất hiện sớm trong bạch hầu họng là:",
  },
  {
    answers: ["a. Sàn sọ trước nghiêng.*", "b. Sọ thẳng.", "c. Blondeau.", "d. Hirtz."],
    question: "Câu 405: Chụp Xquang kinh điển tư thế nào có thể thấy được bóng V.A :",
  },
  {
    answers: ["a. Nuốt sặc", "b. Nuốt khó", "c. Các triệu chứng trên *", "d. Chảy nước miếng"],
    question: "Câu 406: Triệu chứng chủ yếu khi bị liệt các dây thần kinh IX, X, XI:",
  },
  {
    answers: ["a. 25-30%.", "b. 30%.", "c. 15-30%.*", "d. 20-30%."],
    question: "Câu 407: Viêm họng cấp do liên cầu ở trẻ em chiếm:",
  },
  {
    answers: ["a. U ống tai ngoài", "b. Chấn thương tai ngoài", "c. Dị vật ống tai ngoài", "d. Viêm ống tai ngoài*"],
    question: "Câu 408: Bệnh tích tai ngoài gây nghe kém, chóng mặt:",
  },
  {
    answers: [
      "a. Nghe kém lúc đã biết nói",
      "b. Nghe kém lúc chưa biết nói*",
      "c. Tổn thương cơ quan thính giác trong thời kỳ bào thai",
      "d. Các câu trên đều sai",
    ],
    question: "Câu 409: Được gọi là nghe kém bẩm sinh mắc phải khi:",
  },
  {
    answers: [
      "a. Mủ chảy ra thối khắm",
      "b. Chảy mủ tai + đau nhức tai*",
      "c. Giảm thính lực nhiều",
      "d. Chảy mủ tai nhiều hơn",
    ],
    question:
      "Câu 410: Trường hợp viêm tai xương chũm cần phải chuyển đến cơ sở y tế chuyên khoa càng nhanh càng tốt là:",
  },
  {
    answers: ["a. Đầu cuốn giữa", "b. Lưng cuốn dưới", "c. Lưng cuốn giữa", "d. Đầu cuốn dưới*"],
    question: "Câu 411: Vùng nào của mũi có thể điều chỉnh lưu lượng không khí:",
  },
  {
    answers: [
      "a. Soi thanh khí phế quản sau đó 1 vài ngày",
      "b. Cho thở oxy",
      "c. Dùng kháng sinh và kháng viêm liều cao",
      "d. Cần soi thanh khí phế quản ngay, dùng kháng sinh*",
    ],
    question:
      "Câu 412: Bé 2 tuổi bị sặc thức ăn ngày thứ 3 vào viện trong tình trạng khó thở cả 2 thì, sốt và ho nhiều. Thái độ xử trí không nên làm là:",
  },
  {
    answers: ["a. Tê tại chỗ", "b. Mê tĩnh mạch", "c. Mê nội khí quản*", "d. Xịt tê họng"],
    question: "Câu 413: Phương pháp vô cảm trong cắt amidan phù hợp nhất:",
  },
  {
    answers: ["a. Các phương pháp trên*", "b. Rửa mũi", "c. Xông mũi", "d. Thông mũi"],
    question: "Câu 414: Ngày nay, điều trị viêm mũi xoang cấp tại chỗ thường dùng:",
  },
  {
    answers: ["a. Khó thở", "b. Ho kích thích nhiều khi nằm", "c. Nuốt sặc", "d. Hội chứng “xâm nhập”*"],
    question: "Câu 415: Dấu hiệu nghĩ đến dị vật có thể rớt vào đường thở:",
  },
  {
    answers: ["a. Đau tai nhiều", "b. Chảy máu tai*", "c. Chóng mặt", "d. Điếc nhiều"],
    question: "Câu 416: Triệu chứng sau chứng tỏ ung thư vòm xâm lấn vào tai giai đoạn muộn:",
  },
  {
    answers: [
      "a. Có hạch",
      "b. Thường gặp ở người lớn tuổi*",
      "c. Triệu chứng toàn thân không ảnh hưởng nhiều",
      "d. Vết loét hoại tử ở cực trên Amidan ",
    ],
    question: "Câu 417:",
  },
  {
    answers: [
      "a. Phản xạ họng",
      "b. Phản xạ niêm mạc mũi",
      "c. Phản xạ nuốt",
      "d. Phản xạ co thắt bảo vệ đường thở của thanh quản*",
    ],
    question: "Câu 418: Hội chứng “xâm nhập” trong dị vật đường thở là do:",
  },
  {
    answers: ["a. Khe giữa*", "b. Khe dưới", "c. Khe trên", "d. Thành sau họng"],
    question: "Câu 419: Viêm xoang hàm dịch thường đổ vào:",
  },
  {
    answers: ["a. Tất cả đều sai", "b. Osler", "c. Kristen", "d. Waldeyer*"],
    question: "Câu 420: V.A thuộc hệ thống vòng:",
  },
  {
    answers: ["a. Mủ thối", "b. Sốt- đau tai*", "c. Chảy mủ tai nhiều", "d. Nghe kém hơn"],
    question: "Câu 421: Viêm tai mạn tính có dấu hiệu sau; chứng tỏ có biến chứng:",
  },
  {
    answers: [
      "a. Tổn thương sụn giáp",
      "b. Tổn thương mạch máu",
      "c. Tổn thương cột sống cổ*",
      "d. Tổn thương tuyến giáp và mô mềm",
    ],
    question: "Câu 422: Trong quá trình thăm khám và xử lý chấn thương thanh quản, cần loại trừ tổn thương sau:",
  },
  {
    answers: [
      "a. Sào bào thường nhĩ",
      "b. Vá nhĩ đơn thuần*",
      "c. Khoét rỗng đá chũm toàn phần",
      "d. Khoét rộng đá chũm bán phần",
    ],
    question:
      "Câu 423: Các phương pháp phẫu thuật nào sau được áp dụng trong viêm tai giữa mạn tính có cholesteatoma, NGOẠI TRỪ:",
  },
  {
    answers: ["a. Thực quản ngực", "b. Thực quản cổ*", "c. Tâm vị", "d. Eo cơ hoành"],
    question: "Câu 424: Dị vật thực quản thường mắc ở:",
  },
  {
    answers: ["a. 3", "b. 4", "c. 2*", "d. 5"],
    question: "Câu 425: Mặt sau họng miệng tương ứng với đốt sống cổ thứ:",
  },
  {
    answers: [
      "a. Sự trao đổi khí giữa phế nang và khí trời",
      "b. Sự trao đổi khí giữa dịch ngoại bào và nội mô*",
      "c. Sự trao đổi khí giữa phế nang và máu tại phổi",
      "d. Sự vận chuyển khí giữa phổi và mô",
    ],
    question: "Câu 426: Hô hấp ngoại bao gồm các quá trình sau, NGOẠI TRỪ:",
  },
  {
    answers: ["a. Sau 6 tuổi*", "b. Sau 12 tuổi", "c. Sau 3 tuổi", "d. Sau 9 tuổi"],
    question: "Câu 427: Chức năng miễn dịch của amidan chủ yếu là từ lứa tuổi:",
  },
  {
    answers: [
      "a. V.A làm chức năng miễn dịch.*",
      "b. V.A viêm gây quá phát.",
      "c. Từ 12 tháng tuổi đến 3 tuổi trẻ đều phải bị viêm V.A.",
      "d. V.A dễ bị viêm.",
    ],
    question: "Câu 428: Chọn câu đúng nhất:",
  },
  {
    answers: ["a. Dây IV", "b. Dây V", "c. Dây VII", "d. Dây VI*"],
    question: "Câu 429: Dấu hiệu nhìn đôi do liệt dây:",
  },
  {
    answers: [
      "a. Màng nhĩ bị rách do tiếng nổ, gây tổn thương mê nhĩ kèm theo*",
      "b. Vật nhọn làm rách màng nhĩ",
      "c. Màng nhĩ bị rách cuộn mép",
      "d. Màng nhĩ bị rách rộng",
    ],
    question: "Câu 430: Điếc hỗn hợp sau rách màng nhĩ thường do:",
  },
  {
    answers: ["a. Hố nanh*", "b. Quanh hốc mắt", "c. Góc trong hốc mắt", "d. Góc trong cung mày"],
    question: "Câu 431: Trong viêm xoang hàm cấp điểm đau thường ở vị trí nào:",
  },
  {
    answers: ["a. Nhìn đôi*", "b. Hốc mắt lõm", "c. Rối loạn cảm giác vùng má", "d. Trục nhìn của mắt hạ xuống"],
    question: "Câu 432: Dấu hiệu chắc chắn vỡ sàn hốc mắt kèm gãy cung gò má:",
  },
  {
    answers: ["a. Khe mũi trên", "b. Cửa mũi sau", "c. Khe mũi giữa*", "d. Sàn mũi"],
    question: "Câu 433: Viêm nhóm xoang trước mạn tính, mủ thường đọng ở vị trí nào:",
  },
  {
    answers: ["a. Siêu vi*", "b. Sức đề kháng kém", "c. Cơ địa", "d. Vi khuẩn thường trú vùng họng"],
    question: "Câu 434: Nguyên nhân viêm họng cấp có tỉ lệ cao do:",
  },
  {
    answers: ["a. Soan nang", "b. Nội dịch và ngoại dịch", "c. Các ống bán khuyên", "d. Ốc tai xương*"],
    question: "Câu 435: Mê đạo màng bao gồm các cấu trúc sau, NGOẠI TRỪ:",
  },
  {
    answers: [
      "a. Nạo V.A",
      "b. Kháng histamin",
      "c. Đặt ống thông khí",
      "d. Tái lập sự di động của hệ thống truyền âm*",
    ],
    question: "Câu 436: Điều trị chủ yếu của viêm tai giữa xuất tiết xơ nhĩ:",
  },
  {
    answers: [
      "a. Gởi tuyến trên",
      "b. Dùng pence lấy xương ra*",
      "c. Kích thích làm cho người bệnh ói",
      "d. Dùng kháng sinh",
    ],
    question: "Câu 437: Thái độ xử trí đúng nhất ở tuyến xã khi người bệnh bị 1 xương cá đâm vào hố amidan:",
  },
  {
    answers: [
      "a. Hạch sau góc hàm biến mất",
      "b. Các yếu tố trên*",
      "c. Hiệu giá kháng thể kháng EBV",
      "d. Kết quả nội soi",
    ],
    question: "Câu 438: Đánh giá tiên lượng quá trình điều trị ung thư vòm căn cứ vào:",
  },
  {
    answers: [
      "a. EBV liên quan đến ung thư vòm họng",
      "b. Chẩn đoán xác định ung thư vòm họng khi có kháng thể kháng EBV trong huyết thanh*",
      "c. Hiệu giá kháng thể IgA/VCA có giá trị trong ung thư vòm tái phát",
      "d. EBV có liên quan đến một số khối u khác.",
    ],
    question: "Câu 439: Chọn 1 ý sai trong các câu sau đây:",
  },
  {
    answers: ["a. Hirtz", "b. Schuller*", "c. Sọ nghiêng", "d. Blondeau"],
    question: "Câu 440: Tư thế X-quang nào chẩn đoán các khối u vùng vòm, ngoại trừ:",
  },
  {
    answers: ["a. Cuốn giữa", "b. Cuốn trên", "c. Khe giữa", "d. Khe trên*"],
    question: "Câu 441: Móc quan trọng để xác định lỗ thông xoang bướm:",
  },
  {
    answers: ["a. Nghèo nàn", "b. Ồ ạt*", "c. Ít khi được phát hiện", "d. Triệu chứng của vòm mũi họng là chủ yếu"],
    question: "Câu 442: Viêm tai giữa cấp xung huyết bao gồm các triệu chứng sau, NGOẠI TRỪ:",
  },
  {
    answers: ["a. X", "b. IX", "c. XI", "d. Các dây trên*"],
    question: "Câu 443: Mỏm trâm dài có thể gây kích thích dây thần kinh:",
  },
  {
    answers: ["a. Ho", "b. Nuốt vướng", "c. Nghẹt mũi", "d. Nuốt đau*"],
    question: "Câu 444:Triệu chứng cơ năng chủ yếu của viêm amidan cấp:",
  },
  {
    answers: [
      "a. Một số hóa chất trung gian",
      "b. Rối loạn chức năng vòi Eustachi*",
      "c. Dị ứng",
      "d. Rối loạn hoạt động lông chuyển",
    ],
    question: "Câu 445: Nguyên nhân quan trọng nhất gây viêm tai giữa cấp ở trẻ em là:",
  },
  {
    answers: ["a. Soi khí quản kiểm tra*", "b. Cho xuất viện", "c. Tiếp tục theo dõi", "d. Tiếp tục dùng kháng sinh"],
    question:
      "Câu 446: Sau một đợt điều trị 5 ngày bé không sốt, thỉnh thoảng có khó thở khi gắng sức, nghe phổi rì rào phế nang một bên có lẫn rales rít. Xquang tim phổi, rốn phổi 2 bên đậm. Thái độ điều trị sẽ là:",
  },
  {
    answers: ["a. 2 amidan phù nề.*", "b. Toàn bộ niêm mạc họng đỏ.", "c. Tất cả đều đúng.", "d. Họng sung huyết."],
    question: "Câu 447: Triệu chứng tại chỗ chủ yếu của viêm họng đỏ thông thường là:",
  },
  {
    answers: ["a. Vòi nhĩ", "b. Ốc tai", "c. Xương chũm", "d. Hệ thống xương con*"],
    question: "Câu 448: Thành phần sau đây không thuộc về tai giữa:",
  },
  {
    answers: ["a. Nấm họng*", "b. Nấm tai", "c. Viêm mũi xoang tiến triển", "d. Nấm thanh quản"],
    question: "Câu 449: Bệnh cơ hội ở cơ quan tai mũi họng trong bệnh AIDS thường gặp là:",
  },
  {
    answers: ["a. Tuổi", "b. Viêm amidan kèm theo", "c. Vòm hầu rộng", "d. Vòm hầu hẹp*"],
    question: "Câu 450:# Triệu chứng nghẹt mũi thường xuyên của V.A quá phát thay đổi tùy thuộc vào:",
  },
  {
    answers: ["a. 1 bên amidan to sùi*", "b. có giả mạc trắng", "c.có sỏi ở bề mặt amidan", "d. amidan quá phát"],
    question: "Câu 451: Cần lưu ý khi khám amidn viêm mạn tính thấy:",
  },
  {
    answers: ["a. Nuốt đau", "b. Giả mạc màu xám*", "c. Sưng hạch sau góc hàm", "d. Họng đỏ bựa trắng"],
    question: "Câu 452: Dấu hiệu sau không thuộc viêm họng do liên cầu:",
  },
  {
    answers: ["a. Viêm mũi họng", "b. Yếu tố cơ học*", "c. Dị ứng", "d. U vòm mũi họng"],
    question: "Câu 453: Viêm tai giữa cấp xuất tiết dịch thấm nguyên nhân chủ yếu là:",
  },
  {
    answers: [
      "a. Nội soi hạ họng thanh quản",
      "b. Chụp X quang thanh quản thẳng",
      "c. CT-Scan",
      "d. Xét nghiệm tế bào học*",
    ],
    question:
      "Câu 454: Cận lâm sàng giúp ích nhất cho chẩn đoán là? Tình huống: Bệnh nhân nam 60 tuổi, 6 tháng nay thấy bướu cổ bên (T) nổi nhiều hạch rắn không đau. 3 tháng nay thường ngứa cổ, ho từng cơn, khó thở nặng dần, 10 ngày trở lại đây thấy có sự thay đổi giọng nói: ",
  },
  {
    answers: [
      "a. Viêm họng đỏ do virus APC.",
      "b. Viêm họng cúm.*",
      "c. Viêm họng đỏ do vi khuẩn.",
      "d. Viêm họng mũi ở trẻ em.",
    ],
    question: "Câu 455: Ở trẻ lớn, thể lâm sàng hay gặp nhất trong viêm họng đỏ:",
  },
  {
    answers: ["a. Dị vật đường thở", "b. Viêm Amiđan", "c. Viêm tai giữa", "d. Viêm V.A*"],
    question: "Câu 456: Một bệnh tai mũi họng liên quan nhiều đến chuyên khoa nhi:",
  },
  {
    answers: ["a. Cao, liên tục", "b. Cao, kèm lạnh run*", "c. Cao, có chu kỳ", "d. Vừa, kéo dài"],
    question: "Câu 457: Sốt điển hình trong viêm tĩnh mạch bên do tai là:",
  },
  {
    answers: [
      "a. Các vị trí trên",
      "b. Chảy máu đầu cuốn dưới",
      "c. Chảy máu điểm mạch",
      "d. Chảy máu chủ yếu cửa mũi sau*",
    ],
    question: "Câu 458: Thắt động mạch hàm trong trong trường hợp:",
  },
  {
    answers: ["a. Xương hàm trên", "b. Xương trán", "c. Xương hàm dưới", "d. Xương gò má*"],
    question: "Câu 459: Xương nào vùng mặt dễ bị gãy nhất:",
  },
  {
    answers: [
      "a. Dấu chèn ép thần kinh sọ*",
      "b. Khối u lấp cửa mũi sau",
      "c. Hạch sau góc hàm",
      "d. Chảy máu nhày có lẫn máu",
    ],
    question:
      "Câu 460: Dựa vào dấu hiệu lâm sàng nào sau đây để xếp loại giai đoạn ung thư nêu trên? Tình huống: Người bệnh nam, 55 tuổi có một hạch to ở sau góc hàm phải từ 2 tháng nay. Nghẹt mũi bên phải, thỉnh thoảng có khạc ra nhày lẫn máu. Hút sạch nhày và máu, đưa ống soi vào cửa mũi sau, thấy có 1 khối sùi to bít 1 phần cửa mũi sau",
  },
  {
    answers: [
      "a. Vệ sinh môi trường sống",
      "b. Điều trị triệt để nhiễm trùng mũi họng*",
      "c. Sử dụng nguồn nước sạch",
      "d. Chống suy dinh dưỡng",
    ],
    question: "Câu 461: Dự phòng tốt nhất đối với viêm tai giữa cấp là:",
  },
  {
    answers: ["a. Đau rát họng.", "b. Triệu chứng của nhiễm siêu vi.", "c. Nhức đầu.", "d. Sốt cao.*"],
    question: "Câu 462: Triệu chứng chủ yếu của viêm họng đỏ thông thường:",
  },
  {
    answers: ["a. Thủng động mạch", "b. Viêm tấy niêm mạc thực quản*", "c. Tràn khí màng phổi", "d. Viêm trung thất"],
    question: "Câu 463: Biến chứng thường gặp nhất của dị vật đường ăn là:",
  },
  {
    answers: [
      "a. Khó thở ra, thở chậm",
      "b. Cánh mũi phập phồng",
      "c. Khó thở vào, thở chậm*",
      "d. Kèm theo có rale ngáy, rale rít",
    ],
    question: "Câu 464: Kiểu khó thở do hen suyễn bao gồm các triệu chứng sau, NGOẠI TRỪ:",
  },
  {
    answers: ["a. Blondeau", "b. Sọ nghiêng", "c. Hirtz", "d. CT-Scan*"],
    question: "Câu 465: Phương pháp cận lâm sàng giúp ích nhất cho chẩn đoán và tiên lượng ung thư vòm là:",
  },
  {
    answers: ["a. Lao tai", "b. U tuyến mang tai", "c. Viêm mê nhĩ*", "d. Zonna tai"],
    question: "Câu 466: Các bệnh sau đây, có thể gây liệt mặt ngoại biên, ngoại trừ:",
  },
  {
    answers: [
      "a. Chấn thương sàn sọ trước",
      "b. Chấn thương sọ não*",
      "c. Chấn thương xoang trán kín hay hở ",
      "d. Tình trạng chảy máu",
    ],
    question:
      "Câu 467: Trong xử trí cấp cứu chấn thương xoang trán, ngoài xác định tình trạng khó thở, người thầy thuốc cần xác định tổn thương:",
  },
  {
    answers: ["a. Mọi lứa tuổi", "b. Trẻ 6-10 tuổi", "c. Trẻ lớn và người lớn", "d. Trẻ dưới 5 tuổi*"],
    question: "Câu 468: Viêm họng có thể gặp ở:",
  },
  {
    answers: ["a. Trật khớp thái dương hàm", "b. Lệch khớp cắn*", "c. Răng mọc lạc chỗ", "d. Sâu răng"],
    question: "Câu 469: Bệnh nào thuộc chuyên khoa Răng hàm mặt có thể làm cho người bệnh nhức đầu, ù tai:",
  },
  {
    answers: ["a. Nội soi", "b. Trực tiếp", "c. Gián tiếp qua gương", "d. Video*"],
    question: "Câu 470: Để đánh giá tốt sự rung động của thanh quản, cần phải soi thanh quản:",
  },
  {
    answers: ["a. Điếc hỗn hợp*", "b. Ngộ độc tai trong do thuốc", "c. Rối loạn nhiễm sắc thể", "d. Nhiễm vius"],
    question: "Câu 471: Nghe kém do tổn thương trước lúc sinh thường là, NGOẠI TRỪ:",
  },
  {
    answers: ["a. Đứt tay lâu cầm*", "b. Rong kinh", "c. Có tiền sử chảy máu mũi", "d. Băng huyết sau sanh"],
    question: "Câu 472: Chảy máu mũi do rối loạn đông máu, khai thác bệnh sử cần hỏi:",
  },
  {
    answers: [
      "a. Đau sau tai",
      "b. Đau tai khi kéo vành tai lên trên và ra sau",
      "c. Đau kèm ù tai",
      "d. Đau sâu trong tai",
    ],
    question: "Câu 473: Đặc điểm triệu chứng đầu trong viêm tai giữa cấp tính mủ:",
  },
  {
    answers: [
      "a. Thay đổi đối bên tình trạng sung huyết mũi.",
      "b. Được điều hảnh bởi hành não*",
      "c. Chi phối bởi hạ đồi.",
      "d. Không làm thay đổi lưu lượng không khí mũi.",
    ],
    question: "Câu 474: Yếu tố sau không thuộc chu kỳ mũi:",
  },
  {
    answers: ["a. Chóng mặt*", "b. Ù tai", "c. Đau tai", "d. Giảm thính lực"],
    question: "Câu 475: Triệu chứng cơ năng không thuộc viêm tai giữa cấp sung huyết:",
  },
  {
    answers: ["a. Mở khí quản.*", "b. Kháng viêm.", "c. Kháng sinh.", "d. Huyết thanh chống bạch hầu. "],
    question: "Câu 476: Điều trị chứng khó thở thanh quản trong viêm bạch hầu là:",
  },
  {
    answers: ["a. Giả mạc", "b. Dễ chảy máu", "c. Có hạch cổ", "d. Cấy tìm vi khuẩn*"],
    question: "Câu 477: Chẩn đoán xác định viêm họng bạch hầu:",
  },
  {
    answers: [
      "a. Các cuốn mũi quá phát to",
      "b. Các cuốn mũi không co hồi khi sử dụng thuốc co mạch*",
      "c. Mủ vàng, xanh đọng nhiều ở sàn và khe mũi",
      "d. Niêm mạc các cuốn phù nề và nhợt nhạt",
    ],
    question: "Câu 478: Triệu chứng thực thể chứng tỏ các cuốn mũi đã thoái hóa lâu ngày trong viêm mũi mạn tính là:",
  },
  {
    answers: ["a. Loại khối u*", "b. Mức độ thâm nhiễm", "c. Vị trí khối u", "d. Mật độ xâm lấn"],
    question: "Câu 479: Chụp CT-Scan thanh quản trong ung thư nhằm mục đích, ngoại trừ:",
  },
  {
    answers: ["a. Các yếu tố đông máu huyết tương*", "b. Thành mạch", "c. Bạch cầu", "d. Tiểu cầu"],
    question: "Câu 480: Các yếu tố sau tham gia vào quá trình đông máu bao gồm, NGOẠI TRỪ:",
  },
  {
    answers: [
      "a. Chóp mũi có hình sư tử",
      "b. Da chóp mũi có những điểm sừng hóa và những mảng hột",
      "c. Chóp mũi bị hoại tử, biến dạng, xẹp*",
      "d. Chóp mũi và cửa mũi loét và có giả mạc ",
    ],
    question: "Câu 481: Triệu chứng cho phép nghĩ đến giang mai mũi là:",
  },
  {
    answers: [
      "a. Liên quan tới đường thở*",
      "b. Niêm mạc và mô liên kết lỏng lẻo, nhiễm trùng dễ lan rộng",
      "c. Do cấu tạo giải phẫu",
      "d. Lực chấn thương thường mạnh và nhiều tổn thương phối hợp",
    ],
    question: "Câu 482: Chấn thương vùng họng, thường rất nặng bởi vì:",
  },
  {
    answers: ["a. Nội soi", "b. Blondeau", "c. CT-Scan xoang*", "d. MRI"],
    question: "Câu 483: Tiêu chuẩn vàng để chẩn đoán viêm mũi xoang:",
  },
  {
    answers: [
      "a. Làm nghiệm pháp Heimlich",
      "b. Vỗ mạnh vào lưng bé cho đến khi bé khóc ré lên",
      "c. Đưa ngón tay vào miệng bé móc cơm ra, để em bé ói ra*",
      "d. Nắm 2 cổ chân dốc ngược lên cao",
    ],
    question:
      "Câu 484: Một em bé 3 tuổi đang ăn cơm đột ngột sặc sụa, tím tái, ngạt thở. Xử trí cấp cứu không nên làm là:",
  },
  {
    answers: [
      "a. Khám thành sau họng.",
      "b. Soi mũi trước bằng đèn clar.",
      "c. Soi vòm bằng gương soi.",
      "d. Sờ vòm.*",
    ],
    question: "Câu 485: Ngoại trừ nội soi, xác định chính xác V.A to dựa vào :",
  },
  {
    answers: ["a. Cảnh ngoài", "b. Mặt", "c. Hàm trong", "d. Cảnh trong*"],
    question: "Câu 486: Khi cắt amidan cần phải cẩn thận vì hố amidan liên quan đến động mạch:",
  },
  {
    answers: [
      "a. Bồi hoàn thể tích mất",
      "b. Xác định nguyên nhân để điều trị nguyên nhân",
      "c. Đảm bảo lưu thông đường thở",
      "d. Cầm máu tại chỗ*",
    ],
    question: "Câu 487: Nguyên tắc đầu tiên trong xử trí chảy máu mũi:",
  },
  {
    answers: [
      "a. Điếc câm thường do di truyền*",
      "b. Nguyên nhân chủ yếu trẻ bị câm là do điếc",
      "c. Ngộ độc thuốc tai trong là một nguyên nhân có thể gặp ở trẻ em",
      "d. Điếc câm là một bệnh xã hội",
    ],
    question: "Câu 488: Trong các ý sau hãy chọn 1 câu sai:",
  },
  {
    answers: ["a. Viêm vi cầu thận", "b. Viêm nội tâm mạc", "c. Viêm bàng quang*", "d. Viêm khớp"],
    question: "Câu 489: Bệnh sau đây không phải ảnh hưởng bởi “lò viêm”:",
  },
  {
    answers: ["a. Đè lưỡi.", "b. Đèn Clar.", "c. Banh miệng.", "d. Thìa Moure.*"],
    question: "Câu 490: Dụng cụ quan trọng nhất trong nạo V.A:",
  },
  {
    answers: ["a. Bất cứ lứa tuổi nào", "b. Trẻ em", "c. Trẻ lớn", "d. Người già không răng*"],
    question: "Câu 491: Dị vật ở họng thường gặp ở:",
  },
  {
    answers: ["a. Nghẹt ống*", "b. Nhiễm trùng", "c. Tuột ống", "d. Tràn khí dưới da"],
    question: "Câu 492: Sau khi mở khí quản, biến chứng thường gặp nhất là:",
  },
  {
    answers: ["a. Cấy biểu mô lát", "b. Quá sản biểu mô lát", "c. Xâm lấn biểu mô lát*", "d. Tắc nghẽn thượng nhĩ"],
    question:
      "Câu 493: Trong các thuyết về sự hình thành cholesteatoma, thuyết phù hợp với lỗ thủng màng nhĩ ở góc sau trên:",
  },
  {
    answers: ["a. Viêm xương đá*", "b. Xơ nhĩ", "c. Viêm mê nhĩ", "d. Chỉ có 3 đáp án thôi, ko có d"],
    question: "Câu 494: Biến chứng xa của viêm tai giữa mạn tính mủ:",
  },
  {
    answers: [
      "a. Viêm amidan quá phát.",
      "b. Có giả mạc.",
      "c. Niêm mạc họng đỏ.*",
      "d. Nhiều tổ chức lympho quá sản.",
    ],
    question: "Câu 495: Triệu chứng của viêm họng sung huyết đơn thuần:",
  },
  {
    answers: ["a. V", "b. IV", "c. VI*", "d. III"],
    question: "Câu 496: Mắt lé trong là do khối u chèn ép dây thần kinh",
  },
  {
    answers: ["a. Bệnh Down", "b. Dị dạng vành tai", "c. Không có ống tai ngoài*", "d. Tắc vòi nhĩ"],
    question: "Câu 497: Dị tật bẩm sinh gây nghe kém ở trẻ em thường là bệnh:",
  },
  {
    answers: ["a. Âm ốc tai*", "b. Điện thính giá thân não", "c. Điện ốc tai", "d. Nhĩ lượng đồ"],
    question: "Câu 498: Phát hiện thính giác ở trẻ sơ sinh tốt nhất dùng xét nghiệm:",
  },
  {
    answers: ["a. Mũi trên (họng mũi)", "b. Họng dưới (hạ họng)", "c. Tất cả đều đúng", "d. Họng giữa (họng miệng)*"],
    question: "Câu 499: Chấn thương trực tiếp ở họng thường xảy ra ở:",
  },
  {
    answers: ["a. Máu tụ trong xoang*", "b. Vỡ mặt trước xoang hàm", "c. Rách niêm mạc xoang", "d. Dị vật trong xoang"],
    question: "Câu 500: Trong chấn thương xoang, nguyên nhân thường gây viêm xoang hàm là:",
  },
  {
    answers: [
      "a. Dị ứng",
      "b. Các nguyên nhân làm tắc phức hợp lỗ thông khe*",
      "c. Rối loạn vận động tế bào lông chuyển",
      "d. Suy giảm miễn dịch",
    ],
    question: "Câu 501:",
  },
  {
    answers: [
      "a. Bạch cầu ưa axit",
      "b. Tế bào lympho",
      "c. Tụ tập bạch cầu đa nhân*",
      "d. Có sự hiện diện đại thực bào.",
    ],
    question: "Câu 502: Viêm mũi xoang cấp có đặc trưng:",
  },
  {
    answers: [
      "a. Nhỏ thuốc co mạch",
      "b. Nghỉ ngơi, do huyết áp, khám toàn thân",
      "c. Đặt gòn tẩm ephrine 3% vào điểm chảy máu",
      "d. Bóp chặt cánh mũi trong 5 phút*",
    ],
    question: "Câu 503: Xử trí tức thì đúng nhất đối với trường hợp chảy máu điểm mạch ở y tế cơ sở là:",
  },
  {
    answers: [
      "a. Di động ở khí quản*",
      "b. Cố định ở phế quản gốc phải gây xẹp phổi",
      "c. Ở phế quản gốc trái gây thủng phế quản ",
      "d. Nhỏ ở thanh quản",
    ],
    question: "Câu 504: Chỉ định mở khí quản ưu tiên nhất trước khi chuyển lên tuyến trên cho dị vật:",
  },
  {
    answers: ["a. Viêm tai giữa cấp*", "b. Viêm tai giữa xuất tiết", "c. Viêm tai giữa mạn", "d. Chấn thương"],
    question: "Câu 505: Nguyên nhân thường gây thủng màng nhĩ nhiều nhất:",
  },
  {
    answers: ["a. Chảy mũi nhầy đục", "b. Nhức đầu", "c. Sốt cao", "d. Các yếu tố trên*"],
    question: "Câu 506: Viêm mũi xoang cấp có chỉ định dùng kháng sinh khi:",
  },
  {
    answers: ["a. Xuất tiết thông thường", "b. Vị trí hạ thanh môn", "c. Rít", "d. Thượng thanh môn*"],
    question: "Câu 507: Trong các thể lâm sàng viêm thanh quản sau, thể nặng nhất có thể gây tử vong cho trẻ là:",
  },
  {
    answers: ["a. U thực quản", "b. Hẹp môn vị", "c. Trào ngược dạ dày-thực quản", "d. Sỏi mật*"],
    question: "Câu 508: Bệnh nào của đường tiêu hóa có thể gây rối loạn về nuốt, ngoại trừ:",
  },
  {
    answers: ["a. Tất cả các rối loạn trên", "b. Loạn khứu", "c. Mất khứu", "d. Giảm khứu*"],
    question: "Câu 509: Rối loạn khứu giác thường gặp nhất là:",
  },
  {
    answers: [
      "a. Xác định máu còn chảy hay đã ngưng",
      "b. Máu chảy ra ở bên mũi nào",
      "c. Cho chụp X quang để xác định chẩn đoán*",
      "d. Hỏi bệnh sử, chảy máu mũi lần mấy",
    ],
    question: "Câu 510: Khi tiếp nhận bệnh nhân chảy máu mũi, điều người thầy thuốc không nên làm là:",
  },
  {
    answers: [
      "a. V.A gặp nhiều ở trẻ dưới 5 tuổi.",
      "b. Triệu chứng chủ yếu của viêm V.A là nghẹt mũi.",
      "c. V.A thường bị viêm ở bé trai.*",
      "d. Có nhiều phương pháp nạo V.A.",
    ],
    question: "Câu 511: Trong các ý sau, hãy chọn 1 ý sai:",
  },
  {
    answers: ["a. Kháng viêm", "b. Chọc rửa xoang để thoát lưu mủ*", "c. Kháng sinh", "d. Kháng histamin"],
    question: "Câu 512: Phương pháp điều trị viêm xoang cấp tính, NGOẠI TRỪ:",
  },
  {
    answers: [
      "a. Điều chỉnh nhiệt độ khí vào phổi",
      "b. Làm ẩm không khí vào phổi",
      "c. Ngăn cản các vật lạ",
      "d. Làm nhẹ khối xương mặt*",
    ],
    question: "Câu 513: Đường dẫn khí có các vai trò chủ yếu sau, NGOẠI TRỪ:",
  },
  {
    answers: ["a. Cắt bằng dao điện", "b. Cắt bằng thòng lọng", "c. Tất cả đều sai*", "d. Cắt bằng laser"],
    question: "Câu 514: Phương pháp cắt amidan tốt nhất là:",
  },
  {
    answers: [
      "a. Cửa mũi sau đọng nhiều dịch nhầy* ",
      "b. Cuốn dưới thoái hóa",
      "c. Niêm mạc mũi xung huyết, đỏ",
      "d. Sàn mũi và khe mũi đọng nhiều dịch xuất tiết",
    ],
    question: "Câu 515: Viêm mũi cấp ở trẻ em dưới 5 tuổi có các triệu chứng thực thể sau, NGOẠI TRỪ:",
  },
  {
    answers: ["a. Kartagener", "b. Franchesti", "c. Mounier-kuhn", "d. Costen*"],
    question: "Câu 516: Một bệnh thuộc răng hàm mặt nhưng triệu chứng của tai mũi họng:",
  },
  {
    answers: [
      "a. Động mạch cảnh trong*",
      "b. Động mạch cảnh ngoài",
      "c. Động mạch hàm trong",
      "d. Động mạch bướm khẩu cái",
    ],
    question: "Câu 517: Động mạch nào có liên quan đến phẫu thuật cắt amidan:",
  },
  {
    answers: ["a. Vết thương mau lành", "b. Các vấn đề trên*", "c. Chống nhiễm trùng", "d. Nâng cao sức đề kháng"],
    question: "Câu 518: Đảm bảo chế độ dinh dưỡng cho bệnh nhân sau mở khí quản là nhằm:",
  },
  {
    answers: ["a. II", "b. IV*", "c. I", "d. III"],
    question: "Câu 519: Ung thư thanh quản, dấu hiệu “lọc cọc” thanh quản cột sống mất ở giai đoạn:",
  },
  {
    answers: ["a. Sỏi mật.", "b. Viêm đại tràng.", "c. Dị ứng.*", "d. Trào ngược dạ dày-thực quản."],
    question: "Câu 520: Yếu tố sau đây không thuộc nguyên nhân gây viêm họng từ đường tiêu hóa:",
  },
  {
    answers: ["a. CT- Scan xoang*", "b. MIR", "c. Blondeau", "d. Nội soi mũi xoang"],
    question: "Câu 521: Cận lâm sàng sau có giá trị nhất trong phẫu thuật mũi xoang:",
  },
  {
    answers: ["a. U dây VIII", "b. Ngộ độc tai trong", "c. Meniere*", "d. Xốp xơ tai"],
    question: "Câu 522: Nghe kém tiếp nhận tăng dần gặp trong các bệnh sau:",
  },
  {
    answers: ["a. Lõm nhĩ", "b. Giảm thính lực", "c. Xơ nhĩ", "d. Viêm mê nhĩ*"],
    question: "Câu 523: Được gọi là biến chứng cấp của viêm tai giữa cấp tính mủ:",
  },
  {
    answers: [
      "a. Biểu mô không biệt hóa",
      "b. Biểu mô biệt hóa cao",
      "c. Biểu mô biệt hóa vừa*",
      "d. Biểu mô biệt hóa ít",
    ],
    question: "Câu 524: Mô bệnh học của ung thư thanh quản chủ yếu là:",
  },
  {
    answers: [
      "a. Rửa sạch bằng nước muối vô trùng",
      "b. Lấy bỏ dị vật",
      "c. Cho vào bọc Nilon ngâm trong nước lạnh",
      "d. Ngâm trong nước đá*",
    ],
    question: "Câu 525: Điều không nên làm khi xử lý phần đứt lìa vành tai:",
  },
  {
    answers: ["a. Đối bên", "b. Do dãn đồng tử", "c. Do phù gai thị*", "d. Từng lúc"],
    question: "Câu 526: Mờ mắt trong áp xe não do tai thường có tính chất:",
  },
  {
    answers: ["a. Bã đậu ở khe Amidan*", "b. Họng đỏ lan tỏa", "c. Sốt cao 390C", "d. Nuốt đau nhiều"],
    question: "Câu 527:",
  },
  {
    answers: ["a. Corticoides*", "b. Giãn phế quản", "c. Kháng sinh", "d. Kháng histamin"],
    question: "Câu 528: Viêm thanh quản hạ thanh môn thường đáp ứng điều trị:",
  },
  {
    answers: ["a. Ngộ độc thuốc", "b. Nhiễm virus", "c. Rubella", "d. Dị dạng Billirubin*"],
    question: "Câu 529: Tổn thương trước lúc sinh không do nguyên nhân sau:",
  },
  {
    answers: ["a. Nghẹt mũi tăng dần", "b. Chảy máu mũi tái diễn", "c. Hạch sau góc hàm", "d. Nuốt đau*"],
    question: "Câu 530: Trong ung thư vòm giai đoạn sớm, có thể gặp các dấu hiệu sau, NGOẠI TRỪ:",
  },
  {
    answers: [
      "a. Đột ngột, cấp tính",
      "b. Khó thở thanh quản tăng dần*",
      "c. Có bệnh sử của bệnh rõ ràng",
      "d. Khó thở thanh quản tái diễn",
    ],
    question: "Câu 531: Đặc điểm gợi ý nhất đối với người bệnh bị khó thở thanh quản do ung thư dây thanh là:",
  },
  {
    answers: ["a. Giản phế quản", "b. Áp xe phổi", "c. Phế quản phế viêm*", "d. Viêm mủ màng phổi"],
    question: "Câu 532: Biến chứng nào thường xảy ra nhất trong dị vật đường thở:",
  },
  {
    answers: ["a. Delima", "b. Caldwell-luc", "c. Claoue*", "d. Denker"],
    question: "Câu 533: Mổ viêm xoang hàm kinh điển ở trẻ em là:",
  },
  {
    answers: [
      "a. Các yếu tố trên*",
      "b. Nhức đầu kèm chảy mũi đục nhiều",
      "c. Sốt cao, chảy mũi đục",
      "d. Triệu chứng viêm mũi xoang cấp kéo dài trên 10 ngày không cải thiện",
    ],
    question: "Câu 534: Biểu hiện lâm sàng xác định viêm mũi xoang cấp do vi khuẩn:",
  },
  {
    answers: [
      "a. Hạ huyết áp để máu ngưng chảy",
      "b. Đồng thời điều trị cao huyết áp*",
      "c. Dùng kháng sinh, thuốc cầm máu",
      "d. Cầm máu",
    ],
    question:
      "Câu 535: Chảy máu mũi trên bệnh nhân cao huyết áp, thái độ xử trí đúng đắn nhất là nhét meche mũi trước và:",
  },
  {
    answers: ["a. U dây VIII", "b. Viêm ống tai ngoài*", "c. Bệnh Meniere", "d. Xốp xơ tai"],
    question: "Câu 536: Bệnh nào không thuộc loại điếc từ từ:",
  },
  {
    answers: [
      "a. Vùng trước cổ sưng, nóng, đỏ, đau",
      "b. Niểng cổ 1 bên*",
      "c. Không xoay cổ được",
      "d. Lọc cọc thanh quản mất",
    ],
    question: "Câu 537: Dấu hiệu thực thể có giá trị trong áp xe cạnh cổ:",
  },
  {
    answers: [
      "a. Thức ăn có lẫn cơm, canh",
      "b. Có nguồn gốc thực vật*",
      "c. Những đồ chơi",
      "d. Có nguồn gốc động vật",
    ],
    question: "Câu 538: Ở các tỉnh phía Nam, dị vật gặp nhiều nhất là:",
  },
  {
    answers: ["a. 1-5", "b. > 15", "c. 6-10", "d. 11-15*"],
    question: "Câu 539: Viêm họng do GABHS hay gặp ở lứa tuổi:",
  },
  {
    answers: ["a. Hàm", "b. Trán", "c. Sàng*", "d. Bướm"],
    question: "Câu 540: Hai mí mắt của trẻ nhỏ bị sưng nề thường là do viêm xoang:",
  },
  {
    answers: ["a. ≤ 4 tuổi*", "b. ≤ 6 tuổi", "c. ≤ 7 tuổi.", "d. ≤ 5 tuổi"],
    question: "Câu 541: Không nên cắt Amidan ở tuổi:",
  },
  {
    answers: ["a. 50-70 db", "b. 70-90db", "c. >= 90db*", "d. >= 120db"],
    question: "Câu 542: Cường độ âm thanh có thể làm thoái hóa cơ quan corti:",
  },
  {
    answers: ["a. Nội soi vòm*", "b. Triệu chứng lâm sàng", "c. Sờ vòm", "d. Soi vòm bằng gương"],
    question: "Câu 543: Chẩn đoán V.A quá phát tốt nhất dựa vào:",
  },
  {
    answers: [
      "a. Hệ thống lông chuyển bị hư hại nặng",
      "b. Biểu mô loạn sản gai",
      "c. Sự thoái hóa các tuyến nhầy của niêm mạc",
      "d. Thoái hóa các sợi thần kinh phó giao cảm*",
    ],
    question: "Câu 544: Các giả thuyết sau giải thích được nguyên nhân và bệnh sinh của bệnh trĩ mũi, NGOẠI TRỪ:",
  },
  {
    answers: ["a. Giữa hốc mũi", "b. Van mũi trong*", "c. van mũi ngoài", "d. Cửa mũi sauc. van mũi ngoài"],
    question: "Câu 545: Vùng hẹp nhất của hốc mũi là:",
  },
  {
    answers: ["a. Do áp tơ", "b. Tất cả các dạng trên*", "c. Zona", "d. Denruphigus"],
    question: "Câu 546: Thể lâm sàng của viêm loét họng thường trú là:",
  },
  {
    answers: ["a. Soi vòm bằng gương", "b. Nội soi mũi vòm*", "c. Công thức máu", "d. X quang"],
    question: "Câu 547: Cận lâm sàng giúp ích cho chẩn đoán là:",
  },
  {
    answers: ["a. Vi khuẩn", "b. Dị ứng*", "c. Hóa chất", "d. Siêu vi trùng"],
    question: "Câu 548: Nguyên nhân chủ yếu nhất gây viêm xoang sau mạn tính là do:",
  },
  {
    answers: ["a. Tràn mủ màng phổi", "b. Dò phổi – thực quản", "c. Dò khí – phế quản phổi", "d. Áp xe trung thất*"],
    question: "Câu 549: Biến chứng trung thất cấp tính của dị vật đường ăn tiên lượng xấu nhất là:",
  },
  {
    answers: ["a. Epstein Barr virus*", "b. Di truyền", "c. Nitrosamine", "d. Hóa chất."],
    question:
      "Câu 550: Điều trị miễn dịch liệu pháp là lý tưởng khi nguyên nhân chính xác của ung thư vòm được xác định:",
  },
  {
    answers: ["a. Giải phẫu bệnh*", "b. CT-Scan", "c. Hoạt nghiệm dây thanh", "d. Nội soi"],
    question: "Câu 551: Tiêu chuẩn vàng để chẩn đoán ung thư thanh quản:",
  },
  {
    answers: [
      "a. Nhãn cầu bị lõm, khe mắt hẹp, đồng tử mở lớn",
      "b. Mắt lồi, khe mắt hẹp, đồng tử mở lớn",
      "c. Nhãn cầu bị đẩy ra trước, khe mắt rộng ra, đồng tử co nhỏ",
      "d. Nhãn cầu bị lõm, khe mắt hẹp, đồng tử co nhỏ*",
    ],
    question:
      "Câu 552: Trong liệt thần kinh giao cảm, hội chứng Claude Bernard Horner bao gồm những triệu chứng sau, NGOẠI TRỪ:",
  },
  {
    answers: [
      "a. Kháng sinh, kháng viêm",
      "b. Chùi sạch bằng gòn sạch, lấy hết dị vật",
      "c. Các biện pháp trên*",
      "d. Đặt meche tẩm pomade kháng sinh, ép da ống tai",
    ],
    question: "Câu 553: Xử trí rách da ống tai bao gồm các biện pháp sau:",
  },
  {
    answers: [
      "a. Bảo vệ đường hô hấp dưới",
      "b. Khép mở 2 dây thanh để điều khiển phát âm và hô hấp",
      "c. Sưởi ấm không khí vào phổi*",
      "d. Thoát hơi để phát âm",
    ],
    question: "Câu 554: Thanh quản có các chức năng hô hấp sau, NGOẠI TRỪ:",
  },
  {
    answers: [
      "a. Là một ống dài, các chiều bằng nhau",
      "b. Bằng với hạ họng và nằm gọn ở giữa hạ họng",
      "c. Có lỗ trên trên bình diện ngang",
      "d. Là một ống hẹp bề ngang và rộng theo chiều trước sau*",
    ],
    question: "Câu 555: Lòng thanh quản:",
  },
  {
    answers: ["a. Điếc tai giữa*", "b. Tai bình thường", "c. Điếc hỗn hợp", "d. Điếc tai trong"],
    question: "Câu 556: Nghiệm pháp Rinne lớn hơn 1 có thể gặp trong các trường hợp sau, NGOẠI TRỪ:",
  },
  {
    answers: ["a. Viêm nội tâm mạc", "b. Thấp khớp", "c. Áp xe quanh amidan*", "d. Viêm vi cầu thận"],
    question:
      "Câu 557: Trong viêm amidan cấp do liên cầu tiêu huyết beta nhóm A có thể xảy ra các biến chứng, NGOẠI TRỪ:",
  },
  {
    answers: [
      "a. Mổ sớm để thắt hai đầu của tĩnh mạch bên",
      "b. Mổ giải quyết bệnh tích xương chũm cấp cứu",
      "c. Chống phù não",
      "d. Kháng sinh liều cao đường tĩnh mạch*",
    ],
    question: "Câu 558: Điều trị đầu tiên cần được thực hiện đối với viêm tắc tĩnh mạch bên là:",
  },
  {
    answers: ["a. Hơi thở hôi", "b. Áp xe amidan", "c. Viêm tấy quanh amidan*", "d. Viêm họng mạn tính"],
    question: "Câu 559: Biến chứng tại chỗ thường gặp của viêm amidan mạn tính:",
  },
  {
    answers: ["a. Hàm răng trên mọc lổm chổm", "b. Thò lò mũi xanh", "c. Các dấu hiệu trên*", "d. Răng hô"],
    question: "Câu 560: Triệu chứng chủ yếu của « bộ mặt V.A » :",
  },
  {
    answers: ["a. Ho, khạc nhiều đàm", "b. Đau tức ngực", "c. Sốt cao, lạnh rung*", "d. Có thể có lẫn máu"],
    question: "Câu 561: Giãn phế quản có đặc điểm sau, ngoại trừ:",
  },
  {
    answers: [
      "a. Viêm họng ở trẻ em kèm với viêm V.A.",
      "b. Viêm họng ít khi xảy ra ở người cao tuổi.",
      "c. Viêm họng thường chung với bệnh cảnh viêm vòng bạch huyết Wadey.*",
      "d. Viêm họng thường chung với viêm amidan.",
    ],
    question: "Câu 562: Chọn 1 ý đúng nhất sau đây:",
  },
  {
    answers: ["a. Kháng sinh", "b. Kháng Histamine*", "c. Kháng acide", "d. Kháng viêm"],
    question: "Câu 563: Các thuốc sau có thể làm nhầy khí quản đặc quánh:",
  },
  {
    answers: ["a. Viêm ống tai ngoài lan tỏa", "b. Viêm sụn ống tai", "c. Sẹo hẹp ống tai ngoài*", "d. Viêm tai giữa"],
    question: "Câu 564: Biến chứng có thể ảnh hưởng đến chức năng nghe trong chấn thương ống tai:",
  },
  {
    answers: [
      "a. Chọc hút hạch làm tế bào học*",
      "b. Nội soi vòm mũi họng",
      "c. Chụp phim Blondeau-Hirtz",
      "d. Dùng kháng sinh, kháng viêm",
    ],
    question:
      "Câu 565: Chẩn đoán xác định bao gồm các việc sau, NGOẠI TRỪ? Tình huống: Người bệnh nam, 55 tuổi có một hạch to ở sau góc hàm phải từ 2 tháng nay. Nghẹt mũi bên phải, thỉnh thoảng có khạc ra nhày lẫn máu. Hút sạch nhày và máu, đưa ống soi vào cửa mũi sau, thấy có 1 khối sùi to bít 1 phần cửa mũi sau",
  },
  {
    answers: [
      "a. Bồi hoàn nước, điện giải",
      "b. Cấy máu, làm kháng sinh đồ",
      "c. Điều trị kháng sinh theo kháng sinh đồ*",
      "d. Điều chỉnh các rối loạn kiềm toan",
    ],
    question: "Câu 566: Điều trị nội khoa có kết quả tốt nhất đối với viêm tắc xoang tĩnh mạch bên:",
  },
  {
    answers: [
      "a. Đè lưỡi 2/3 trước nhẹ nhàng*",
      "b. Nói bệnh nhân thả lỏng người",
      "c. Xịt tê họng trước khi khám",
      "d. Đè lưỡi 1/3 trước nhẹ nhàng",
    ],
    question: "Câu 567: Để khám rõ amidan cần phải:",
  },
  {
    answers: ["a. Nghẹt mũi", "b. Chảy máu mũi dây dưa kéo dài", "c. Ngứa mũi, nhẩy mũi", "d. Khó thở*"],
    question: "Câu 568: Dị vật còn sống chui vào mũi có đặc điểm sau:",
  },
  {
    answers: ["a. “Lò viêm”*", "b. Rối loạn tiêu hóa", "c. Phế quản phế viêm", "d. Áp xe amidan"],
    question: "Câu 569: Biến chứng thường gặp nhất của viêm amidan mạn tính:",
  },
  {
    answers: ["a. Tẩm nhuận", "b. Xuất huyết", "c. Xuất tiết", "d. Các quá trình trên*"],
    question: "Câu 570: Viêm mũi xoang cấp là quá trình:",
  },
  {
    answers: [
      "a.tăng tế bào lympho B, T",
      "b.t ất cả đều đúng*",
      "c. liên quan đến miễn dịch tại chỗ",
      "d. liên quan chặt chẽ với V.A",
    ],
    question: "Câu 571:Amidan là một tổ chức:",
  },
  {
    answers: ["a. Nhịn ăn uống", "b. Dùng kháng viêm", "c. Đặt sonde dạ dày*", "d. Dùng kháng sinh"],
    question: "Câu 572: Khi soi thực quản lấy dị vật gây trầy xước nhiều cần phải:",
  },
  {
    answers: ["a. Dạng sùi", "b. Nghẹt mũi là chủ yếu", "c. Hạch có sớm", "d. Các đặc điểm trên*"],
    question: "Câu 573: Ở trẻ em ung thư vòm có những đặc điểm sau:",
  },
  {
    answers: ["a. Xương vịt có lẫn thịt*", "b. Đồng xu", "c. Thịt không lẫn xương", "d. Hạt sapôchê"],
    question: "Câu 574: Loại dị vật dễ gây viêm tấy thực quản là:",
  },
  {
    answers: ["a. Sờ nắn", "b. Nội soi*", "c. X-quang sọ nghiêng", "d. Các triệu chứng lâm sàng"],
    question: "Câu 575: Chẩn đoán chính xác nhất V.A to:",
  },
  {
    answers: [
      "a. Thuốc rữa thông mũi.",
      "b. Nạo V.A khi có chỉ định.*",
      "c. Chích rạch màng nhĩ.",
      "d. Kháng sinh thích hợp.",
    ],
    question: "Câu 576: Phòng ngừa viêm tai giữa tiết dịch do viêm V.A tốt nhất là:",
  },
  {
    answers: ["a. U xơ vòm", "b. K vòm", "c. Màng não sa*", "d. Polyp bướm sàng"],
    question: "Câu 577: Chẩn đoán phân biệt V.A to ở trẻ em với:",
  },
  {
    answers: [
      "a. Trong ống tai có máu",
      "b. Thành ống tai bị hẹp",
      "c. Rất đau nhất là khi nhai*",
      "d. Rách da ống tai",
    ],
    question: "Câu 578: Dấu hiệu lâm sàng cho phép nghĩ nhiều đến hở xương nhĩ là:",
  },
  {
    answers: [
      "a. Viêm thanh quản cấp",
      "b. Dị vật thanh quản",
      "c. Phù nề thanh thiệt do dị ứng*",
      "d. Viêm thanh thiệt.",
    ],
    question: "Câu 579: Khó thở thanh quản cấp ở người lớn nguyên nhân thường gặp:",
  },
  {
    answers: ["a. Tĩnh mạch cảnh ngoài*", "b. Vịnh cảnh", "c. Tĩnh mạch cảnh trong", "d. Tĩnh mạch thoát"],
    question: "Câu 580: Viêm tắc tĩnh mạch bên có thể lan đến các vị trí sau, NGOẠI TRỪ:",
  },
  {
    answers: ["a.Kháng dị ứng.", "b. Các câu trên.*", "c. Rửa thông mũi. ", "d. Uống nhiều nước."],
    question: "Câu 581: Điều trị nội khoa viêm V.A cấp:",
  },
  {
    answers: [
      "a. Viêm phổi kẽ",
      "b. Viêm trung thất mủ",
      "c. Viêm phổi 1 bên tái phát nhiều lần*",
      "d. Phế quản phế viêm nặng",
    ],
    question: "Câu 582: Bệnh lý phổi nghĩ đến dị vật đường thở là:",
  },
  {
    answers: [
      "a. Các yếu tố trên*",
      "b. Phù nề niêm mạc",
      "c. Tắc nghẽn các lỗ thông xoang",
      "d. Rối loạn hệ thống lông chuyển",
    ],
    question: "Câu 583: Các yếu tố gây viêm xoang:",
  },
  {
    answers: ["a. Nội soi", "b. Khám mũi trước", "c. Soi mũi sau qua gương", "d. Sờ vòm*"],
    question: "Câu 584: Hiện nay khám thực thể ung thư vòm không nên:",
  },
  {
    answers: ["a. Viêm mô xung quanh hạch.", "b. Khoang họng phù nề, hẹp.", "c. Viêm hạch.", "d. Tất cả điều đúng.*"],
    question: "Câu 585: Cổ sưng to trong viêm họng bạch hầu ác tính do:",
  },
  {
    answers: ["a. Viêm thị thần kinh", "b. Tắc lệ đạo", "c. Viêm túi lệ *", "d. Lé trong"],
    question: "Câu 586: Bệnh nào của mắt có thể nhầm với bệnh TMH:",
  },
  {
    answers: [
      "a. Ống tai sụn và ống tai xương",
      "b. Màng nhĩ ở tận cùng",
      "c. Bầu dục, dẹp theo chiều trên – dưới*",
      "d. Bệnh tích ống tai ngoài có thể ảnh hưởng đến dây thần kinh VII",
    ],
    question: "Câu 587: Ống tai ngoài có các đặc điểm sau, NGOẠI TRỪ:",
  },
  {
    answers: [
      "a. Ít nhất 150 lông chuyển, dài 4 micron",
      "b. Ít nhất 200 lông chuyển, dài 6 micron*",
      "c. Ít nhất 200 lông chuyển, dài 4 micron",
      "d. 150 lông chuyển, dài 6 micron",
    ],
    question: "Câu 588: Tế bào trụ có lông chuyển ở phế quản gốc bao gồm:",
  },
  {
    answers: [
      "a. Tiền sử hội chứng xâm nhập",
      "b. Đột ngột khạc ra nhiều mủ",
      "c. Người bệnh sốt, ho, đau tức ngực",
      "d. Hình ảnh ổ áp xe trên phim X quang*",
    ],
    question: "Câu 589: Dấu hiệu cho phép nghĩ đến áp xe phổi do dị vật là:",
  },
  {
    answers: [
      "a. Hai amidan bít kín khoang họng miệng ",
      "b. Chiếm trên 50% so với khoảng cách giữa hai bờ trong của trụ trước*",
      "c. Hai amidan chụm vào nhau",
      "d. Hai amidan đụng vào lưỡi gà",
    ],
    question: "Câu 590: Amidan to độ IV có các đặc điểm sau, NGOẠI TRỪ:",
  },
  {
    answers: [
      "a. X quang",
      "b. Nội soi ống cứng (mềm) qua màn hình TV (gắn camera)*",
      "c. CT- Scan",
      "d. Chụp hình qua soi treo",
    ],
    question: "Câu 591: Đánh giá hoạt động của thanh quản, phương pháp cận lâm sàng tốt nhất là:",
  },
  {
    answers: [
      "a. Cho thở oxy",
      "b. Đặt nội khí quản giúp thở*",
      "c. Mở khí quản ngay",
      "d. Dùng kháng sinh, kháng viêm",
    ],
    question:
      "Câu 592: Một em bé 2 tuổi khó thở thanh quản cuối độ 2 do viêm thanh quản cấp, vào viện trong tình trạng nguy kịch; xử trí đầu tiên phù hợp nhất là:",
  },
  {
    answers: [
      "a. Cung răng trên kém phát triển.",
      "b. Viêm mũi xoang mạn tính kéo dài.",
      "c. Nghẹt mũi kéo dài.*",
      "d. Suy dinh dưỡng.",
    ],
    question: "Câu 593: Nguyên nhân chủ yếu gây ra “bộ mặt V.A”:",
  },
  {
    answers: [
      "a. Khám sức khỏe định kỳ",
      "b. Trang bị máy nội soi thanh quản",
      "c. Các nội dung trên*",
      "d. Phòng chống ô nhiễm môi trường",
    ],
    question: "Câu 594: Dự phòng khó thở thanh quản tốt nhất là:",
  },
  {
    answers: [
      "a. Theo dõi tình trạng khó thở",
      "b. Các nội dung trên*",
      "c. Dùng kháng sinh, kháng viêm",
      "d. Theo dõi nhiều đợt",
    ],
    question: "Câu 595: Thái độ đúng nhất đối với trường hợp trên:",
  },
  {
    answers: ["a. Loét", "b. Có vẩy", "c. Mất thành niêm mạc", "d. Các dạng trên*"],
    question: "Câu 596: Viêm loét họng được biểu hiện:",
  },
  {
    answers: ["a. Dưới 6 tháng", "b. 6 tháng đến 1 tuổi", "c. 6 tháng đến 3 tuổi", "d. 6 tháng đến 2 tuổi*"],
    question: "Câu 597: Viêm tai giữa cấp gặp nhiều nhất ở lứa tuổi:",
  },
  {
    answers: [
      "a. Tác nhân là xoắn khuẩn Vincent",
      "b. Loét có khuynh hướng hoại tử",
      "c. Thường ở người trẻ có sức đề kháng yếu",
      "d. Viêm loét chủ yếu ở Amidan*",
    ],
    question: "Câu 598:",
  },
  {
    answers: ["a. Trên 15 tuổi.*", "b. Dưới 15 tuổi.", "c. Dưới 5 tuổi.", "d. Dưới 10 tuổi."],
    question: "Câu 599: Viêm họng giả mạc trắng thông thường gặp ở tuổi:",
  },
  {
    answers: ["a. Quá trình viêm kéo dài", "b. Có thể có mủ bã đậu trong các hốc", "c. Ở trẻ em*", "d. Ở người lớn"],
    question: "Câu 600: Viêm amidan xơ teo thường gặp trong những trường hợp sau, NGOẠI TRỪ:",
  },
  {
    answers: [
      "a. Viêm họng cúm*",
      "b. Viêm họng đỏ do vi khuẩn",
      "c. Viêm họng mũi ở trẻ em",
      "d. Viêm họng đỏ do virus APC",
    ],
    question: "Câu 601: Ở trẻ lớn, thể lâm sàng hay gặp nhất trong viêm họng đỏ thông thường là:",
  },
  {
    answers: [
      "a. Dễ chảy máu khi gỡ giả mạc*",
      "b. Khi gỡ ra thì không chảy máu",
      "c. Dễ vỡ và tan trong nước",
      "d. Chủ yếu khu trú ở amdian",
    ],
    question: "Câu 602: Trong viêm họng giả mạc thông thường, giả mạc có các đặc điểm sau, NGOẠI TRỪ:",
  },
  {
    answers: ["a. Xơ dính hòm nhĩ*", "b. Viêm xương tiểu cốt", "c. Viêm xương tường dây VII", "d. Polyp ống tai"],
    question: "Câu 603: Biến chứng cục bộ lâu dài thường gặp viêm tai giữa mạn tính:",
  },
  {
    answers: ["a. Khó phát âm", "b. Có khả năng ung thư hóa", "c. Thường hay khó thở*", "d. Thường ở 1 bên"],
    question: "Câu 604: Papillome ở người lớn có các đặc điểm sau, ngoại trừ:",
  },
  {
    answers: ["a. Thâm nhiễm", "b. Sùi*", "c. Loét", "d. Hỗn hợp"],
    question: "Câu 605: Ung thư thanh quản gặp nhiều nhất thể:",
  },
  {
    answers: ["a. Viêm mũi", "b. Khối u", "c. Viêm V.A", "d. Dị vật mũi*"],
    question: "Câu 606: Chẩn đoán được nghĩ nhiều nhất khi nhức, nghẹt và chảy mũi nhầy đục một bên:",
  },
  {
    answers: ["a. Dụng cụ La Force", "b. Cả 3 đều đúng", "c. Dụng cụ Mource*", "d. Dụng cụ David"],
    question: "Câu 607: Loại dụng cụ nạo V.A có thể làm sót khối V.A đã nạo xuống hạ họng – thanh quản là:",
  },
  {
    answers: ["a. Phù não nặng", "b. Liệt cơ hô hấp *", "c. Giai đoạn toàn phát", "d. Kèm biến chứng áp xe não"],
    question: "Câu 608: Viêm màng não có chỉ định mở khí quản khi:",
  },
  {
    answers: ["a. Đo huyết áp*", "b. Xét nghiệm máu", "c. Nhét meche ngay", "d. Nội soi tìm điểm chảy máu"],
    question: "Câu 609: Bệnh nhân đến cấp cứu vì tự nhiên chảy máu mũi. Động tác đầu tiên cần làm là:",
  },
  {
    answers: ["a. Uống nhiều nước", "b. Vệ sinh răng miệng", "c. Rỏ thông mũi", "d. Điều trị triệu chứng*"],
    question: "Câu 610: Điều trị chủ yếu viêm amidan cấp ở trẻ em:",
  },
  {
    answers: ["a. Ngộ độc thuốc", "b. U dây VIII*", "c. Điếc nghề nghiệp", "d. Giang mai"],
    question: "Câu 611: Nghe kém 2 tai thường gặp trong bệnh lý nào sau, ngoại trừ:",
  },
  {
    answers: ["a. Chống nhiễm trùng tại chỗ", "b. Nghỉ ngơi", "c. Các nội dung trên*", "d. Không ăn đồ cứng"],
    question: "Câu 612: Dự phòng chảy máu muộn sau cắt amidan:",
  },
  {
    answers: [
      "a. Viêm tai giữa cấp",
      "b. Viêm ống tai ngoài cấp",
      "c. Viêm tai xương chũm mạn tính hồi viêm*",
      "d. Viêm tai xương chũm mạn tính hồi viêm xuất ngoại",
    ],
    question: "Câu 613: Chẩn đoán được nghĩ đến nhiều nhất là:",
  },
  {
    answers: [
      "a. Co thắt thanh khí phế quản.",
      "b. Tím tái.",
      "c. Mô V.A sót vào đường thở.*",
      "d. Chảy máu vào đường thở.",
    ],
    question: "Câu 614: Nguy cơ nạo V.A bằng thìa Moure gây tê:",
  },
  {
    answers: [
      "a. Có thể gặp ở mọi lứa tuổi",
      "b. Thường gặp vào lúc giao mùa",
      "c. Ở nông thôn ít bị hơn thành thị*",
      "d. Sức đề kháng cơ thể giảm",
    ],
    question: "Câu 615: Viêm họng cấp bao gồm các yếu tố dịch tễ sau, NGOẠI TRỪ:",
  },
  {
    answers: ["a. Toàn bộ màng nhĩ, còn khung nhĩ", "b. Toàn bộ màng căng", "c. Góc sau trên*", "d. ¼ sau dưới"],
    question: "Câu 616: Vị trí lỗ thủng màng nhĩ nguy hiểm và dễ gây biến chứng là:",
  },
  {
    answers: ["a. V.A sùi vòm", "b. U xơ vòm", "c. Polyp*", "d. Ung thư vòm"],
    question: "Câu 617: Ở vùng vòm loại khối u rất ít gặp:",
  },
  {
    answers: ["a. Viêm tai giữa", "b. Hở ống tai xương", "c. Viêm ống tai ngoài", "d. Sẹo hẹp ống tai*"],
    question: "Câu 618: Biến chứng thường gặp của rách da ống tai là:",
  },
  {
    answers: [
      "a. Thường gặp ở trẻ trên 3 tuổi*",
      "b. Bé nam gặp nhiều hơn bé nữ",
      "c. Thường xảy ra đột ngột",
      "d. Bản chất dị vật có nguồn gốc động vật ",
    ],
    question: "Câu 619: Một ý sau đây sai trong dị vật đường thở:",
  },
  {
    answers: ["a. Thức ăn.", "b. Bụi nhà*", "c. Thời tiết.", "d. Phấn hoa."],
    question: "Câu 620: Viêm mũi dị ứng quanh năm thường do dị nguyên:",
  },
  {
    answers: ["a. Giải phẫu bệnh", "b. Cấy", "c. Điện di", "d. PCR*"],
    question: "Câu 621: Tìm kháng thể virus EBV ngoài xét nghiệm huyết thanh chẩn đoán còn có xét nghiệm:",
  },
  {
    answers: ["a. Đỉnh xuống dưới", "b. Nền lên trên", "c. Mặt trước – sau*", "d. Mặt trong – mặt ngoài"],
    question: "Câu 622: Xương chũm là một khối xương hình nón cụt bao gồm các thành phần sau, NGOẠI TRỪ:",
  },
  {
    answers: ["a. Ho khan", "b. Co lõm các cơ hô hấp phụ", "c. Tím tái", "d. Khó thở vào, chậm*"],
    question: "Câu 623: Dấu hiệu xác định có khó thở thanh quản:",
  },
  {
    answers: ["a. Cố định*", "b. Kích thước", "c. Số lượng", "d. Vị trí"],
    question: "Câu 624: Đánh giá tiên lượng khi khám hạch dựa vào đặc điểm:",
  },
  {
    answers: [
      "a. Phẫu thuật tiệt căn xương chũm",
      "b. Các phẫu thuật trên*",
      "c. Mở xương chũm phối hợp",
      "d. Sào bào thượng nhĩ",
    ],
    question: "Câu 625: Viêm tai xương chũm có Cholesteatoma điều trị thích hợp nhất là:",
  },
  {
    answers: ["a. Nghẹt mũi kéo dài", "b. Phát âm", "c. Giảm hoặc mất mùi", "d. Biến dạng*"],
    question: "Câu 626: Di chứng ảnh hưởng nặng nề của chấn thương mũi là:",
  },
  {
    answers: ["a. Làm sạch", "b. Phát âm*", "c. Làm ấm", "d. Làm ẩm"],
    question: "Câu 627: Niêm mạc mũi có các chức năng sau, ngoại trừ:",
  },
  {
    answers: ["a. > 90db*", "b. > 80db", "c. > 100db", "d. > 110db"],
    question: "Câu 628: Có thể gây điếc nghề nghiệp khi tiếp xúc thường xuyên với tiếng ồn:",
  },
  {
    answers: ["a. 2 xoang trán không bằng nhau", "b. 2 xoang trán bằng nhau", "c. Xoang trán kém phát triển", "d. To*"],
    question: "Câu 629: Kiểu xoang trán nào dễ bị vỡ:",
  },
  {
    answers: [
      "a. Viêm tấy niêm mạc thực quản",
      "b. Có biến chứng áp xe",
      "c. Trầy xước niêm mạc thực quản nhiều",
      "d. Các trường hợp trên*",
    ],
    question: "Câu 630: Đặt ống sonde dạ dày sau soi trong trường hợp:",
  },
  {
    answers: ["a. 3.3*", "b. 1.4", "c. 1.3", "d. 2.3"],
    question: "Câu 631: Răng nào sau đây có khả năng gây viêm xoang hàm, NGOẠI TRỪ:",
  },
  {
    answers: ["a. Chích rạch màng nhĩ*", "b. Corticoid", "c. Dùng thuốc rỏ tai", "d. Kháng sinh"],
    question: "Câu 632: Điều trị để giải quyết căn bản nhất là:",
  },
  {
    answers: ["a. Đè lưỡi khám họng", "b. Chụp x-quang tim phổi", "c. Cả 3 câu trên đều sai*", "d. Nội soi mũi họng"],
    question: "Câu 633: Viêm thanh quản cấp đang khó thở không nên làm là:",
  },
  {
    answers: [
      "a. Hạch sau tai sưng đau.",
      "b. Tất cả đều đúng.",
      "c. Hạch sau góc hàm sưng đau.*",
      "d. Hạch sau hàm sưng đau.",
    ],
    question: "Câu 634: Hạch viêm trong viêm họng giả mạc trắng thông thường có đặc điểm:",
  },
  {
    answers: ["a. Áp xe Amidan", "b. Viêm tấy quanh Amidan ", "c. Sỏi Amidan*", "d. Viêm Amidan cấp"],
    question: "Câu 635: Các thể viêm Amidan sau có thể có chỉ định cắt Amidan:",
  },
  {
    answers: ["a. Trước", "b. Dưới*", "c. Bên", "d. Trên-sau"],
    question: "Câu 636: Thành của vòm là mặt phẳng ảo, nằm ngang qua mặt lưng màn hầu là ở:",
  },
  {
    answers: ["a. Tiểu đường", "b. Tăng bạch cầu đa nhân*", "c. Bệnh tạo keo", "d. Lupus ban đỏ"],
    question: "Câu 637: Bệnh nào sau đây là bệnh toàn thân liên quan đến viêm họng:",
  },
  {
    answers: ["a. Carina", "b. Phế quản*", "c. Thanh quản", "d. Khí quản"],
    question: "Câu 638: Vị trí dị vật thường gặp nhiều ở:",
  },
  {
    answers: ["a. U xơ vòm", "b. U nhú đảo ngược*", "c. Sa màng não", "d. Ung thư vòm"],
    question: "Câu 639: Vùng sau trên của vòm ở bệnh nhân trên 40 tuổi có thể nghĩ đến bệnh, ngoại trừ:",
  },
  {
    answers: [
      "a. Nhỏ, dài, cắm vào dây thanh",
      "b. Mắc kẹt ở thanh môn*",
      "c. Lọt vào khí quản",
      "d. Lọt vào phế quản",
    ],
    question: "Câu 640: Vị trí dị vật gây khó thở thanh quản cấp tính thường:",
  },
  {
    answers: ["a. Các yếu tố trên*", "b. Epstein Barr virus", "c. Micken", "d. Mitrosamine"],
    question: "Câu 641: Yếu tố ngoại lai liên quan nhiều đến ung thư vòm họng:",
  },
  {
    answers: [
      "a. Tiền đình trở nên hồng đỏ",
      "b. Dây thanh phù nề ít",
      "c. Tiết nhầy nhiều ở mép trước*",
      "d. Dây thanh khép không kín",
    ],
    question: "Câu 642: Viêm thanh quản cấp xuất tiết thông thường dây thanh có đặc điểm sau, ngoại trừ:",
  },
  {
    answers: [
      "a. 3 xương con (tiểu cốt)",
      "b. Thấu kính có 6 mặt",
      "c. 2 tầng: attique và atrium",
      "d. Thấu kính mặt lồi*",
    ],
    question: "Câu 643: Hòm nhĩ gồm các thành phần sau, NGOẠI TRỪ:",
  },
  {
    answers: [
      "a. Bé trai nhiều gấp 2 lần bé gái",
      "b. Thường do H.influenzae*",
      "c. Tuổi thường gặp từ 1 – 3 tuổi",
      "d. Gặp nhiều vào mùa lạnh",
    ],
    question: "Câu 644: Viêm thanh quản hạ thanh môn có các đặc trưng sau, NGOẠI TRỪ:",
  },
  {
    answers: ["a. Chảy máu mũi *", "b. Chóng mặt", "c. Nhức đầu", "d. Ho"],
    question: "Câu 645: Triệu chứng thường gặp nhất liên quan đến bệnh cao huyết áp:",
  },
  {
    answers: ["a. Đau nhức các cơ", "b. Nhức đầu", "c. Sốt", "d. Đau họng*"],
    question: "Câu 646: Triệu chứng chủ yếu của viêm họng cấp là:",
  },
  {
    answers: ["a. Liệt dây TK VII", "b. Viêm tắc xoang TM bên", "c. Áp xe não", "d. Viêm màng não*"],
    question: "Câu 647: Biến chứng thần kinh thường gặp trong các bệnh tai mũi họng là:",
  },
  {
    answers: ["a. Dùng kháng sinh mạnh", "b. Khâu cắt lọc vết thương", "c. Chống khó thở*", "d. Chống sốc"],
    question: "Câu 648: Trong chấn thương thanh quản, điều trị quan trọng và đầu tiên phải là:",
  },
  {
    answers: [
      "a. Kháng viêm tại chỗ và toàn thân",
      "b. Kháng sinh liều cao",
      "c. Phẫu thuật cắt bỏ dây thanh và làm giải phẫu bệnh*",
      "d. Chấm bằng Nitrate bạc",
    ],
    question: "Câu 649: Bạch sản thanh quản được điều trị chủ yếu bằng:",
  },
  {
    answers: [
      "a. Nạo sàng qua mũi kinh điển",
      "b. Mở lỗ thông qua khe dưới",
      "c. Mổ xoang hàm qua rãnh lợi môi",
      "d. Phẫu thuật nội soi chức năng*",
    ],
    question: "Câu 650: Phương pháp phẫu thuật xoang có nhiều ưu điểm nhất hiện nay là:",
  },
  {
    answers: ["a. Ung thư phổi", "b. Lao phổi", "c. Viêm thanh quản lao*", "d. Ung thư dây thanh"],
    question: "Câu 651: Một bệnh nhân ho ra máu, hiện khàn tiếng nhiều, chẩn đoán được nghĩ đến là:",
  },
  {
    answers: ["a. Kanamycine", "b. Streptomycine", "c. Amoxilline*", "d. Gentamycine"],
    question: "Câu 652: Các loại thuốc sau đây có thể gây độc cho tai trong, NGOẠI TRỪ:",
  },
  {
    answers: ["a.1000, 2000, 3000", "b. 1000, 4000, 8000", "c. 2000, 4000, 8000", "d. 500, 1000, 2000*"],
    question: "Câu 653: Nghe kém đường khí trung bình chủ yếu ở 3 tần số sau (Hz): ",
  },
  { answers: ["a. IgM", "b. IgA*", "c. IgG", "d. IgE"], question: "Câu 654: Kháng thể V.A sản xuất ra chủ yếu là:" },
  {
    answers: ["a. Rối loạn nuốt*", "b. Viêm hạch cổ kéo dài.", "c. Viêm Amidan tái hồi 4 lần/năm.", "d. Hơi thở hôi"],
    question: "Câu 655: Chỉ định tuyệt đối cắt Amidan:",
  },
  {
    answers: [
      "a. Soi thanh quản qua gương*",
      "b. Nghi ngờ chuyển tuyến trên sớm",
      "c. Nội soi thanh quản",
      "d. Điều trị kháng sinh kháng viêm sớm ",
    ],
    question: "Câu 656: Ở tuyến huyện, để phát hiện sớm tổn thương ung thư cần phải:",
  },
  {
    answers: ["a. Thủng rộng", "b. Thủng nhiều chỗ*", "c. Thủng ở sau trên", "d. Thủng trung tâm"],
    question: "Câu 657: Đặc điểm màng nhĩ thủng do lao tai:",
  },
  {
    answers: [
      "a. Nghẹt mũi một bên + chảy mủ nhầy*",
      "b. Chảy dịch hồng nhầy máu cá một bên",
      "c. Chảy mũi, nhầy mủ",
      "d. Nghẹt mũi thường xuyên",
    ],
    question: "Câu 658: Một dấu hiệu cho phép nghĩ đến dị vật mũi bỏ quên là:",
  },
  {
    answers: ["a. Sưng nề vùng mũi má", "b. Chảy mủ đục", "c. Nghẹt mũi liên tục, khó thở", "d. Mắt*"],
    question: "Câu 659:",
  },
  {
    answers: [
      "a. Thiểu năng tuyến giáp",
      "b. Dài mỏm trâm",
      "c. Viêm họng teo",
      "d. Bệnh trào ngược dạ dày- thực quản*",
    ],
    question: "Câu 660: Loạn cảm họng liên quan đến bệnh nào nhiều nhất:",
  },
  {
    answers: ["a. Viêm họng mạn tính", "b. Trào ngược dịch dạ dày*", "c. Viêm xoang sau", "d. Dài mỏm trâm"],
    question: "Câu 661: Loạn cảm họng có nhiều nguyên nhân, có một số nguyên nhân không thuộc cơ quan tai mũi họng là:",
  },
  {
    answers: [
      "a. Bệnh tích thâm nhiễm là chủ yếu",
      "b. Chúng rất nhạy với tia",
      "c. Thể ít gặp*",
      "d. Hiện điện, đồng thời với hiệu giá kháng thể EBV cao",
    ],
    question: "Câu 662: Ung thư biểu mô biệt hóa kém ở vòm có các đặc điểm sau, NGOẠI TRỪ:",
  },
  {
    answers: [
      "a. Trẻ nhỏ dưới 5 tuổi",
      "b. Gặp nhiều vào mùa mưa",
      "c. Trẻ học trong trường mẫu giáo*",
      "d. Khí hậu ẩm thấp, ô nhiễm",
    ],
    question: "Câu 663: Các điều kiện thuận lợi sau làm viêm V.A, NGOẠI TRỪ:",
  },
  {
    answers: ["a. Thuốc co mạch.", "b. A, B đúng.", "c. Nước muối sinh lý.*", "d. Nước cất."],
    question: "Câu 664: Dung dịch rửa mũi thường dùng ở trẻ em khi bị viêm V.A:",
  },
  {
    answers: [
      "a. Xạ trị",
      "b. Cắt thanh quản bán phần + xạ trị",
      "c. Cắt thanh quản toàn phần + xạ trị*",
      "d. Xạ trị + hóa trị",
    ],
    question: "Câu 665: Phương pháp điều trị thích hợp được đưa ra là:",
  },
  {
    answers: [
      "a. Bơm rửa ống tai để lấy hết máu bầm*",
      "b. Đặt meche vào ống tai để ép da ống tai bị rách",
      "c. Lau sạch ống tai bằng gòn",
      "d. Dùng kháng sinh, kháng viêm",
    ],
    question: "Câu 666: Xử lý chấn thương thủng màng nhĩ bao gồm các biện pháp sau, NGOẠI TRỪ:",
  },
  {
    answers: ["a. Viêm phổi", "b. Nhiễm trùng tiểu", "c. Phế quản phế viêm*", "d. Nhiễm trùng đường tiêu hóa"],
    question: "Câu 667: Biến chứng nhiễm trùng toàn thân thường gặp nhất là:",
  },
  {
    answers: ["a. Cân nặng", "b. Các yếu tố trên*", "c. Mức độ V.A to", "d. Độ rộng vòm họng"],
    question: "Câu 668: Tình trạng nghẹt mũi trong V.A to tùy thuộc vào:",
  },
  {
    answers: ["a. Eo cơ hoành", "b. Miệng thực quản*", "c. Phế quản gốc trái", "d. Quai động mạch chủ"],
    question: "Câu 669: Em bé mắc đồng xu thường nằm ở:",
  },
  {
    answers: ["a. Phẫu thuật*", "b. Xạ trị - phẫu thuật", "c. Xạ trị", "d. Hóa trị"],
    question: "Câu 670: Ung thư vòm điều trị chủ yếu là, ngoại trừ:",
  },
  {
    answers: ["a. Tự khỏi", "b. Kéo dài lặng lẽ*", "c. Biến chứng nguy hiểm", "d. Điếc tiếp nhận"],
    question: "Câu 671: Diễn tiến thường gặp nhất của viêm tai giữa mạn tính mủ:",
  },
  {
    answers: [
      "a. Xâm lấn hạ thanh môn",
      "b. Toàn bộ dây thanh",
      "c. Tất cả đều đúng",
      "d. Xâm lấn hạ họng- hẹp phễu thanh thiệt*",
    ],
    question: "Câu 672: Triệu chứng ho trong ung thư dây thanh khi khối ung thư đã xâm lấn:",
  },
  { answers: ["a. Clarithromycin", "b. Zinmax", "c. Penicilline", "d. Augmentin"], question: "Câu 673:" },
  {
    answers: ["a. Chảy máu mũi một bên", "b. Ù tai 1 bên*", "c. Nghẹt mũi", "d. Hạch sau góc hàm"],
    question: "Câu 674: Ung thư vòm xuất phát từ thành bên họng, triệu chứng xuất hiện sớm thường gặp nhất là:",
  },
  {
    answers: ["a. Liên sườn", "b. Thượng ức", "c. Thượng đòn", "d. Các vùng trên*"],
    question: "Câu 675: Cơ hô hấp phụ nào co thắt trong khó thở thanh quản:",
  },
  {
    answers: ["a. Các ưu điểm trên*", "b. Ít chảy máu", "c. Ít tái phát", "d. Không phạm loa vòi nhĩ"],
    question: "Câu 676: Ưu điểm của phương pháp điều trị V.A bằng cắt hút liên tục:",
  },
  {
    answers: [
      "a. V.A to có viêm thanh quản mạn tính.",
      "b. V.A to có viêm tai giữa.",
      "c. V.A to có chảy mũi đục.",
      "d. Tất cả câu trên.*",
    ],
    question: "Câu 677: Chỉ định nạo V.A chủ yếu là:",
  },
  {
    answers: ["a. Khí quản*", "b. Thanh quản", "c. Phế quản gốc", "d. Phế quản phân thùy"],
    question: "Câu 678: Dấu hiệu “lật phật” cờ bay thường tương ứng với dị vật ở:",
  },
  {
    answers: ["a. Hirtz", "b. Sọ nghiêng*", "c. Blondeau", "d. Sọ thẳng"],
    question: "Câu 679: Tư thế X quang có thể giúp xác định vỡ thành sau xoang trán là:",
  },
  {
    answers: ["a. Dị ứng", "b. Vi khuẩn*", "c. Siêu vi", "d. Nấm"],
    question: "Câu 680: Nguyên nhân chủ yếu của viêm thanh thiệt cấp:",
  },
  {
    answers: [
      "a. Co lõm các cơ hô hấp",
      "b. Khó thở thì thở vào, thở chậm",
      "c. Có tiếng rít thanh quản",
      "d. Khó thì thở ra, thở chậm*",
    ],
    question: "Câu 681: Khó thở thanh quản độ 2 bao gồm các triệu chứng sau, NGOẠI TRỪ:",
  },
  {
    answers: [
      "a. Chấn thương thần kinh thanh quản trên",
      "b. Tụ máu thanh khí quản",
      "c. Phù nề thanh quản",
      "d. Trật khớp sụn phễu*",
    ],
    question: "Câu 682: Sau chấn thương thanh quản, người bệnh bị khàn tiếng đơn thuần, phải nghĩ đến:",
  },
  {
    answers: [
      "a. Vòi nhĩ giữ thăng bằng áp lực giữa khoang họng và tai giữa.*",
      "b. Vòi nhĩ liên thông giữa họng và hòm nhĩ.",
      "c. Họng là ngã tư đường ăn-đường thở.",
      "d. Liên quan đến nhu động của vòi nhĩ.",
    ],
    question: "Câu 683: Chức năng nghe của họng liên quan với:",
  },
  {
    answers: ["a. Ống tai ngoài.", "b. Họng.", "c. Thanh quản.*", "d. Mũi."],
    question: "Câu 684: Giả mạc trong bạch hầu ác tính nguy hiểm khi xuất hiện ở:",
  },
  { answers: ["a. IgA.*", "b. IgM.", "c. IgG.", "d. IgE."], question: "Câu 685: Kháng thể V.A sản xuất chủ yếu là:" },
  {
    answers: ["a. Khó thở *", "b. Ho khan", "c. Khàn tiếng", "d. Cảm giác khô, khó chịu ở trong họng"],
    question: "Câu 686: Triệu chứng không phải của viêm thanh quản mạn tính ở người lớn là:",
  },
  {
    answers: ["a. Thành bên.", "b. Tất cả điều đúng.", "c. Bờ dưới.", "d. Mặt trước.*"],
    question: "Câu 687: Eo họng nằm ở:",
  },
  {
    answers: ["a. Khó thở thanh quản.*", "b. Viêm cơ tim.", "c. Chuyển sản thể ác tính.", "d. Viêm thanh quản cấp."],
    question: "Câu 688: Biến chứng thường gặp có thể gây tử vong trong bệnh viêm họng bạch hầu:",
  },
  {
    answers: [
      "a. Đa số tự lành*",
      "b. Bệnh diễn tiến kéo dài",
      "c. Dẫn lưu mủ kém",
      "d. Các mép rách của lỗ thủng khó lành",
    ],
    question: "Câu 689: Hậu quả của màng nhĩ tự vỡ có các đặc điểm sau, NGOẠI TRỪ:",
  },
  {
    answers: ["a. Otofa", "b. Lincocine", "c. Ciprofloxacin", "d. Neomycine*"],
    question: "Câu 690: Thuốc sử dụng tại chỗ có thể gây điếc:",
  },
  {
    answers: ["a. Mất bạch cầu hạt", "b. Bệnh bạch cầu", "c. Các bệnh trên *", "d. Tăng bạch cầu đơn nhân"],
    question: "Câu 691: Bệnh về máu sau gây viêm họng:",
  },
  {
    answers: [
      "a. Không khí trong hòm nhĩ giảm",
      "b. Mất thăng bằng áp lực tai ngoài và trong hòm nhĩ*",
      "c. Có sự xuất huyết và xuất tiết trong hòm nhĩ",
      "d. Ứ trệ thông khí tai giữa",
    ],
    question: "Câu 692: Trong viêm tai giữa cấp, nguyên nhân của xuất tiết trong hòm nhĩ là do:",
  },
  {
    answers: ["a. Trung tâm màng nhĩ", "b. Góc sau trên*", "c. ¼ sau dưới", "d. ¼ trước dưới"],
    question: "Câu 693: Trong viêm thượng nhĩ khi khám bằng đèn soi tai vị trí lỗ thủng thường ở:",
  },
  {
    answers: ["a. Rales phổi", "b. Thở nhanh", "c. Khó thở chậm*", "d. Khó thở cả 2 thì"],
    question: "Câu 694: Khó thở do viêm phổi có các đặc điểm sau, ngoại trừ:",
  },
  {
    answers: ["a. Ngứa mũi*", "b. Chảy mũi", "c. Hắt hơi", "d. Nghẹt mũi"],
    question: "Câu 695: Triệu chứng chủ yếu nghĩ đến viêm mũi dị ứng:",
  },
  {
    answers: ["a. Điện thính giác thân não", "b. MRI*", "c. X quang tư thế Stenvers", "d. Âm ốc tai"],
    question: "Câu 696: Chẩn đoán u dây VIII chính xác dựa vào:",
  },
  {
    answers: ["a. Điếc do vàng da nhân", "b. Sanh non", "c. Nhau tiền đạo*", "d. Sang chấn trong lúc sinh"],
    question: "Câu 697: Nghe kém xảy ra trong lúc sinh thường do, ngoại trừ:",
  },
  {
    answers: ["a. Dây XI*", "b. Dây X", "c. Dây IX", "d. Tất cả các dây thần kinh"],
    question: "Câu 698: Hội chứng Garcin trong ung thư vòm tổn thương các dây thần kinh sau:",
  },
  {
    answers: [
      "a. Thường điếc 1 tai",
      "b. Ở 3 dãy tần số liên tục",
      "c. Mất sức nghe trên 30dB",
      "d. Xảy ra đột ngột sau 72h*",
    ],
    question: "Câu 699: Điếc đột ngột gồm các triệu chứng sau, ngoại trừ:",
  },
  {
    answers: ["a. ¼ sau trên", "b. Trung tâm", "c. ¼ trước dưới", "d. ¼ trước trên*"],
    question: "Câu 700: Vị trí lỗ thủng màng nhĩ có thể làm tổn thương xương con:",
  },
  {
    answers: ["a. Nhị thân", "b. Ức đòn chũm", "c. Vai móng*", "d. Thang"],
    question: "Câu 701: Cơ phân chia thành tam giác cảnh và tam giác cảnh dưới là:",
  },
  {
    answers: ["a. Thần kinh giao cảm", "b. Động mạch cảnh trong", "c. Thần kinh sọ số VII*", "d. Tĩnh mạch cảnh trong"],
    question: "Câu 702: Khoảng sau trâm hay khoảng cách sau và dưới mang tai bao gồm các thành phần sau, NGOẠI TRỪ:",
  },
  {
    answers: ["a. Làm thuốc tai hằng ngày*", "b. Kháng viêm", "c. Kháng sinh", "d. Hút mủ ở tai"],
    question: "Câu 703: Khi màng nhĩ đã thủng, điều trị chủ yếu là:",
  },
  {
    answers: ["a. Gentamycine", "b. Penicilline", "c. Metronidazol", "d. Cephalosporin thế hệ thứ III*"],
    question: "Câu 704: Kháng sinh nào được lựa chọn trước tiên trong viêm màng não do tai là:",
  },
  {
    answers: ["a. Đau tai", "b. Chảy mủ tai*", "c. Giảm thính lực", "d. Ù tai"],
    question: "Câu 705: Trong viêm tai giữa mạn tính mủ, triệu chứng chủ yếu và thường gặp nhất là:",
  },
  { answers: ["a. Nấm miệng, họng", "b. Mất khứu", "c. Loét do sarcoma Kaposi", "d. Điếc*"], question: "Câu 706:" },
  {
    answers: [
      "a. Yếu tố gia đình*",
      "b. Thanh thiếu niên, tự khỏi khi đến tuổi trưởng thành",
      "c. Rối loạn nội tiết",
      "d. Thanh thiếu niên, chảy ít, tái diễn và thường tự cầm",
    ],
    question: "Câu 707: Chảy máu mũi vô căn thường gặp trong trường hợp sau, NGOẠI TRỪ:",
  },
  {
    answers: ["a. Viêm xoang hàm do răng", "b. Chấn thương xoang", "c. Các loại trên*", "d. U xoang hàm"],
    question: "Câu 708: Chụp X quang Blondeau mũi xoang hàm một bên thường do:",
  },
  {
    answers: ["a. Khàn cứng", "b. Kiểu thiếu hơi", "c. Kiểu ngậm hột thị*", "d. Khàn ướt"],
    question: "Câu 709: Biến đổi giọng nói trong viêm thanh quản cấp là:",
  },
  {
    answers: [
      "a. Chảy máu",
      "b. Tổn thương thần kinh",
      "c. Ngưng tim, ngưng thở trong khi mở*",
      "d. Tổn thương thực quản",
    ],
    question: "Câu 710: Ở trẻ em, biến chứng thường gặp trong khi mở khí quản là:",
  },
  {
    answers: ["a. Dịch loãng vàng", "b. Dịch đặc xanh", "c. Các dịch trên*", "d. Dịch loãng đục"],
    question: "Câu 711: Tính chất dịch mũi chứng tỏ có thể nhiễm khuẩn:",
  },
  { answers: ["a. Dây III*", "b. Dây IV", "c. Dây V", "d. Dây VI"], question: "Câu 712: Dấu hiệu sụp mi do liệt dây:" },
  {
    answers: ["a. Trẻ em*", "b. Giáo viên", "c. MC", "d. Ca sỹ"],
    question: "Câu 713: Hạt xơ dây thanh thường gặp ở, ngoại trừ:",
  },
  {
    answers: ["a. Cắt amidan*", "b. Kháng viêm", "c. Rạch thoát lưu mủ", "d. Kháng sinh"],
    question: "Câu 714: Chống chỉ định trong điều trị áp xe amidan:",
  },
  {
    answers: ["a. Ăn thức ăn nguội", "b. Tất cả đúng*", "c. Vệ sinh răng miệng", "d. Kháng sinh, kháng viêm, giảm đau"],
    question: "Câu 715: Xử lý bỏng niêm mạc họng do nhiệt:",
  },
  {
    answers: [
      "a. Dùng kháng sinh ngay từ đầu",
      "b. Tùy từng kinh nghiệm của từng thầy thuốc*",
      "c. Sau 3 ngày viêm cấp ho có đàm, sốt cao",
      "d. Không dùng kháng sinh, điều trị triệu chứng",
    ],
    question: "Câu 716: Điều trị kháng sinh trong viêm amidan cấp:",
  },
  {
    answers: [
      "a. Nhiễm trùng huyết",
      "b. Nhiễm trùng lan rộng",
      "c. Nhiễm độc",
      "d. Vỡ ổ áp xe gây tắc nghẽn đường thở*",
    ],
    question: "Câu 717:",
  },
  {
    answers: [
      "a. Khám trong phòng yên tĩnh",
      "b. Tai đối diện phải được bịt kín",
      "c. Khám tai nghe rõ trước rồi mới đến tai điếc",
      "d. Người bệnh phải đứng đối diện với thầy thuốc*",
    ],
    question: "Câu 718: Khi đo sức nghe bằng lời nói cần phải đảm bảo một số quy tắc sau, NGOẠI TRỪ:",
  },
  {
    answers: [
      "a. Viêm xoang tùy theo tuổi",
      "b. Dễ bị nhiễm trùng lan tỏa",
      "c. Khi bị viêm thì dễ bị phù nề",
      "d. Thường viêm niêm mạc thoái hóa*",
    ],
    question: "Câu 719: Viêm xoang trẻ em có các đặc điểm sau, NGOẠI TRỪ:",
  },
  {
    answers: ["a. Lông thú", "b. Nấm mốc", "c. Lông vải, mền", "d. Bụi nhà*"],
    question: "Câu 720: Dị nguyên trong nhà thường gặp nhiều nhất là:",
  },
  {
    answers: [
      "a. Xét nghiệm tế bào tróc vòm họng",
      "b. Tìm tế bào ung thư ở máu ngoại vi",
      "c. Miễn dịch chẩn đoán (IgA/VCA)*",
      "d. Sinh thiết vòm họng",
    ],
    question: "Câu 721: Phương pháp phát hiện tốt nhất trong điều tra ung thư vòm ở cộng đồng là:",
  },
  {
    answers: [
      "a. Kháng sinh",
      "b. Chống phù não",
      "c. Thoát lưu mủ, giải áp nội sọ*",
      "d. Giải quyết bệnh tích xương chũm",
    ],
    question: "Câu 722: Điều trị cấp cứu áp xe não do tai quan trọng nhất là:",
  },
  {
    answers: ["a. Vận mạch", "b. K vòm giai đoạn cuối", "c. Viêm xoang*", "d. Viêm tai giữa"],
    question: "Câu 723: Chuyên khoa tai mũi họng triệu chứng nhức đầu gặp nhiều trong bệnh:",
  },
  {
    answers: ["a. Viêm xoang sàng cấp", "b. Viêm xoang hàm cấp", "c. Viêm tai giữa cấp", "d. Viêm thanh khí phế quản*"],
    question: "Câu 724: Biến chứng thường gặp nhất của viêm mũi cấp ở trẻ dưới 3 tuổi:",
  },
  {
    answers: ["a. Đau nhức", "b. Trầy xước niêm mạc", "c. Dễ nhiễm trùng", "d. Các yếu tố trên*"],
    question: "Câu 725: Hậu quả của việc nhét Meche mũi cầm máu:",
  },
  {
    answers: [
      "a. Có tiền sử chảy mủ tai",
      "b. Sốt cao lạnh run*",
      "c. Ấn vào rãnh sau tai người bệnh đau",
      "d. Màng nhĩ thủng rộng",
    ],
    question: "Câu 726: Triệu chứng cho phép nghĩ đến chẩn đoán trên là:",
  },
  {
    answers: ["a. Tình trạng tri giác", "b. Tình trạng khó thở", "c. Tuổi", "d. Các yếu tố trên*"],
    question: "Câu 727: Đánh giá mức độ trầm trọng của khó thở thanh quản căn cứ vào:",
  },
  {
    answers: ["a. III", "b. II", "c. IV*", "d. I"],
    question:
      "Câu 728: Kết quả giải phẫu bệnh là ung thư biểu mô không biệt hóa, xâm lấn. Người bệnh ung thư vào giai đoạn:",
  },
  {
    answers: [
      "a. Các yếu tố trên.*",
      "b. Hút thuốc lá nhiều.",
      "c. Thời tiết lạnh, ẩm thấp.",
      "d. Tất cả mọi lứa tuổi.",
    ],
    question: "Câu 729: Viêm họng thường gặp ở:",
  },
  {
    answers: ["a. 12%", "b. 9%", "c. 7%*", "d. Dưới 15%"],
    question: "Câu 730: Tỉ lệ viêm giữa mạn tính so với các bệnh tai mũi họng nói chung thường là:",
  },
  {
    answers: [
      "a. Các triệu chứng kèm theo",
      "b. Các vấn đề trên*",
      "c. Hoàn cảnh xuất hiện nghe kém",
      "d. Thời gian nghe kém",
    ],
    question: "Câu 731: Bệnh nhân nghe kém cần khai thác những vấn đề sau:",
  },
  {
    answers: ["a. Amidan Frankel", "b. Amidan Luschka", "c. Amidan Gerlach", "d. Amidan Palatine*"],
    question: "Câu 732: Amidan khẩu cái còn được gọi là:",
  },
  {
    answers: [
      "a. V.A là một khối tân bào.",
      "b. V.A sát với vòi nhĩ.",
      "c. V.A to làm tắc vòi nhĩ.*",
      "d. V.A là “lò viêm” ;",
    ],
    question: "Câu 733: V.A to có thể gây viêm tai giữa thanh dịch là do:",
  },
  {
    answers: ["a. 40db", "b. 30db", "c. < 20db*", "d. 10db"],
    question: "Câu 734: Vẫn được coi là bình thường khi sức nghe giảm sút:",
  },
  {
    answers: [
      "a. Khó thở thanh quản nhẹ, tái phát nhiều lần",
      "b. Ho khan từng đợt kéo dài",
      "c. Khàn tiếng*",
      "d. Ho khan kéo dài + khó thở thanh quản",
    ],
    question: "Câu 735: Triệu chứng chủ yếu và kéo dài của viêm thanh quản mạn tính ở người lớn là:",
  },
  {
    answers: ["a. Có giả mạc*", "b. Hạch cổ sưng to", "c. Sốt", "d. Đau rát họng"],
    question: "Câu 736: Viêm họng đỏ thông thường do virus APC bao gồm các triệu chứng sau, ngoại trừ:",
  },
  {
    answers: [
      "a. Quá phát của biểu mô",
      "b. Sự sừng hóa dây thanh*",
      "c. Quá phát của lớp đệm dưới niêm mạc",
      "d. Tế bào trụ biến thành tế bào lát nhiều lớp",
    ],
    question: "Câu 737: Dấu hiệu thực thể sau gặp trong viêm thanh quản quá phát, NGOẠI TRỪ:",
  },
  {
    answers: ["a. Vàng, loãng", "b. Xanh, loãng", "c. Chocolate", "d. Thối, khắm*"],
    question: "Câu 738: Tính chất của mủ tai chứng tỏ có tổn thương xương chũm:",
  },
  {
    answers: ["a. IX", "b. X", "c. XI", "d. XII*"],
    question: "Câu 739: Hội chứng lồi cầu trước liệt dây thần kinh số:",
  },
  {
    answers: [
      "a. Vệ sinh môi trường sống, nguồn nước",
      "b. Loại bỏ các yếu tố gây viêm xoang*",
      "c. Loại bỏ dị nguyên gây dị ứng",
      "d. Tránh nhiễm khuẩn đường hô hấp trên",
    ],
    question: "Câu 740: Dự phòng viêm xoang có hiệu quả nhất là:",
  },
  {
    answers: ["a. Phù nề", "b. Xuất tiết", "c. Viêm tấy*", "d. Loét"],
    question: "Câu 741: Viêm thanh quản hạ thanh môn, thể lâm sàng có tiên lượng nặng là:",
  },
  {
    answers: ["a. Adenovirus", "b. Influenza", "c. Parainlfuenza", "d.Rhinovirus*"],
    question: "Câu 742: Siêu vi gặp nhiều nhất gặp trong quá trình viêm mũi xoang cấp là:",
  },
  {
    answers: ["a. Thủng màng nhĩ", "b. Chóng mặt", "c. Biến chứng xương chũm", "d. Giảm thính lực*"],
    question: "Câu 743: Viêm tai giữa nếu không điều trị sẽ gây ra:",
  },
  {
    answers: [
      "a. Khó thở do co thắt các tiểu phế quản ",
      "b. Khó thở do viêm thanh quản cấp",
      "c. Khó thở do viêm phổi cấp",
      "d. Khó thở do viêm thanh quản hạ thanh môn*",
    ],
    question: "Câu 744: Trong các trường hợp sau mở khí quản là phù hợp:",
  },
  {
    answers: ["a. Chảy máu tai", "b. Chóng mặt", "c. Đau nhói tai, ù tai*", "d. Điếc đột ngột"],
    question: "Câu 745: Triệu chứng chủ yếu của chấn thương tai giữa do áp lực:",
  },
  {
    answers: ["a. Nẹp phễu - thanh thiệt*", "b. Tầng giữa thanh môn", "c. Tiền đình thanh quản", "d. Hạ thanh môn"],
    question: "Câu 746: Nuốt đau là dấu hiệu có sớm của ung thư thanh quản:",
  },
  {
    answers: ["a. Thể sarcoma", "b. Biệt hóa cao", "c. Không biệt hóa*", "d. Biệt hóa vừa"],
    question: "Câu 747: Kháng thể kháng – EBV thường tăng cao trong ung thư vòm thể biểu mô tế bào vẩy:",
  },
  {
    answers: ["a. Xoang sàng", "b. Xoang bướm", "c. Xoang hàm*", "d. Xoang trán"],
    question: "Câu 748: Bệnh lý ở răng có thể gây viêm xoang:",
  },
  {
    answers: ["a. Chóng mặt", "b. Các triệu chứng trên*", "c. Nhức đầu", "d. Ù tai"],
    question: "Câu 749: Hội chứng khớp thái dương hàm có thể gây ra triệu chứng TMH:",
  },
  {
    answers: ["a. U thanh quản", "b. Các nguyên nhân trên*", "c. Lao thanh quản", "d. U nhú thanh quản"],
    question: "Câu 750: Khó thở thanh quản mạn tính thường gặp trong:",
  },
  {
    answers: [
      "a. Trung thất kéo lệch về bên có dị vật",
      "b. Một bên phổi mờ đặc",
      "c. Cơ hoành hạ thấp*",
      "d. Xương sườn sa xuống",
    ],
    question: "Câu 751: Dấu hiệu Holznecht trên X quang tim phổi trong dị vật đường thở bao gồm, ngoại trừ:",
  },
  {
    answers: [
      "a. Chống suy dinh dưỡng",
      "b. Điều trị tốt viêm mũi họng cấp*",
      "c. Hút dịch, mủ tại mũi",
      "d. Rỏ thông mũi",
    ],
    question: "Câu 752: Điều quan trọng nhất trong dự phòng viêm xoang sàng cấp ở trẻ em là:",
  },
  {
    answers: [
      "a. Thông qua các yếu tố trung gian",
      "b. Viêm niêm mạc mũi.",
      "c. Qua trung gian kháng thể IgE",
      "d. Niêm mạc mũi quá mẫn cảm",
    ],
    question: "Câu 753: Viêm mũi dị ứng là tình trạng:",
  },
  {
    answers: ["a. Sa màng não.*", "b. U xơ vòm.", "c. U nhú đảo ngược.", "d. Ung thư vòm."],
    question: "Câu 754: V.A có thể chẩn đoán nhầm với bệnh lý nào ở trẻ em :",
  },
  {
    answers: ["a. Triệu chứng toàn thân tốt*", "b. Ho khan", "c. Khó thở thanh quản", "d. Tiền sử viêm mũi họng cấp"],
    question: "Câu 755: Dấu hiệu có giá trị chẩn đoán trong viêm thanh quản hạ thanh môn ở trẻ em là:",
  },
  {
    answers: ["a. Cấu trúc của amidan", "b. Cơ địa", "c. Viêm nhiễm", "d. Các yếu tố trên*"],
    question: "Câu 756:Nguyên nhân chủ yếu gây viêm amidan:",
  },
  {
    answers: [
      "a. Viêm thanh quản thượng thanh môn*",
      "b. Viêm thanh quản hạ thanh môn",
      "c. Viêm thanh quản xuất tiết",
      "d. Viêm thanh thiệt",
    ],
    question: "Câu 757: Ở người lớn viêm thanh quản thường gặp các thể lâm sàng sau, ngoại trừ:",
  },
  {
    answers: ["a. Dị vật mũi trái*", "b. Viêm mũi cấp", "c. Viêm xoang cấp", "d. Viêm V.A cấp"],
    question: "Câu 758: Chẩn đoán được nghĩ trước tiên là:",
  },
  {
    answers: ["a. Viêm cơ tim*", "b. Viêm khớp", "c. Viêm vi cầu thận", "d. Viêm nội tâm mạc"],
    question: "Câu 759: Ổ viêm nhiễm vùng tai mũi họng có thể liên quan đến các bệnh, ngoại trừ:",
  },
  {
    answers: ["a. 3 triệu chứng trên *", "b. Mất ngủ", "c. Nhức đầu", "d. Ngủ gà"],
    question: "Câu 760: Viêm xoang sau có thể có triệu chứng sau:",
  },
  {
    answers: [
      "a. Chụp X quang tim phổi",
      "b. Tăng liều corticoid",
      "c. Đổi kháng sinh",
      "d. Hội chẩn với bác sĩ Tai Mũi Họng* ",
    ],
    question: "Câu 761: Thái độ xử trí đúng nhất là:",
  },
  {
    answers: [
      "a. Chủ yếu là triệu chứng “mượn” của các cơ quan khác",
      "b. Vùng vòm ở sâu khó khảo sát",
      "c. Các đặc điểm trên*",
      "d. Đa số u phát triển âm thầm kín đáo",
    ],
    question: "Câu 762: Ung thư vòm ở Việt Nam 80% chẩn đoán ở giai đoạn III và IV là do:",
  },
  {
    answers: ["a. Wegener", "b. Osler-Weber-Rendu*", "c. Lupus ban đỏ", "d. Hemophilia"],
    question: "Câu 763: Nguyên nhân bẩm sinh gây chảy máu mũi là bệnh:",
  },
  {
    answers: [
      "a. Phi công nhảy dù thiếu bảo hộ tai",
      "b.. Các trường hợp trên *",
      "c. Chấn thương trực tiếp tai ",
      "d. Thợ lặn thay đổi áp lực đột ngột",
    ],
    question: "Câu 764: Máu tụ hòm nhĩ có thể gặp trong:",
  },
  {
    answers: ["a. Kháng nấm", "b. Kháng sinh*", "c. Corticoid", "d. Kháng Histamine"],
    question: "Câu 765: Thuốc điều trị chính trong viêm thanh thiệt cấp là:",
  },
  {
    answers: [
      "a. Các nội dung trên*",
      "b. Số lần chảy máu mũi",
      "c. Thời gian chảy máu gần đây nhất",
      "d. Hiện tại chảy máu khi nào",
    ],
    question: "Câu 766: Yếu tố thời gian quan trọng nhất khi hỏi bệnh sử bệnh nhân chảy máu mũi:",
  },
  {
    answers: ["a. Leucose", "b. Tăng ure máu*", "c. Hemophilia", "d. U hạt Wegener"],
    question: "Câu 767: Bệnh lý do rối loạn đông máu bao gồm các bệnh sau, ngoại trừ:",
  },
  {
    answers: ["a. Dưới thanh môn", "b. Tiền đình thanh quản", "c. Thanh môn*", "d. Bờ thanh quản"],
    question: "Câu 768: Vị trí ung thư thanh quản, hạch ít gặp hơn là:",
  },
  {
    answers: [
      "a. Nghe kém 2 tai kèm ù tai",
      "b. Nghe kém 1 tai*",
      "c. Nghe kém 2 tai",
      "d. Nghe kém 1 tai kèm chóng mặt",
    ],
    question: "Câu 769: Nghe kém trong bệnh lý quai bị có đặc điểm sau:",
  },
  {
    answers: ["a. Cơ quan corti", "b. Dây VIII", "c. Ốc tai", "d. Hệ thống lông chuyển*"],
    question: "Câu 770: Tiếng ồn gây tổn thương bộ phận nào của tai:",
  },
  {
    answers: ["a. Kháng sinh", "b. Kháng viêm", "c. Mở khí quản*", "d. Thở oxy"],
    question: "Câu 771: Xử trí đúng nhất cần làm ngay là:",
  },
  {
    answers: ["a.Viêm cấp vùng mũi họng* ", "b. Dị ứng", "c. Chấn thương tai", "d.Thay đổi áp lực"],
    question: "Câu 772: Nguyên nhân chủ yếu gây viêm tai giữa cấp sung huyết :",
  },
  {
    answers: ["a. Nghe kém", "b. Nhức đầu", "c. Nghẹt mũi*", "d. Ù tai"],
    question: "Câu 773: Đau khớp thái dương hàm có thể gây ra các triệu chứng sau, NGOẠI TRỪ:",
  },
  {
    answers: ["a. Tổn thương thượng nhĩ", "b. Có thể tự tiêu*", "c. Suy giảm sức nghe nhiều", "d. Phá hủy xương"],
    question: "Câu 774: Cholesteatoma có tính chất sau, ngoại trừ:",
  },
  {
    answers: ["a. Sốt cao", "b. Chảy máu*", "c. Cả 3 đều đúng", "d. Lạnh run"],
    question: "Câu 775: Biến chứng thường gặp nhất sau nạo V.A là:",
  },
  {
    answers: ["a.Nuốt đau", "b.Nhiễm trùng ", "c.Chảy máu*", "d. Co thắt khí phế quản "],
    question: "Câu 776: Biến chứng thường làm bác sĩ Tai Mũi Họng lo lắng nhiều:",
  },
  {
    answers: ["a. Ciproloxacin", "b. Cephalosporine thế hệ thứ 3*", "c. Gentamycin", "d. Augmentin"],
    question: "Câu 777: Kháng sinh thích hợp được lựa chọn là:",
  },
  {
    answers: ["a. Dây thanh nhiều hạt xơ", "b. Dây thanh viêm dầy", "c. Hình ảnh loét *", "d. Dây thanh phù nề"],
    question: "Câu 778: Hình ảnh nội soi chẩn đoán viêm thanh quản lao:",
  },
  {
    answers: ["a. Hồi viêm", "b. Thính lực ngày càng giảm", "c. Bệnh tự khỏi*", "d. Diễn tiến lặng lẽ"],
    question: "Câu 779: Khả năng diễn tiến ít gặp trong viêm tai giữa mạn tính là:",
  },
  {
    answers: ["a. Hạ hầu", "b. Thượng thanh môn*", "c. Hạ thanh môn", "d. Thanh quản"],
    question: "Câu 780: Băng thanh thất nằm ở vị trí nào của thanh quản:",
  },
  {
    answers: ["a. Cephalosporin thế hệ III", "b. b và c đúng*", "c. Metronidazol", "d. Augmantin"],
    question: "Câu 781: Kháng sinh thích hợp được sử dụng trong dị vật thực quản giai đoạn nhiễm trùng:",
  },
  {
    answers: ["a. Viêm họng cấp", "b. Viêm Amidan quá phát", "c. Viêm mũi cấp", "d. Viêm V.A quá phát*"],
    question: "Câu 782: Nguyên nhân thường gặp nhất gây tắc vòi nhĩ ở trẻ em:",
  },
  {
    answers: [
      "a. Dùng nội soi ống cứng để xác định điểm chảy máu và cầm máu tại chỗ*",
      "b. Có nguồn sáng rõ để khám mũi trước",
      "c. Hút sạch máu với đèn clar để xác định điểm chảy máu",
      "d. Dùng gương soi để soi cửa mũi sau",
    ],
    question: "Câu 783: Muốn xác định vị trí chảy máu, tốt nhất phải:",
  },
  {
    answers: ["a. Vùng túi ngách", "b. Vỏ nang bạch huyết", "c. Biểu mô nang lưới", "d. Trung tâm mầm*"],
    question: "Câu 784: Tế bào miễn dịch B của V.A nằm ở:",
  },
  {
    answers: [
      "a. Hồi viêm gây biến chứng nguy hiểm*",
      "b. Tự khỏi",
      "c. Xơ nhĩ, giảm thính lực trầm trọng",
      "d. Tiến triển âm thầm, kín đáo",
    ],
    question: "Câu 785: Viêm tai giữa mạn tính mủ thường có diễn tiến:",
  },
  {
    answers: ["a. 12 tuổi*", "b. 15 tuổi", "c. 9 tuổi", "d. 6 tuổi"],
    question: "Câu 786: Lứa tuổi thấy rõ xoang bướm trên Xquang:",
  },
  {
    answers: ["a. 100%*", "b. 90%", "c. 50%", "d. 80%"],
    question: "Câu 787: Ung thư vòm giai đoạn toàn phát virus Epsteinbarr hiện diện:",
  },
  {
    answers: ["a. Âm thanh", "b. Chấn thương trực tiếp", "c. Khí áp*", "d. Sau phẫu thuật tai giữa"],
    question: "Câu 788: Dò ngoại dịch chủ yếu do:",
  },
  {
    answers: ["a. Vi khuẩn", "b. Viêm thanh quản cúm", "c. Viêm dị ứng", "d. Siêu vi trùng*"],
    question: "Câu 789: Viêm thanh quản cấp ở trẻ em, nguyên nhân thường là do:",
  },
  {
    answers: ["a. Tiêu hóa", "b. Hô hấp", "c. Phát âm", "d. Tất cả đều đúng*"],
    question: "Câu 790: Tổn thương ở họng có thể ảnh hưởng đến:",
  },
  {
    answers: ["a. Các nguyên nhân trên*", "b. Sâu răng", "c. Viêm tuyến nước bọt", "d. Hóc xương"],
    question: "Câu 791: Nguyên nhân gây viêm tấy hạch áp xe cạnh họng:",
  },
  {
    answers: ["a. Đau dây tam thoa *", "b. Nhức đầu vận mạch", "c. Viêm màng não", "d. Viêm xoang cấp"],
    question: "Câu 792: Dấu hiệu đau “cò súng” gặp trong bệnh sau:",
  },
  {
    answers: [
      "a. Dò thực – khí – phế quản phổi*",
      "b. Áp xe cạnh cổ",
      "c. Áp xe trung thất",
      "d. Nhiễm trùng niêm mạc thực quản",
    ],
    question: "Câu 793: Biến chứng lâu dài của dị vật thực quản là:",
  },
  {
    answers: ["a. Đau nhức nửa đầu", "b. Liệt dây thần kinh VII", "c. Chảy mủ tai", "d.Chóng mặt*"],
    question: "Câu 794: Triệu chứng sau không thuộc hội chứng Gradenigo:",
  },
  {
    answers: ["a. Ho nhiều*", "b. Ở trẻ em có thể khóc thành tiếng", "c. Sặc sụa, tím tái", "d. Khó thở dữ dội"],
    question: "Câu 795: Dấu hiệu chứng tỏ có tuột ống canuyn ngoại trừ:",
  },
  {
    answers: ["a. Chấn thương tai trong", "b. Điếc nghề nghiệp*", "c. Điếc đột ngột", "d. Viêm tai giữa"],
    question: "Câu 796: Loại điếc sau thường không hồi phục:",
  },
  {
    answers: ["a. 80 dB", "b. 90 dB*", "c. 100 dB", "d. 110 dB"],
    question: "Câu 797: Điếc nghề nghiệp khi tiếp xúc với tiếng ồn thường xuyên ở cường độ:",
  },
  {
    answers: [
      "a. Cắt bằng laser",
      "b. Cắt bằng dao điện đơn cực",
      "c. Cắt bằng phương pháp bóc tách*",
      "d. Cắt bằng dao điện lưỡng cực",
    ],
    question: "Câu 798: Phương pháp cắt amidan hậu phẫu ít đau hơn:",
  },
  {
    answers: ["a. Amidan đáy lưỡi.", "b. Amidan vòm.", "c. Amidan vòi.", "d. Mảng payer.*"],
    question: "Câu 799: Vòng bạch huyết Waldeyer không bao gồm:",
  },
  {
    answers: ["a. Meniere", "b. Ngộ độc thuốc", "c. Xốp xơ tai", "d. Điếc do tiếng ồn*"],
    question: "Câu 800: Nguyên nhân điếc có thể dự phòng được ở người lớn:",
  },
  {
    answers: ["a. Lưỡi to", "b. Mắt xếch", "c. Polype mũi*", "d. Dị dạng tai ngoài"],
    question: "Câu 801: Hội chứng Franchesti bao gồm các triệu chứng, NGOẠI TRỪ:",
  },
  {
    answers: ["a. Xương cá", "b. Hàm răng giả*", "c. Đồng xu", "d. Xương gà"],
    question: "Câu 802: Trong các loại dị vật thực quản loại khó lấy nhất là :",
  },
  {
    answers: ["a. Nói giọng mũi", "b. Các đặc điểm trên*", "c. Nuốt sặc", "d. Khó nuốt"],
    question: "Câu 803: Đặc điểm sau chứng tỏ ung thư đã xâm lấn tới họng miệng:",
  },
  {
    answers: ["a. Nuốt đau", "b. Nuốt sặc", "c. Khó nuốt", "d. Nuốt vướng*"],
    question: "Câu 804: Triệu chứng chủ yếu của viêm amidan mạn tính:",
  },
  {
    answers: ["a. Nghẹt mũi", "b. Chảy mũi", "c. Niêm mạc mũi thoái hóa*", "d. Sốt"],
    question: "Câu 805: Triệu chứng không phải của viêm mũi xoang cấp ở trẻ em:",
  },
  {
    answers: [
      "a. Viêm thanh quản hạ thanh môn*",
      "b. Viêm thanh quản cấp thông thường",
      "c. Viêm thanh quản bạch hầu",
      "d. Viêm thanh quản thượng thanh môn",
    ],
    question: "Câu 806: Viêm thanh quản dạng nào sau đây thường diễn biến nhanh và nặng:",
  },
  {
    answers: [
      "a. Chụp X quang cổ thẳng nghiêng",
      "b. Cho làm các xét nghiệm cơ bản, theo dõi",
      "c. Dùng kháng sinh liều cao và tiếp tục theo dõi",
      "d. Soi thực quản kiểm tra*",
    ],
    question:
      "Câu 807: Một bác sĩ chuyên khoa Tai Mũi Họng tiếp nhận người bệnh nghi ngờ mắc dị vật thực quản, thái độ xử trí thích hợp nhất là:",
  },
  {
    answers: [
      "a. Bé ăn khi đang ho",
      "b. Sơ xuất của người mẹ khi cho bé uống thuốc",
      "c. Bé vừa ăn vừa đùa giỡn",
      "d. Phản xạ nuốt của trẻ chưa hoàn chỉnh*",
    ],
    question: "Câu 808: Nguyên nhân dị vật đường thở trẻ em là do:",
  },
  {
    answers: ["a. Sụp mi", "b. Lé trong", "c. Giảm thị lực", "d. Song thị*"],
    question: "Câu 809: Triệu chứng về mắt có sớm trong ung thư vòm:",
  },
  {
    answers: ["a. Tiểu phế quản", "b. Phế nang", "c. Ống phế nang", "d. Phế quản*"],
    question: "Câu 810: Hệ hô hấp bao gồm phần dẫn khí và phần hô hấp, cấu trúc không thuộc phần hô hấp là:",
  },
  {
    answers: ["a. 8", "b. 7", "c. 9*", "d. 6"],
    question: "Câu 811: Ở Việt Nam hiện nay, ung thư thanh quản đứng hàng thứ mấy:",
  },
  {
    answers: [
      "a. Chống nhiễm trùng tại chỗ và toàn thân",
      "b. Nhỏ nước muối sinh lý vô trùng thường xuyên",
      "c. Không được dùng thuốc kháng histamin",
      "d. Hút đàm nhớt thường xuyên*",
    ],
    question: "Câu 812: Để dự phòng biến chứng nghẹt ống sau khi mở khí quản cần phải:",
  },
  {
    answers: [
      "a. Tiền sử chảy mủ tai",
      "b. Tai nghe kém hơn",
      "c. Chảy mủ tai thối",
      "d. Ấn vùng sau tai người bệnh than đau*",
    ],
    question: "Câu 813: Dấu hiệu có giá trị nhất để nghĩ đến chẩn đoán trên là:",
  },
  {
    answers: ["a. Trước trên", "b. Trung tâm", "c. Sau dưới", "d. Trước dưới*"],
    question: "Câu 814: Vị trí lỗ thủng thường gặp trong viêm tai giữa mạn tính tiết nhầy:",
  },
  {
    answers: [
      "a. Sâu răng",
      "b. Sau rửa xoang kinh điển*",
      "c. U hạt quanh chân răng",
      "d. Sau nhổ răng tạo lỗ vào xoang hàm ",
    ],
    question: "Câu 815: Viêm xoang hàm do răng thường, ngoại trừ:",
  },
  {
    answers: ["a. Viêm xoang trán", "b. Viêm xoang hàm", "c. Tất cả các xoang trên", "d. Viêm xoang sàng*"],
    question: "Câu 816: Loạn cảm họng có nguyên nhân từ xoang nào sau đây:",
  },
  {
    answers: [
      "a. Khối V.A chèn ép loa vòi nhĩ",
      "b. Tắc vòi nhĩ làm rối loạn áp lực trong hòm nhĩ*",
      "c. Tắc loa vòi nhĩ",
      "d. Viêm tắc vòi nhĩ tái diễn nhiều lần ",
    ],
    question: "Câu 817: Nguyên nhân thường gặp nhất gây viêm tai giữa thanh dịch ở trẻ em là:",
  },
  {
    answers: ["a. Có u sùi", "b. Màng nhĩ thủng", "c. Dễ chảy máu", "d. Các đặc điểm trên*"],
    question: "Câu 818:Ung thư vòm xâm lấn loa vòi nhĩ, màng nhĩ có thể có đặc điểm sau:",
  },
  {
    answers: ["a. Viêm mê nhĩ", "b. U bán cầu tiểu não*", "c. Rò ống bán khuyên", "d. Bệnh Meniere"],
    question: "Câu 819: Nguyên nhân gây chóng mặt không thuộc chóng mặt ngoại biên:",
  },
  {
    answers: [
      "a. Rối loạn phát triển vùng mặt.*",
      "b. Viêm phế quản phổi mạn tính.",
      "c. Suy dinh dưỡng.",
      "d.Viêm tai giữa thanh dịch.",
    ],
    question: "Câu 820: Biến chứng lâu dài có thể ảnh hưởng đến thẩm mỹ của viêm V.A là: ",
  },
  {
    answers: ["a. Dị vật bỏ quên sơ sinh *", "b. U nhú thanh quản", "c. Viêm thanh quản cấp", "d. Mềm sụn thanh quản"],
    question: "Câu 821: Bệnh TMH cần hội chẩn với chuyên khoa hô hấp:",
  },
  {
    answers: [
      "a. Nuốt đau nhiều",
      "b. Đau rát vùng họng ngực",
      "c. Nuốt đau nhói vùng cổ",
      "d. Đau nhói sau xương ức*",
    ],
    question: "Câu 822: Mắc xương đoạn thực quản ngực, dấu hiệu cơ năng thường gặp là:",
  },
  {
    answers: [
      "a. Đi kèm với viêm đường hô hấp cấp trên",
      "b. Khởi phát đột ngột",
      "c. Các yếu tố trên*",
      "d. Nghẹt mũi – chảy mũi",
    ],
    question: "Câu 823:",
  },
  {
    answers: [
      "a. Chụp X quang cổ thẳng nghiêng",
      "b. Dùng kháng sinh, kháng viêm",
      "c. Soi hạ họng và thực quản",
      "d. Lưu người bệnh theo dõi thêm*",
    ],
    question:
      "Câu 824: Một người bệnh vô tình nuốt phải hạt sapôchê, sau đó không khó thở, chỉ cảm giác vướng họng. Thái độ xử trí đúng đắn là:",
  },
  {
    answers: ["a. U xơ vòm*", "b. Ung thư vòm", "c. Polyp mũi sau", "d. V.A"],
    question: "Câu 825: Khi sinh thiết khối u ở vùng vòm có thể gây chảy máu khó cầm gặp trong:",
  },
  {
    answers: [
      "a. Do nguyên nhân cơ học gây ra",
      "b. Là một chất lỏng, trong",
      "c. Phản ứng Rivalta (+)*",
      "d. Không có tế bào viêm",
    ],
    question: "Câu 826: Dịch hòm nhĩ trong viêm tai giữa cấp xuất tiết dịch thấm có các tính chất sau, NGOẠI TRỪ:",
  },
  {
    answers: [
      "a. Áp lực đỉnh của nhĩ lượng đồ bằng với áp lực khí tai giữa của người bệnh",
      "b. Biên độ áp lực tai giữa bình thường từ 50 đến 200mmH2O*",
      "c. Độ đàn hồi của màng nhĩ lớn nhất khi áp lực khí 2 bên bằng nhau",
      "d. Biên độ áp lực tai giữa bình thường biểu hiện chức năng vòi nhĩ bình thường",
    ],
    question: "Câu 827: Kết quả nhĩ lượng đồ có thể xác định, NGOẠI TRỪ:",
  },
  {
    answers: ["a. Tan nhầy.", "b. Tinh dầu tại chỗ", "c. Rửa mũi bằng dung dịch đường ưu trương*", "d. Kháng sinh"],
    question: "Câu 828: Điều trị nội khoa viêm mũi xoang tốt nhất là:",
  },
  {
    answers: ["a. Không đau", "b. Chắc", "c. Ít di động", "d. Dính cố định vào da*"],
    question: "Câu 829: Trong ung thư vòm bệnh nhân vào viện với hạch sau góc hàm thường có tính chất sau:",
  },
  {
    answers: ["a. Viêm họng nang.*", "b. Viêm họng xuất tiết.", "c. Viêm họng quá phát.", "d. Viêm họng teo."],
    question: "Câu 830: Ở trẻ em viêm họng mạn tính thường gặp thể:",
  },
  {
    answers: ["a. Soi vòm qua gương", "b. Sờ vòm", "c. Nội soi vòm", "d. Sờ vòm, bấm sinh thiết*"],
    question: "Câu 831: Để xác định chẩn đoán, có nhiều phương pháp nhưng cần phải cẩn trọng khi:",
  },
  {
    answers: [
      "a. Chữa sâu răng, vệ sinh răng miệng*",
      "b. Xúc họng, bôi thuốc tại chỗ",
      "c. Nâng cao sức đề kháng của cơ thể",
      "d. Kháng sinh toàn thân",
    ],
    question: "Câu 832: Điều trị và dự phòng hữu hiệu nhất của viêm họng vincent là:",
  },
  {
    answers: [
      "a. Dị vật ống tai",
      "b. Viêm ống tai ngoài",
      "c. Viêm tai xương chũm mạn tính",
      "d. Viêm tai giữa mạn tính",
    ],
    question: "Câu 833: Nghe kém một bên kèm chảy dịch mủ tai thối khắm:",
  },
  {
    answers: [
      "a. Viêm tai giữa mạn tính mủ",
      "b. Viêm tai giữa dịch thấm*",
      "c. Viêm tai giữa xuất tiết",
      "d. Viêm tai giữa tiết nhầy",
    ],
    question: "Câu 834: Thể lâm sàng không thuộc viêm tai giữa mạn tính:",
  },
  {
    answers: ["a. 5-9 tuổi", "b. 2-6 tuổi", "c. 4-8 tuổi", "d. 3-7 tuổi*"],
    question: "Câu 835: Viêm amidan thường gặp ở độ tuổi nào:",
  },
  {
    answers: ["a. Gà", "b. Cá", "c. Heo", "d. Vịt*"],
    question: "Câu 836: Ở các tỉnh phía nam miền Nam, dị vật đường ăn thường là xương (ngoài xương cá):",
  },
  {
    answers: [
      "a. Trụ sau phồng to ra sau và vào trong ",
      "b. Trụ trước phồng to ra trước và vào trong*",
      "c. Amidan to phồng ra phía ngoài",
      "d. Mặt trong của amidan to, lấn vào đường giữa",
    ],
    question: "Câu 837: Áp xe amidan khi khám họng thường thấy:",
  },
  {
    answers: ["a. Tất cả đều đúng*", "b. Nuốt đau", "c. Nuốt sặc", "d. Nuốt vướng"],
    question: "Câu 838: Ung thư ở nẹp phễu- thanh thiệt triệu chứng chủ yếu là:",
  },
  {
    answers: ["a. Nhân thính giác ở thân não", "b. Sau ốc tai", "c. Dẫn truyền thần kinh thính giác", "d. Tại ốc tai*"],
    question: "Câu 839: Đo điện thính giác thân não (ABR) giúp cho việc xác định các tổn thương ở, NGOẠI TRỪ:",
  },
  {
    answers: ["a. U góc cầu tiểu não", "b. U dây VIII", "c. Các bệnh trên*", "d. Xốp xơ tai"],
    question: "Câu 840: Nghe kém 1 bên tăng dần không thủng màng nhĩ gặp trong bệnh lý nào sau đây:",
  },
  {
    answers: ["a. Cấy điện cực ốc tai", "b. Đeo máy nghe", "c. Cho trẻ đến trường điếc câm*", "d. Tất cả các câu trên"],
    question: "Câu 841: Xử trí trẻ điếc câm tốt nhất là:",
  },
  {
    answers: ["a. Streptomycin", "b. Amino glycosides*", "c. Kanamycin", "d. Gentamycin"],
    question: "Câu 842: Nguyên nhân gây điếc câm ở trẻ em là do sử dụng thuốc:",
  },
  {
    answers: ["a. Xương búa", "b. Xương đe*", "c. Xương bàn đạp", "d. Các xương trên đều có nguy cơ ngang nhau"],
    question: "Câu 843: Xương con nào dễ bị tổn thương nhất:",
  },
  {
    answers: [
      "a. Viêm màng nhĩ *",
      "b. Viêm tai giữa thanh dịch",
      "c. Viêm màng nhĩ do cúm",
      "d. Viêm tai giữa sung huyết",
    ],
    question: "Câu 844: Nghe kém 1 bên không thủng nhĩ nhưng có biến đổi màng nhĩ:",
  },
  {
    answers: ["a. Viêm V.A *", "b. Viêm mũi", "c. Viêm họng", "d. Viêm tai giữa"],
    question: "Câu 845: Một bệnh ở TMH liên quan chặt chẽ với Nhi khoa:",
  },
  {
    answers: ["a. Corticoid", "b. Mở khí quản*", "c. Đặt nội khí quản", "d. Thở oxy"],
    question:
      "Câu 846: Phương pháp điều trị cần được thực hiện ngay là? Tình huống : bệnh nhân nam 65 tuổi vào phòng khám tai mũi họng của bệnh viện tỉnh trong tình trạng da bọc xương, khó thở vào, môi tím, nói ngắt quãng, co lõm cơ ức đòn chũm và hố thượng đòn. ",
  },
  {
    answers: ["a. Ung thư dây thanh", "b. Polype dây thanh", "c. Bạch sản dây thanh*", "d. Liệt dây thanh"],
    question: "Câu 847: Cần chẩn đoán phân biệt với:",
  },
  {
    answers: ["a. Ho ra nhiều mủ hôi", "b. Nội soi khí phế quản", "c. Đau tức ngực và lưng", "d. X quang tim phổi*"],
    question: "Câu 848: Chẩn đoán chính xác áp xe phổi dựa vào:",
  },
  {
    answers: ["a. Điếc", "b. Chóng mặt", "c. Dãn phế quản*", "d. Viêm mạc kẽ"],
    question: "Câu 849: Hội chứng Cogan bao gồm các triệu chứng, NGOẠI TRỪ:",
  },
  {
    answers: ["a. Máu động mạch*", "b. Ứ trệ máu tuần hoàn tim phổi", "c. Máu tĩnh mạch", "d. Mao mạch"],
    question: "Câu 850: Chảy máu trong khi mở khí quản thường do, chọn câu đúng nhất:",
  },
  {
    answers: ["a. Có thụ thể cơ học", "b. Có thụ thể nhiệt độ", "c. Sinh ba*", "d. Có thụ thể mạch"],
    question: "Câu 851: Phân bố thần kinh trong lớp đệm của mũi xuất phát từ những dây thần kinh:",
  },
  {
    answers: ["a. Nhiễm tụ cầu", "b. Viêm tắc lệ đạo", "c. Áp xe túi lệ", "d. Viêm xoang sàng xuất ngoại*"],
    question: "Câu 852: Chẩn đoán được nghĩ đến trước tiên là:",
  },
  {
    answers: ["a. Áp xe", "b. Có hốc mủ", "c. Quá phát gây ngưng thở trong lúc ngủ*", "d. Biến chứng khớp"],
    question: "Câu 853: Chỉ định tuyệt đối cắt amidan viêm mạn tính ở trẻ em:",
  },
  {
    answers: ["a. Viêm tai giữa", "b. Sũng nước mê nhĩ*", "c. Viêm ống tai ngoài", "d. Xốp xơ tai"],
    question: "Câu 854: Nghe kém dẫn truyền thường là do, NGOẠI TRỪ:",
  },
  { answers: ["a. a, b đúng*", "b. Thành sau trên", "c. Thành bên", "d. Nóc vòm"], question: "Câu 855: V.A nằm ở:" },
  {
    answers: ["a. Sổ mũi", "b. Sốt cao", "c. Các dấu hiệu trên", "d. Đau tai"],
    question: "Câu 856: Dấu hiệu lâm sàng chứng tỏ có viêm tai giữa cấp tính mủ:",
  },
  {
    answers: [
      "a. Thường gặp nhất là do liên cầu",
      "b. Luôn luôn là nguồn gốc của các biến chứng mưng mủ",
      "c. Cần phải điều trị bằng kháng sinh",
      "d. Luôn luôn là loại ban đỏ có giả mạc trắng*",
    ],
    question: "Câu 857: Viêm họng do vi khuẩn có các đặc điểm sau, NGOẠI TRỪ:",
  },
  {
    answers: [
      "a. Các dấu hiệu trên*",
      "b. Bên đối diện kéo lên",
      "c. Khối cơ mặt bên liệt chùng xuống",
      "d. Lệch nhân trung",
    ],
    question: "Câu 858: Triệu chứng liệt dây VII do tai có các dấu hiệu sau:",
  },
  {
    answers: ["a. Làm ẩm không khí", "b. Làm sạch không khí trước khi vào phổi*", "c. Làm ấm không khí", "d. Ngửi mùi"],
    question: "Câu 859: Chức năng chủ yếu nhất của mũi là:",
  },
  {
    answers: ["a. Liệt thần kinh.", "b. Viêm thượng thận.*", "c. Viêm thanh quản.", "d. Viêm cơ tim."],
    question: "Câu 860: Bạch hầu ác tính có thể gây chết đột ngột trong biến chứng:",
  },
  {
    answers: ["a. a,b đúng.", "b. Cơ khít họng dưới.*", "c. Cơ khít họng giữa.", "d. Cơ khít họng trên."],
    question: "Câu 861: Các cơ sau đây góp phần cho việc đưa thức ăn xuống miệng thực quản:",
  },
  {
    answers: ["a. Cổ giữa", "b. Cổ sau", "c. Sau góc hàm", "d. Cổ cao*"],
    question: "Câu 862: Hạch thường xuất hiện trong ung thư vòm là nhóm:",
  },
  {
    answers: ["a. Vi khuẩn", "b. Bạch hầu", "c. Dị ứng", "d. Siêu vi*"],
    question: "Câu 863: Nguyên nhân chính trong viêm thanh quản hạ thanh môn là:",
  },
  {
    answers: ["a. Thanh quản", "b. Phế quản gốc trái", "c. Phế quản gốc phải*", "d. Khí quản"],
    question: "Câu 864: Vị trí thường gặp nhất của dị vật đường thở là:",
  },
  {
    answers: [
      "a. Tìm nguyên nhân và điều trị nguyên nhân*",
      "b. Dùng thuốc cầm máu",
      "c. Nhét meche mũi",
      "d. Nhỏ thuốc co mạch",
    ],
    question: "Câu 865: Điều trị quan trọng nhất đối với trường hợp chảy máu mũi là:",
  },
  {
    answers: ["a. S.aureus", "b. H.Influenzae", "c. M.Catarrhalis", "d. Liên cầu tiêu huyết beta nhóm A*"],
    question: "Câu 866: Vi khuẩn ái khí gây viêm V.A cấp thường gặp nhất là:",
  },
  {
    answers: ["a. Vô trùng.*", "b. Hemophilus.", "c. Phế cầu.", "d. Tụ cầu."],
    question: "Câu 867: Khi mới sinh ra, quệt V.A cấy vi khuẩn, cho kết quả là:",
  },
  {
    answers: [
      "a. Ở trẻ dưới 5 tuổi viêm đường hô hấp trên bao gồm viêm các tổ chức tân bào vòng Waldeyer *",
      "b.Nguyên nhân nghẹt mũi ở trẻ dưới 5 tuổi là do V.A to.",
      "c. Tuổi cắt amidan phù hợp nhất là trên 15 tuổi",
      "d. Ở trẻ dưới 10 tuổi viêm amidan quá phát thường có V.A to",
    ],
    question: "Câu 868: Chọn câu đúng nhất:",
  },
  {
    answers: [
      "a. Phù não cấp*",
      "b. Vỡ áp xe vào não thất",
      "c. Tụt kẹt hạnh nhân tiểu não",
      "d. Cả 3 biến chứng trên",
    ],
    question: "Câu 869: Các biến chứng hay gặp gây tử vong nhanh chóng trong áp xe não do tai, ngoại trừ:",
  },
  {
    answers: ["a. U thanh quản", "b. Viêm thanh quản cấp", "c. Papiloma thanh quản", "d. Hẹp thanh môn*"],
    question: "Câu 870: Khó thở thanh quản là hậu quả của:",
  },
  {
    answers: ["a. Hai bên thái dương", "b. Quanh ổ mắt", "c. Vùng chẩm*", "d. Vùng xoang bị viêm"],
    question: "Câu 871: Trong viêm xoang trước cấp nhức đầu thường gặp ở các vị trí sau, NGOẠI TRỪ:",
  },
  {
    answers: ["a. Dây thanh", "b. Thượng thanh môn", "c. Hạ thanh môn*", "d. Nẹp-phễu-thanh thiệt"],
    question: "Câu 872: Trong khối u ở thanh quản, vị trí khối u có thể khó thở thanh quản có sẵn:",
  },
  {
    answers: ["a. Bệnh tim bẩm sinh.", "b. Rối loạn đông máu.", "c. Suy dinh dưỡng.*", "d. Đang có dịch cúm."],
    question: "Câu 873: Chống chỉ định nạo V.A, ngoại trừ:",
  },
  {
    answers: ["a. Kháng sinh", "b. Tấn bông cầu", "c. Kẹp cột cầm máu ngay.*", "d. Ngậm nước lạnh"],
    question: "Câu 874: Xử trí chảy máu muộn sau cắt amidan ngoại trừ:",
  },
  {
    answers: [
      "a. Soi thực quản*",
      "b. Gởi khám chuyên khoa Tai Mũi Họng sớm",
      "c. Kháng sinh, kháng viêm liều cao",
      "d. Chụp X quang cổ thẳng nghiêng",
    ],
    question: "Câu 875: Người bệnh bị dị vật thực quản giai đoạn sớm, xử trí đúng nhất ở tuyến huyện là:",
  },
  {
    answers: [
      "a. Nhức âm ỉ vùng xoang bị viêm *",
      "b. Nhức đầu dữ dội",
      "c. Nhức đầu từng cơn",
      "d. Nhức đầu theo nhịp đập của mạch",
    ],
    question: "Câu 876: Tính chất nhức đầu trong viêm xoang:",
  },
  {
    answers: ["a. Amidan quá phát*", "b. Co thắt thực quản", "c. Trào ngược dạ dày – thực quản", "d. Các bệnh trên"],
    question: "Câu 877:Ở trẻ em khi cho ăn bé hay bị “ọe” có thể:",
  },
  {
    answers: ["a. Phế quản phải", "b. Thanh quản*", "c. Phế quản trái", "d. Khí quản"],
    question: "Câu 878: Xương cá thường mắc ở:",
  },
  {
    answers: [
      "a. Giống như chất bã đậu",
      "b. Một khối chắc màu trắng đục*",
      "c. Có tính chất tiêu xương",
      "d. Có chất cholesterin",
    ],
    question: "Câu 879: Cholesteatoma có các tính chất sau, NGOẠI TRỪ:",
  },
  {
    answers: ["a. Nghề nghiệp*", "b. Tuổi tác", "c. Kèm theo chóng mặt", "d. Mức độ nghe kém"],
    question: "Câu 880: Các yếu tố sau ảnh hưởng đến tiên lượng điếc đột ngột, ngoại trừ:",
  },
  {
    answers: ["a. Viêm tai giữa cấp", "b. Bệnh Meniere*", "c. Viêm tai giữa tiết dịch", "d. Viêm tai giữa thanh dịch"],
    question: "Câu 881: Bệnh sau màng nhĩ thường không thủng:",
  },
  {
    answers: ["a. Dùng thuốc giảm đau", "b. Nhỏ mũi bằng nước muối sinh lý", "c. Kháng viêm", "d. Kháng sinh*"],
    question: "Câu 882: Sau khi nhét meche mũi cầm máu cần phải:",
  },
  {
    answers: ["a. Càng sớm càng tốt*", "b. Sau 5 tuổi", "c. Sau 3 tuổi", "d. Sau 7 tuổi"],
    question: "Câu 883: Khi trẻ bị điếc câm nên đưa trẻ đến trường dạy điếc câm ở tuổi:",
  },
  {
    answers: ["a. 6 giờ.*", "b. 10 giờ.", "c. 8 giờ.", "d. 12 giờ."],
    question: "Câu 884: Khi nạo V.A bé cần nhịn ăn uống trước:",
  },
  {
    answers: ["a. Các xương con (tiểu cốt)", "b. Hòm nhĩ", "c. Xương chũm", "d. Ống bán khuyên ngoài*"],
    question: "Câu 885: Tai giữa gồm có các cấu trúc sau, NGOẠI TRỪ:",
  },
  {
    answers: ["a. Hen phế quản", "b. Viêm thanh quản cấp*", "c. Viêm thanh thiệt cấp", "d. Viêm đường hô hấp trên cấp"],
    question: "Câu 886: Chẩn đoán được nghĩ đến trước tiên là:",
  },
  {
    answers: [
      "a. Mở sào bào",
      "b. Tái tạo hệ thống truyền âm e. Viêm các xương con (Lỗi do câu hỏi Xem file PDF)",
      "c. Khoét rỗng đá chũm*",
      "d.Mở Sào bào thượng nhĩ",
    ],
    question: "Câu 887: Điều trị cơ bản, kinh điển viêm tai xương chủm có cholesteatame: ",
  },
  {
    answers: ["a. Thấp khớp", "b. Viêm nội tâm mạc", "c. Viêm xoang*", "d. Viêm vi cầu thận"],
    question: "Câu 888: Bệnh nào sau đây không thuộc biến chứng xa của viêm amidan:",
  },
  {
    answers: [
      "a. Cần đặt sonde dạ dày",
      "b. Soi thực quản kiểm tra",
      "c. Mở trung thất dẫn lưu áp-xe*",
      "d. Dùng kháng sinh, kháng viêm liều cao",
    ],
    question: "Câu 889: Thái độ xử trí đúng nhất đối với một trường hợp áp xe trung thất do dị vật là:",
  },
  {
    answers: ["a. Gây tê tại chỗ", "b. Mê nội khí quản", "c. Gây mê tĩnh mạch*", "d. A, B đúng"],
    question: "Câu 890: Phương pháp vô cảm không dung trong cắt Amidan:",
  },
  {
    answers: ["a. Chảy máu sớm.*", "b. Chảy máu muộn.", "c. Nhiễm trùng.", "d. V.A sót vào thanh môn."],
    question: "Câu 891: Biến chứng nạo V.A:",
  },
  {
    answers: ["a. 40-60*", "b. 60-80", "c. 50-70", "d. 30-50"],
    question: "Câu 892: Ung thư vòm ở Việt Nam thường gặp ở lứa tuổi",
  },
  {
    answers: ["a. Góc trong khóe mắt", "b. Vùng trước trán", "c. Góc trong chân mày*", "d. Hố nanh"],
    question: "Câu 893: Điểm đau trong viêm xoang trán cấp ở vị trí:",
  },
  {
    answers: ["a. Chấn thương", "b. Sản giật", "c. Nhiễm siêu vi", "d. Sinh non*"],
    question: "Câu 894: Yếu tố nguy cơ thiếu oxy tai trong khi sinh :",
  },
  {
    answers: ["a. Sàn sọ", "b. Vòm xâm lấn nền sọ*", "c. Sàng hàm", "d. U nhú đảo ngược"],
    question:
      "Câu 895: Đây là loại ung thư? Tình huống: Người bệnh nam, 55 tuổi có một hạch to ở sau góc hàm phải từ 2 tháng nay. Nghẹt mũi bên phải, thỉnh thoảng có khạc ra nhày lẫn máu. Hút sạch nhày và máu, đưa ống soi vào cửa mũi sau, thấy có 1 khối sùi to bít 1 phần cửa mũi sau",
  },
  {
    answers: ["a. Amoxicilline", "b. Quinolon", "c. Aminoglycosides", "d. Macrolide*"],
    question:
      "Câu 896: Điều trị viêm Amidan cấp do liên cầu tiêu huyết Beta nhóm A kháng sinh có thể thay thế Penicilline:",
  },
  {
    answers: ["a. Lão thính", "b. Điếc nghề nghiệp", "c. Điếc bẩm sinh", "d. Hẹp ống tai ngoài*"],
    question: "Câu 897: Đùng máy trợ thính không phù hợp với trường hợp sau:",
  },
  {
    answers: [
      "a. Điều trị triệt để viêm mũi họng cấp",
      "b. Nạo VA khi có chỉ định*",
      "c. Nâng cao thể trọng cho trẻ",
      "d. Dùng kháng sinh khi có bội nhiễm",
    ],
    question: "Câu 898: Phương pháp điều trị đúng nhất trong viêm thanh quản rít ở trẻ em là:",
  },
  {
    answers: ["a. Staphylocoque", "b. Streptocoques hemolitique nhóm B*", "c. Klebsiella", "d. Heamophillus influenza"],
    question: "Câu 899: Vi khuẩn gây viêm họng giả mạc trắng chiếm tỉ lệ cao nhất là:",
  },
  {
    answers: [
      "a. Sờ nắn bờ dưới ở mắt mất liên tục và đau nhói*",
      "b. Sưng nề vùng dưới ổ mắt",
      "c. Bầm tím bờ dưới ổ mắt",
      "d. Đau vùng mắt",
    ],
    question: "Câu 900: Dấu hiệu chắc chắn của gẫy bờ dưới ổ mắt là:",
  },
  { answers: ["a. Chảy mũi", "b. Giảm khứu giác", "c. Không sốt*", "d. Nghẹt mũi"], question: "Câu 901:" },
  {
    answers: ["a. Khi nói chuyện", "b. Giảm khi nhai", "c. Bớt vào ban đêm", "d. Khi nuốt*"],
    question: "Câu 902: Triệu chứng cơ năng sẽ bớt trong viêm tai giữa cấp xuất tiết dịch thấm:",
  },
  {
    answers: ["a. Chảy tai", "b. Đau nhói lên tai khi nuốt", "c. Ù tai", "d. Điếc hỗn hợp*"],
    question: "Câu 903: Dấu hiệu về tai không thuộc ung thư vòm:",
  },
  {
    answers: ["a. Xén vách ngăn dưới niêm mạc*", "b. Khí dung mũi", "c. Chuyển dịch (Proëtz)", "d. Phun thuốc vào mũi"],
    question: "Câu 904: Điều trị tại chỗ có hiệu quả trong viêm xoang bao gồm các biện pháp sau, NGOẠI TRỪ:",
  },
  {
    answers: ["a. Hạt đậu phộng", "b. Mang cá", "c. Viên thuốc*", "d. Hạt dưa"],
    question: "Câu 905: Loại dị vật có nguy cơ gây tử vong cao nhất:",
  },
  {
    answers: [
      "a. Phải thắt động mạch cảnh ngoài",
      "b. Mà số lượng máu mất trên 500ml",
      "c. Ảnh hưởng đến các dấu hiệu sinh tồn* ",
      "d. Phải nhét meche mũi sau",
    ],
    question: "Câu 906: Chảy máu mũi nặng là loại chảy máu:",
  },
  {
    answers: ["a. Xây xẩm", "b. Chóng mặt", "c. Mỏi cổ", "d. Nhức vùng chẩm *"],
    question: "Câu 907: Triệu chứng nào sau đây có liên quan đến bệnh cao huyết áp:",
  },
  {
    answers: ["a. CT-Scan", "b. Cấy máu*", "c.X quang-schuller", "d. Công thức máu"],
    question: "Câu 908: Xét nghiệm cận lâm sàng có giá trị nhất trong chẩn đoán và điều trị là:",
  },
  {
    answers: ["a. Hemophilie", "b. Leucemie", "c. Lao phổi*", "d. Cao huyết áp"],
    question: "Câu 909: Chảy máu mũi có thể gặp trong các bệnh sau, ngoại trừ:",
  },
  {
    answers: ["a. Phì đại tổ chức V.A*", "b. Dị vật mũi", "c. Tắc cửa mũi sau bẩm sinh", "d. Viêm mũi cấp"],
    question: "Câu 910: Nguyên nhân thường gặp nhất gây nghẹt mũi ở trẻ em là:",
  },
  {
    answers: ["a. IgA", "b. A,B đúng*", "c. IgE", "d. IgG"],
    question: "Câu 911: Trong ung thư vòm họng lượng kháng thể nào sau đây tăng cao:",
  },
  {
    answers: ["a. 5 ngày", "b. 3 ngày *", "c. 7 ngày", "d. 10 ngày"],
    question: "Câu 912: Triệu chứng viêm mũi xoang rầm rộ nhất vào:",
  },
  {
    answers: ["a. Nhóm cảnh*", "b. Sau góc hàm", "c. Trước khí quản", "d. Dưới hàm"],
    question: "Câu 913: Nhóm hạch nào thường gặp trong ung thư thanh quản:",
  },
  {
    answers: ["a. Trên 4 tuổi*", "b. Trên 2 tuổi", "c. Trên 3 tuổi", "d. Trên 1 tuổi"],
    question: "Câu 914: Chức năng miễn dịch của amidan phát triển mạnh từ:",
  },
  {
    answers: ["a. >100 dB", "b. >70 dB", "c. >80dB", "d. >90 dB*"],
    question: "Câu 915: Được gọi là điếc nặng (điếc sâu) khi mất:",
  },
  {
    answers: [
      "a. T2: 2 vùng giải phẫu*",
      "b. T2: mà trục lớn từ 1-4cm",
      "c. T2: 1 vùng giải phẫu",
      "d. T2: ngoài vùng vòm họng nhưng không hủy xương",
    ],
    question: "Câu 916: Trong cách phân độ “T2” của K vòm, khối u được giới hạn:",
  },
  {
    answers: [
      "a. Các dạng trên*",
      "b. Có thể ảnh hưởng tới mắt, viêm đường hô hấp",
      "c. Có thể tự khỏi nếu được dẫn lưu tốt và điều trị nguyên nhân",
      "d. Dễ chuyển thành viêm xoang mạn",
    ],
    question: "Câu 917:",
  },
  {
    answers: ["a. Sừng hóa Amidan", "b.Lao Amidan", "c. Ung thư Amidan", "d. Các bệnh trên*"],
    question: "Câu 918: Sỏi Amidan có thể chẩn đoán phân biệt với:",
  },
  {
    answers: ["a. Táo bón hoặc tiêu chảy", "b. Nhức đầu dữ dội, lan tỏa", "c. Động mắt*", "d. Nôn và buồn nôn"],
    question: "Câu 919: Tam chứng kinh điển trong biến chứng viêm màng não do tai gồm các dấu hiệu sau, NGOẠI TRỪ:",
  },
  {
    answers: ["a. Stress", "b. Các bệnh trên *", "c. Trầm cảm", "d. Hystery"],
    question: "Câu 920: Bệnh nhân có thể mất tiếng nói do các yếu tố sau:",
  },
  {
    answers: [
      "a. Chảy tai kéo dài",
      "b. Mãng nhĩ bị hoại tử hoặc thủng nhiều lỗ*",
      "c. Nghe kém đột ngột",
      "d. Viêm tai giữa không đáp ứng với điều trị nội khoa",
    ],
    question: "Câu 921: Dấu hiệu lâm sàng nghĩ đến lao tai là:",
  },
  {
    answers: ["a. Vỏ não", "b. Các dây thần kinh sọ IX, X, XI", "c. Hành não*", "d. Bán cầu đại não"],
    question: "Câu 922: Thì thứ 2 của động tác nuốt được điều khiển bởi:",
  },
  {
    answers: ["a. Ống tai ngoài", "b. Các phần trên*", "c. Tai giữa", "d. Tai trong"],
    question: "Câu 923: Nghe kém có thể do nguyên nhân tại:",
  },
  {
    answers: ["a. Khó thở", "b. Khít hàm", "c. Đau tai", "d. Nuốt đau*"],
    question: "Câu 924: Dấu hiệu thường gặp nhất trong viêm tấy amidan là:",
  },
  {
    answers: ["a. Viêm tai do sởi", "b. Các nguyên nhân trên*", "c. Viêm tai do bạch hầu", "d. Viêm tai do cúm"],
    question: "Câu 925: Hiện tượng hủy xương có thể xảy ra sớm trong viêm tai giữa mạn tính mủ:",
  },
  {
    answers: ["a. Giảm mùi", "b. Nghẹt mũi", "c. Chảy máu mũi", "d. Đau vùng mặt*"],
    question: "Câu 926: Dấu hiệu sau thường không có trong ung thư vòm giai đoạn sớm:",
  },
  {
    answers: ["a. Huyết thanh chẩn đoán", "b. Nội soi vòm khi có các dấu hiệu “mượn”*", "c. CT-Scan", "d. MRI"],
    question: "Câu 927: Chẩn đoán sớm ung thư vòm trong điều kiện hiện nay cần phải:",
  },
  {
    answers: ["a. Sẹo hẹp thực quản*", "b. Rối loạn về nuốt", "c. Trào ngược dạ dày-thực quản", "d. Nấc cụt"],
    question: "Câu 928: Biến chứng lâu dài của dị vật thực quản giai đoạn trễ:",
  },
  {
    answers: ["a. Đau dây V2", "b. Đau khớp thái dương hàm *", "c. Đau ê răng", "d. Không há miệng được"],
    question: "Câu 929: Triệu chứng nào thuộc Răng hàm mặt liên quan đến các bệnh TMH:",
  },
  {
    answers: ["a. Polype mũi", "b. U xơ vòm", "c. V.A", "d. Dị vật mũi*"],
    question:
      "Câu 930: Em bé 6 tuổi, bị chảy mũi và nghẹt mũi một bên tái diễn, chẩn đoán được nghĩ đến nhiều nhất là:",
  },
  {
    answers: [
      "a. Soi thanh khí phế quản sinh thiết (nếu cần)*",
      "b. Làm các xét nghiệm tiền phẫu",
      "c. Nội soi thanh quản",
      "d. Chụp X quang tim phổi",
    ],
    question: "Câu 931: Sau khi xử trí cấp cứu người bệnh hết khó thở, việc cần phải làm tiếp theo quan trọng nhất là:",
  },
  {
    answers: ["a. Nghẹt mũi nhiều.", "b. Nước mũi đục.*", "c. Sốt cao.", "d. Ho."],
    question: "Câu 932: Viêm V.A dùng kháng sinh trong các trường hợp sau:",
  },
  {
    answers: ["a. Khối u xoang.", "b. Phù nề niêm mạc mũi xoang.", "c. Dịch trong xoang.", "d. Loại nấm xoang*"],
    question: "Câu 933: CT-Scan không nhằm giúp đánh giá tình trạng:",
  },
  {
    answers: ["a. Sung huyết", "b. Đỏ hồng tươi", "c. Đỏ sậm*", "d. Phù nề"],
    question: "Câu 934: Đặc điểm trụ trước amidan chứng tỏ viêm amidan mạn tính:",
  },
  {
    answers: ["a.Hơi thở hôi", "b. Nuốt đau* ", "c.Khô rát họng ", "d.Nuốt vướng "],
    question: "Câu 935: Triệu chứng chủ yếu của viêm amidan mạn tính, ngoại trừ:",
  },
  {
    answers: ["a. X-quang tư thế Blondeau", "b. X-quang sọ nghiêng*", "c. X-quang tư thế Hirtz", "d. X-quang sọ thẳng"],
    question: "Câu 936: Chẩn đoán V.A bằng hình ảnh:",
  },
  {
    answers: ["a. Băng ép*", "b. Dùng thuốc dãn mạch", "c. Kháng sinh dự phòng", "d. Đắp gạc ẩm"],
    question: "Câu 937: Xử lý không đúng trong trường hợp chấn thương tai do lạnh:",
  },
  {
    answers: [
      "a. Thở nhanh, nông",
      "b. Giảm tiếng rít thanh quản",
      "c. Bứt rứt, vật vã, hoảng hốt*",
      "d. Giảm co kéo các cơ hô hấp phụ",
    ],
    question: "Câu 938: Khó thở thanh quản độ 3 bao gồm các triệu chứng sau, NGOẠI TRỪ:",
  },
  {
    answers: ["a. 4", "b. 6*", "c. 3", "d. 5"],
    question: "Câu 939: Trong thời kỳ bào thai, ống phế nang và phế nang được hình thành từ tháng thứ:",
  },
  {
    answers: ["a. Liên cầu tiêu huyết beta nhóm A", "b. K.pneumoniae*", "c. H.influenzae", "d. S.aureus"],
    question: "Câu 940: Vi khuẩn thường gặp trong viêm amidan cấp, NGOẠI TRỪ:",
  },
  {
    answers: [
      "a. Viêm phế quản phổi mạn tính",
      "b. Rối loạn về phát triển răng-miệng-mặt*",
      "c. Viêm tai giữa thanh dịch",
      "d. Suy dinh dưỡng",
    ],
    question: "Câu 941: Biến chứng có thể ảnh hưởng đến thẩm mỹ về lâu dài của trẻ bị viêm V.A là:",
  },
  {
    answers: [
      "a. Cốt đạo 2 bên*",
      "b. Khí đạo và cốt đạo 1 bên",
      "c. Khí đạo 2 bên",
      "d. Bình thường Weber nghe rõ bên tai lành ",
    ],
    question: "Câu 942: Nghiêm pháp Weber là dùng âm thoa so sánh thời gian:",
  },
  {
    answers: ["a. Sử dụng steroid tại chỗ*", "b. Kháng viêm", "c. Kháng histamine", "d. Kháng sinh"],
    question: "Câu 943: Điều trị nội khoa thích hợp viêm mũi xoang mạn tính:",
  },
  {
    answers: ["a. Nuốt sặc", "b. Chảy máu*", "c. Nhiễm trùng", "d. Nuốt đau"],
    question: "Câu 944: Biến chứng thường gặp nhất sau cắt amidan là:",
  },
  {
    answers: ["a. Giang mai", "b. Viêm màng não mủ", "c. Virus quai bị", "d. Ngộ độc thuốc*"],
    question: "Câu 945: Nghe kém 2 tai thường gặp trong bệnh:",
  },
  {
    answers: ["a. Mức nước hơi*", "b. Co kéo trung thất", "c. Các dấu hiệu trên", "d. Tăng đậm 2 rốn phổi"],
    question: "Câu 946: Dấu hiệu X quang có biến chứng trung thất của dị vật đường ăn:",
  },
  {
    answers: ["a. Nhức đầu", "b. Cổ gượng", "c. Nôn ói", "d. Phù gai thị*"],
    question: "Câu 947: Viêm màng não bao gồm các triệu chứng sau, ngoại trừ:",
  },
  {
    answers: ["a. Chảy mũi", "b. Đau-nặng mặt*", "c. Mất mùi.", "d. Nghẹt mũi"],
    question: "Câu 948: Triệu chứng nào đặc trưng để nghĩ đến viêm mũi xoang cấp:",
  },
  {
    answers: [
      "a. Chọc rửa xoang hàm*",
      "b. Mở và dẫn lưu xoang hàm",
      "c. Dùng kháng sinh, chống phù nề",
      "d. Nắn chỉnh lại xương gẫy",
    ],
    question: "Câu 949: Điều không nên làm trong vỡ xoang hàm mới là:",
  },
  {
    answers: ["a. Liệt thanh quản", "b. Dị vật đường thở", "c. Viêm thanh quản cấp*", "d. Mềm sụn thanh quản"],
    question: "Câu 950: Nguyên nhân thường gây khó thở thanh quản ở trẻ dưới 4 tuổi là:",
  },
  {
    answers: [
      "a. Chảy mũi kéo dài, mặc dù có điều trị kháng sinh",
      "b. Tiền sử chưa có lần nào như vậy",
      "c. Chảy mũi, nghẹt mũi nhưng không sốt",
      "d. Chảy mũi 1 bên, nghẹt mũi kéo dài*",
    ],
    question: "Câu 951: Dấu hiệu quan trọng nhất nghĩ đến bệnh trên là:",
  },
  {
    answers: ["a. Tắc lỗ mũi trán", "b. U nhầy xoang trán", "c. Viêm màng não*", "d. Viêm xoang trán"],
    question: "Câu 952: Trong chấn thương xoang trán, biến chứng nguy hiểm nhất là:",
  },
  { answers: ["a. 16*", "b. 15", "c. 17", "d. 18"], question: "Câu 953: Biệt hóa mô amidan vào tuần lễ thứ:" },
  {
    answers: [
      "a. Các amidan thường bị viêm",
      "b. Tất cả các đặc điểm trên*",
      "c. Đi cùng với viêm mũi xoang cấp",
      "d. Bệnh cảnh của viêm đường hô hấp trên cấp",
    ],
    question: "Câu 954: Ở trẻ dưới 10 tuổi, viêm amidan cấp thường có đặc điểm sau:",
  },
  {
    answers: ["a. DSA (Động mạch xóa nền)*", "b. Nội soi mũi xoang", "c. CT-scan", "d. MRI"],
    question: "Câu 955: Chảy máu nặng cần phải thắt động mạch, tốt nhất phải có:",
  },
  {
    answers: ["a. Mù", "b. Sụp mi", "c. Thoát vị nhãn cầu", "d. Tụ máu quanh ổ mắt*"],
    question: "Câu 956: Biến chứng mắt thường gặp nhất trong phẫu thuật xoang là:",
  },
  {
    answers: [
      "a. Mủ nhầy đọng ở cửa mũi sau.*",
      "b. Mủ nhầy đọng ở sàn mũi",
      "c. Các cuốn mũi phù nề",
      "d. Mủ nhầy đọng ở loa vòi nhĩ",
    ],
    question: "Câu 957: Tính trạng hốc mũi qua nội soi ở trẻ bị viêm V.A :",
  },
  {
    answers: ["a. Kháng viêm", "b. Bồi hoàn nước và điện giải", "c. Kháng sinh", "d. An thần*"],
    question: "Câu 958: Điều trị nội khoa chủ yếu của viêm màng não do tai, ngoại trừ:",
  },
  {
    answers: ["a. Người lớn tuổi", "b. Bệnh lý mạch vành", "c. Các yếu tố trên *", "d. Trẻ em dưới 2 tuổi"],
    question: "Câu 959: Dùng thuốc co mạch để rỏ mũi chống nghẹt mũi cần thận trọng:",
  },
  {
    answers: ["a. 6-10 tuổi", "b. Trên 15 tuổi", "c. 11-15 tuổi", "d. Trẻ lớn và người lớn*"],
    question: "Câu 960: Trong viêm họng giả mạc trắng thông thường, tuổi hay gặp nhất là:",
  },
  {
    answers: ["a. Bạch hầu", "b. Các thể trên*", "c. Cúm", "d. Sởi"],
    question: "Câu 961: Màng nhĩ có thể bị tiêu hủy toàn bộ trong viêm tai giữa cấp tính mủ thể:",
  },
  {
    answers: [
      "a. Phẫu thuật lồng ngực",
      "b. Cắt phì đại tuyến giáp *",
      "c. Phẫu thuật ung thư thực quản",
      "d. Phẫu thuật u não",
    ],
    question: "Câu 962: Phẫu thuật ngoại khoa có thể ảnh hưởng đến giọng nói:",
  },
  {
    answers: ["a. Nang dây thanh", "b. Polyp dây thanh", "c. U nhú thanh quản*", "d. Hạt dây thanh"],
    question: "Câu 963: Ở trẻ em loại khối u nào thường gặp gây khó thở thanh quản:",
  },
  {
    answers: [
      "a. Khối u không tiến triển*",
      "b. Khàn tiếng kéo dài",
      "c. Thỉnh thoảng có khó thở",
      "d. Thường gặp ở trẻ 2 đến 3 tuổi",
    ],
    question: "Câu 964: Papillome thanh quản có các đặc điểm sau, ngoại trừ:",
  },
  {
    answers: [
      "a. Xquang sọ trước nghiêng.",
      "b. Soi vòm gián tiếp qua gương.",
      "c. Nọi soi vòm.",
      "d. Sờ vòm, sinh thiết.*",
    ],
    question: "Câu 965: Để xác định chẩn đoán V.A to có nhiều phương pháp, nhưng cần thận trọng khi:",
  },
  {
    answers: [
      "a. Giả mạc trắng thông thường",
      "b. Cấp thông thường",
      "c. Bạch hầu thanh quản*",
      "d. Viêm thanh quản cấp do siêu vi",
    ],
    question: "Câu 966: Đây là loại viêm họng do:",
  },
  {
    answers: ["a. Viêm xương chũm cấp", "b. Liệt mặt", "c. Viêm mê nhĩ", "d. Xơ nhĩ*"],
    question: "Câu 967: Biến chứng nào không là biến chứng cấp của viêm tai giữa cấp tính mủ:",
  },
  {
    answers: ["a. mệt mỏi", "b. ngủ ngáy", "c. chậm lớn", "d. các triệu chứng trên*"],
    question: "Câu 968: Ở trẻ em, viêm amidan quá phát có triệu chứng:",
  },
  {
    answers: ["a. Dưới", "b. Trước", "c. Bên*", "d. Trên-sau"],
    question: "Câu 969: Nơi thường xuất phát của ung thư vòm thể UNCT là thành:",
  },
  {
    answers: ["a. Amoxicilline", "b. Augmentin", "c. Ciprofloxacin*", "d. Ceclor"],
    question: "Câu 970: Có thể sử dụng các kháng sinh sau, NGOẠI TRỪ:",
  },
  {
    answers: ["a. Loại điếc", "b. Tuổi phát hiện", "c. Các yếu tố trên*", "d. Mức độ điếc"],
    question: "Câu 971: Kết quả điều trị điếc ở trẻ em phụ thuộc vào các yếu tố sau:",
  },
  {
    answers: ["a. Mở khí quản", "b. Đặt nội khí quản*", "c. Hà hơi thổi ngạt", "d. Đâm kim lớn ở mảng giáp nhẫn"],
    question: "Câu 972: Trong cấp cứu hô hấp, thủ thuật nhanh nhất tại bệnh viện là:",
  },
  {
    answers: ["a. Kháng viêm", "b. Kháng histamin", "c. Kháng sinh", "d. Dẫn lưu hòm nhĩ tốt*"],
    question: "Câu 973: Muốn viêm tai giữa cấp tính mủ diễn tiến tốt cần phải:",
  },
  {
    answers: ["a. Dưới", "b. Trước", "c. Sau*", "d. Trong"],
    question: "Câu 974: Chấn thương thành xoang trán nguy hiểm nhất là:",
  },
  {
    answers: ["a. XI", "b. X", "c. VIII*", "d. IX"],
    question: "Câu 975: Hội chứng lỗ rách sau không bao gồm liệt dây thần kinh số:",
  },
  {
    answers: ["a. Hạch to.", "b. Họng có giả mạc.", "c. Bạch cầu đơn nhan chiếm đa số.*", "d. Đau họng."],
    question: "Câu 976: Viêm họng bạch cầu đơn nhân, đặc điểm nào góp phần chẩn đoán xác định:",
  },
  {
    answers: ["a. Nội soi họng", "b. Xịt tê họng", "c. Vén trụ trước, đè lưỡi xuống*", "d. Nguồn sáng rõ"],
    question: "Câu 977: Để thấy rõ amidan viêm trong thể ẩn khi khám cần phải:",
  },
  {
    answers: [
      "a. Hoại tử tháp mũi*",
      "b. Tổn thương chức năng và thẩm mỹ ",
      "c. Hoại tử vách ngăn",
      "d. Áp xe vách ngăn",
    ],
    question: "Câu 978: Tụ máu vách ngăn, nếu không được xử trí sẽ dẫn đến một di chứng quan trọng là:",
  },
  {
    answers: ["a. Các dấu hiệu trên*", "b. Ù tai tiến triển", "c. Điếc dẫn truyền tăng dần", "d. Màng nhĩ lõm đục"],
    question: "Câu 979: Triệu chứng chủ yếu của viêm tai giữa xuất tiết xơ nhĩ:",
  },
  {
    answers: ["a. Gai vách ngăn", "b. Dầy chân vách ngăn", "c. Mào vách ngăn", "d. Vẹo vách ngăn*"],
    question: "Câu 980: Loại dị hình nào của vách ngăn có thể gây nghẹt mũi:",
  },
  {
    answers: [
      "a. Thay đổi thời tiết",
      "b. Môi trường bị ô nhiễm",
      "c. Sống tập thể trường mẫu giáo",
      "d. Giảm sức đề kháng cơ thể*",
    ],
    question: "Câu 981: Yếu tố thuận lợi gây viêm amidan cấp ở trẻ em:",
  },
  {
    answers: ["a. Viêm mũi cấp", "b. Viêm tai giữa cấp thanh dịch", "c. Viêm V.A cấp", "d. Viêm tai giữa cấp tụ mủ*"],
    question: "Câu 982: Một chẩn đoán được nghĩ đến là:",
  },
  {
    answers: ["a. XII", "b. IX*", "c. XI", "d. X"],
    question: "Câu 983: Đôi thần kinh sọ thường bị tổn thương trong hội chứng lỗ rách sau là:",
  },
  {
    answers: ["a. Bệnh tim chưa ổn định", "b. Các rối loạn về đông máu", "c. Suy dinh dưỡng*", "d. Lao tiến triển"],
    question: "Câu 984: Các chống chỉ định cắt amidan, NGOẠI TRỪ:",
  },
  {
    answers: [
      "a. Suy dinh dưỡng.",
      "b. Nhiễm trùng mũi xoang kéo dài.",
      "c. Nghe kém do viêm tai giữa.",
      "d. Thiếu oxi kéo dài.*",
    ],
    question: "Câu 985: Triệu chứng nhức đầu, khó tập trung ở bé bị viêm V.A quá phát là do:",
  },
  {
    answers: [
      "a. Người mẹ mang thai nhiễm siêu vi",
      "b. Dùng thuốc khi người mẹ mang thai *",
      "c. Ngộ độc",
      "d. Tai biến sản khoa",
    ],
    question: "Câu 986: Nguyên nhân điếc câm ở trẻ thường gặp nhất trong sản khoa:",
  },
  {
    answers: ["a. Động mắt", "b. Liệt ½ người", "c. Phù gai thị", "d. Nôn vọt*"],
    question: "Câu 987: Dấu hiệu thần kinh khu trú do áp xe não bao gồm, ngoại trừ:",
  },
  {
    answers: [
      "a. Không gặp ở trẻ em*",
      "b. Điều trị thường dai dẳng",
      "c. Là một bệnh hay gặp",
      "d. Luôn có cảm giác vướng họng",
    ],
    question: "Câu 988: Viêm họng mạn tính có các đặc điểm sau, NGOẠI TRỪ:",
  },
  { answers: ["a. 9", "b. 6", "c. 8*", "d. 7"], question: "Câu 989: Mở khí quản có mấy bước:" },
  {
    answers: ["a. Thành bên*", "b. Trước trên", "c. Sau trên vòm", "d. Họng"],
    question: "Câu 990: Triệu chứng tai thường do khối u vòm thường xâm lấn vào:",
  },
  {
    answers: ["a. Viêm tai giữa", "b. Viêm ống tai ngoài do nấm *", "c. Xốp xơ tai", "d. Dị vật ống tai ngoài."],
    question: "Câu 991: Bệnh nhân nghe kém có kèm ngứa tai có thể gặp trong bệnh:",
  },
  {
    answers: [
      "a. Biểu mô thoái hóa*",
      "b. Niêm mạc bị xung huyết",
      "c. Các tế bào trụ mất lông chuyển",
      "d. Tế bào trụ biến thành tế bào dẹt",
    ],
    question: "Câu 992: Các tổn thương giải phẫu bệnh sau gặp ở giai đoạn I của viêm thanh quản mạn tính, NGOẠI TRỪ:",
  },
  {
    answers: ["a. Khe trên*", "b. Lưng đuôi cuốn giữa", "c. Khe dưới", "d. Khe giữa"],
    question: "Câu 993: Tế bào khứu giác Schiiltz nằm ở:",
  },
  {
    answers: ["a. Mở khí quản tối cấp", "b. Cho thuốc an thần*", "c. Trợ tim mạch", "d. Dùng thuốc chống phù nề"],
    question: "Câu 994: Điều không nên làm đối với khó thở thanh quản độ 3 là:",
  },
  {
    answers: ["a. Chích rạch áp xe amidan", "b. Cắt amidan*", "c. Kháng sinh", "d. Kháng viêm"],
    question: "Câu 995: Điều trị chủ yếu áp xe amidan, ngoại trừ:",
  },
  {
    answers: ["a. Viêm phổi", "b. Phế quản phế viêm", "c. Hen suyễn", "d. Khó thở thanh quản*"],
    question: "Câu 996: Loại khó thở nào liên quan đến tình trạng hô hấp ở trẻ em:",
  },
  {
    answers: ["a. >9 tuổi", "b. >15 tuổi", "c. >12 tuổi*", "d. > 6 tuổi"],
    question: "Câu 997: Tuổi thích hợp cắt amidan là:",
  },
  {
    answers: ["a. Cắt nửa thanh quản", "b. Phẫu thuật đơn thuần", "c. Xạ trị đơn thuần", "d. a, b đúng*"],
    question: "Câu 998: Điều trị ung thư dây thanh T1N0M0",
  },
  {
    answers: ["a. Liên phễu", "b. Giáp – phễu dưới", "c. Giáp – phễu trên", "d. Nhẫn – giáp*"],
    question: "Câu 999: Dây thần kinh quặt ngược chi phối vận động các cơ thanh quản, NGOẠI TRỪ:",
  },
  {
    answers: ["a. Sốt cao", "b. Đột ngột", "c. Mệt mỏi", "d. Triệu chứng của nhiễm siêu vi cảm cúm*"],
    question: "Câu 1000:Triệu chứng toàn thân chủ yếu của viêm amidan cấp:",
  },
  {
    answers: ["a. Cao huyết áp*", "b. Bệnh lý cột sống cổ", "c. Đau dây thần kinh liên sườn", "d. Sỏi mật"],
    question: "Câu 1001:",
  },
  {
    answers: [
      "a. Trên thanh môn lan xuống thanh môn*",
      "b. Tiền đình thanh quản lan vào xoang lê",
      "c. Dây thanh lan vào sụn thanh thiệt",
      "d. Miệng giếng",
    ],
    question:
      "Câu 1002: Về lâm sàng anh (chị) nghĩ đến bệnh ung thư thanh quản ở vùng? Tình huống: Bệnh nhân nam 60 tuổi, 6 tháng nay thấy bướu cổ bên (T) nổi nhiều hạch rắn không đau. 3 tháng nay thường ngứa cổ, ho từng cơn, khó thở nặng dần, 10 ngày trở lại đây thấy có sự thay đổi giọng nói: ",
  },
  {
    answers: ["a. Ù tai", "b. Nghe kém", "c. Chảy dịch não tủy", "d. Chảy máu tai*"],
    question: "Câu 1003: Dấu hiệu thường gặp nhất trong chấn thương tai là:",
  },
  {
    answers: ["a. Áp xe dưới màng cứng", "b. Viêm tắc tĩnh mạch xoang hang", "c. Viêm màng não", "d. ổ mắt*"],
    question: "Câu 1004: Biến chứng thường gặp nhất trong viêm mũi xoang cấp do vi khuẩn ở tất cả các lứa tuổi là:",
  },
  {
    answers: [
      "a. Chảy máu nhiều",
      "b. Bệnh nhân vật vã không cố định khí quản được",
      "c. Có bướu giáp kèm theo",
      "d. Tìm khí quản khó khăn*",
    ],
    question: "Câu 1005: Khó khăn nhất trong mở khí quản là:",
  },
  {
    answers: [
      "a. Võ não không có vai trò chính trong chức năng nuốt",
      "b. Thì miệng.*",
      "c. a,b đúng.",
      "d. Thì họng.",
    ],
    question: "Câu 1006: Thì nào của động tác nuốt được điều khiển bởi vỏ não:",
  },
  {
    answers: [
      "a. Cảm giác tưng tức",
      "b. Viêm cấp nhức đầu nhiều hơn viêm mạn",
      "c. Ê ẩm vùng xoang bị viêm",
      "d. Thường nhức đầu dữ dội*",
    ],
    question: "Câu 1007: Đặc điểm nhức đầu trong viêm xoang bao gồm, ngoại trừ:",
  },
  {
    answers: [
      "a. Các yếu tố trên",
      "b. Là cửa ngõ của đường ăn, đường thở",
      "c. Kế cận vùng mũi xoang",
      "d. Amidan có nhiều khe*",
    ],
    question: "Câu 1008: Amidan dễ trở thành mạn tính do cấu trúc bởi:",
  },
  {
    answers: ["a. Từ thừng nhĩ trở lên", "b. Trên hạch gối*", "c. Trên thừng nhĩ", "d. Thân nền đến cống Fallop"],
    question: "Câu 1009: Bệnh nhân không có bài tiết nước mắt chứng tỏ tổn thương dây VII ở đoạn:",
  },
  {
    answers: ["a. Các dấu hiệu trên*", "b. Tiêu chảy", "c. Nôn mửa", "d. Sốt cao"],
    question: "Câu 1010: Dấu hiệu nặng của viêm tai giữa cấp tính mủ:",
  },
  {
    answers: ["a. > 5*", "b. 2", "c. 4", "d. 3"],
    question: "Câu 1011: Giả mạc trong viêm họng bạch hầu thông thường rụng vào ngày thứ:",
  },
  {
    answers: ["a. Xạ trị", "b. Cắt dây thanh", "c. Cắt dây thanh và xạ trị*", "d. Cắt thanh quản toàn phần"],
    question:
      "Câu 1012: Ung thư biểu mô dạng sùi khu trú ở 1/3 giữa dây thanh, vẫn còn di động trên một bệnh nhân nam 40 tuổi, điều trị được lựa chọn trước tiên là:",
  },
  {
    answers: ["a. Đột ngột", "b. Khó nuốt*", "c. Khó thở", "d. Khàn tiếng"],
    question: "Câu 1013: Dấu hiệu sau không thuộc ung thư hạ thanh môn:",
  },
  {
    answers: ["a. Trên thanh môn", "b. Nẹp phễu – thanh thiệt", "c. Thanh môn*", "d. Dưới thanh môn"],
    question: "Câu 1014: Vùng của thanh quản rất ít mạch bạch huyết là:",
  },
  {
    answers: ["a. Sốt", "b. Nuốt đau", "c. Đọng nhiều nước miếng", "d. Há miệng hạn chế*"],
    question: "Câu 1015: Dấu hiệu quan trọng trong viêm tấy cạnh họng:",
  },
  {
    answers: ["a. Dưới 12 tuần*", "b. Dưới 8 tuần", "c. Trên 12 tuần", "d. Dưới 4 tuần"],
    question: "Câu 1016: Thời gian được gọi là viêm cấp khi:",
  },
  {
    answers: ["a. Điếc dẫn truyền", "b. Điếc hỗn hợp", "c. Điếc tiếp nhận", "d. Lõm thính ở tần số 2000Hz – 4000Hz*"],
    question: "Câu 1017: Dấu hiệu điển hình trong thính lực đồ trong điếc nghề nghiệp:",
  },
  {
    answers: ["a. a,b đúng", "b. Nhĩ lượng đồ", "c. Phản xạ cơ bàn đạp", "d. Âm ốc tai*"],
    question: "Câu 1018: Đo trở kháng không bao gồm các phương pháp sau:",
  },
  {
    answers: ["a. Viêm mũi*", "b. Viêm họng", "c. Viêm amidan", "d. Viêm xoang"],
    question: "Câu 1019: Biến chứng tại chỗ của viêm V.A thường gặp nhất :",
  },
  {
    answers: ["a. U dây VIII", "b. Viêm ống tai ngoài*", "c. Rỗng hành não", "d. Xơ cứng rải rác"],
    question: "Câu 1020: Chóng mặt có thể gặp trong các bệnh sau, NGOẠI TRỪ:",
  },
  {
    answers: ["a. Ho sặc sụa", "b. Sặc sụa, tím tái khi bú *", "c. Khóc thét", "d. Há miệng để thở"],
    question: "Câu 1021: Dấu hiệu quan trọng của dò khí - thực quản sau sanh:",
  },
  {
    answers: [
      "a. Tăng lượng không khí lưu thông",
      "b. Giảm khoảng chết",
      "c. Giải quyết sớm tắc nghẽn ở thanh quản*",
      "d. Các mục đích trên",
    ],
    question: "Câu 1022: Xử trí khó thở thanh quản cấp cứu là nhằm, chọn câu đúng nhất:",
  },
  {
    answers: ["a. Mép sau", "b. 1/3 giữa*", "c. Mép trước", "d. 1/3 trước"],
    question: "Câu 1023: Ung thư dây thanh thường gặp nhất ở:",
  },
  {
    answers: [
      "a. Viêm tai giữa xuất tiết dịch thấm*",
      "b. Viêm tai giữa xung huyết",
      "c. Viêm tai giữa mủ nhiễm khuẩn",
      "d. Điếc đột ngột",
    ],
    question: "Câu 1024: Thợ lặn dưới biển có thể bị:",
  },
  {
    answers: ["a. Phù gai thị", "b. Nôn vọt", "c. Nhức đầu", "d. Cổ cứng*"],
    question: "Câu 1025: Triệu chứng không thuộc hội chứng tăng áp lực nội sọ là:",
  },
  {
    answers: ["a. Viêm túi lệ", "b. Ngừng thở lúc ngủ*", "c. Viêm kết mạc", "d. Viêm tắc vòi nhĩ"],
    question: "Câu 1026: V.A quá phát có thể gây biến chứng:",
  },
  {
    answers: ["a. Không sừng hóa", "b. Sừng hóa*", "c. Có tuyến mồ hôi", "d. Có lông chuyển, tuyến bã"],
    question: "Câu 1027: Tiền đình mũi bao bọc bởi biểu mô lát tầng với các đặc trưng sau, NGOẠI TRỪ:",
  },
  {
    answers: [
      "a. Các triệu chứng trên*",
      "b. Ống tai xương chũm rộng",
      "c. Màng nhĩ bình thường",
      "d. Nhĩ lượng đồ loại A đỉnh thấp",
    ],
    question: "Câu 1028: Nghe kém trong bệnh xốp xơ tai có các triệu chứng sau:",
  },
  {
    answers: [
      "a. Kháng sinh",
      "b. Kháng viêm",
      "c. Rạch thoát lưu máu tụ ở vách ngăn*",
      "d. Nhét meche mũi để ép niêm mạc vách ngăn",
    ],
    question: "Câu 1029: Xử lý đúng nhất tụ máu vách ngăn là:",
  },
  {
    answers: ["a.Trẻ dưới 5 tuổi ", "b. Trẻ lớn", "c. Người lớn*", "d.Trẻ dưới 15 tuổi"],
    question: "Câu 1030: Áp xe amidan thường gặp ở:",
  },
  {
    answers: ["a. U não", "b. U phổi", "c. Cắt tuyến giáp*", "d. U tuyết mang tai"],
    question: "Câu 1031: Loại phẫu thuật nào có biến chứng đến cơ quan phát âm:",
  },
  {
    answers: [
      "a. Kháng viêm tại chỗ.",
      "b. Nạo V.A + giải mẫn cảm đặc hiệu.*",
      "c. Nạo V.A sẽ hết dị ứng.",
      "d. Kháng sinh khi có bội nhiễm.",
    ],
    question: "Câu 1032: Viêm V.A trên cơ địa viêm mũi dị ứng, điều trị tốt nhất là:",
  },
  {
    answers: [
      "a. Làm hàm răng giả",
      "b. Chế biến thức ăn thích hợp*",
      "c. Khuyến khích ăn thịt nạc",
      "d. Hạn chế uống rượu say trong khi ăn ",
    ],
    question: "Câu 1033: Một người bệnh lớn tuổi không có răng, đề phòng dị vật đường ăn có hiệu quả nhất là:",
  },
  {
    answers: ["a. Kháng sinh, nạo V.A khi có chỉ định*", "b. Kháng dị ứng", "c. Nạo V.A đại trà", "d. Kháng sinh"],
    question: "Câu 1034: Điều trị viêm V.A bao gồm:",
  },
  {
    answers: ["a. Quai bị", "b. Viêm ốc tai do virus*", "c. Zona", "d. Viêm tai giữa có Cholesteatoma"],
    question: "Câu 1035: Nguyên nhân sau thường gặp nhất trong điếc đột ngột:",
  },
  {
    answers: [
      "a. Amidan và họng có nhiều giả mạc*",
      "b. Bề mặt amidan có nhiều hốc mủ",
      "c. Hai amidan có sỏi",
      "d. Amidan quá phát chạm vào lưỡi gà",
    ],
    question: "Câu 1036:Cần lưu ý khi khám amidan thấy:",
  },
  {
    answers: ["a. Dây thần kinh III", "b. Dây thần kinh VII*", "c. Dây thần kinh VI", "d. Dây thần kinh IV"],
    question: "Câu 1037: Hội chứng bướu đá không bao gồm tổn thương:",
  },
  {
    answers: ["a. Đường máu", "b. Biểu mô bề mặt*", "c. Tất cả các đường trên", "d. Bạch huyết"],
    question: "Câu 1038: Kháng viêm xâm nhập vào mô V.A qua đường:",
  },
  {
    answers: ["a. Tránh nhiễm trùng tại chỗ", "b. Mở thấp", "c. Mở đúng kỹ thuật", "d. Bao gồm các nội dung trên*"],
    question: "Câu 1039: Hạn chế sẹo hẹp sau mở khí quản cần phải:",
  },
  {
    answers: ["a. Chảy máu mũi*", "b. Hai gò má mất cân đối", "c. Bầm tím vùng má", "d. Sưng nề vùng má"],
    question: "Câu 1040: Dấu hiệu chắc chắn nhất của vỡ mặt trước xoang hàm là:",
  },
  {
    answers: ["a. Tổng hợp các yếu tố*", "b. Số lượng máu mất", "c. Thể trạng chung", "d. Mạch, huyết áp"],
    question: "Câu 1041: Đánh giá mức độ chảy máu mũi quan trọng nhất là căn cứ vào:",
  },
  {
    answers: ["a. Các yếu tố trên*", "b. Liều lượng quá cao", "c. Mẫn cảm", "d. Thời gian tác động"],
    question: "Câu 1042: Nhiễm độc tai trong thường gặp trong điều kiện:",
  },
  {
    answers: ["a. Vùng dưới thanh môn", "b. Thanh thiệt", "c. Dây thanh*", "d. Bờ miệng giếng"],
    question: "Câu 1043: Vị trí ung thư có thể phát hiện sớm nhất là:",
  },
  {
    answers: ["a. Nhãn áp bình thường", "b. Có dấu hiệu ruồi bay", "c. Phù gai thị*", "d. Mờ mắt"],
    question: "Câu 1044:",
  },
  {
    answers: ["a. Trẻ lớn và người lớn*", "b. Người lớn tuổi", "c. 11-15", "d. 5-10"],
    question: "Câu 1045: Viêm xoang mạn tính thường gặp nhất ở lứa tuổi:",
  },
  {
    answers: ["a. Phế quản phế viêm*", "b. Áp xe phổi", "c. Dò khí thực quản", "d. Xẹp phổi"],
    question: "Câu 1046: Dị vật đường thở có thể gây ra một số bệnh lý thường gặp ở phổi:",
  },
  {
    answers: ["a. Vi khuẩn", "b. Các yếu tố trên", "c. Dị ứng", "d. Siêu vi*"],
    question: "Câu 1047: Viêm amidan cấp nguyên nhân thường do:",
  },
  {
    answers: ["a. T2N2M0", "b. T1N1M0", "c. T3N2M0*", "d. T2N1M0"],
    question:
      "Câu 1048: Phân loại theo T.M.N dựa vào lâm sàng sau? Tình huống: Bệnh nhân nam 60 tuổi, 6 tháng nay thấy bướu cổ bên (T) nổi nhiều hạch rắn không đau. 3 tháng nay thường ngứa cổ, ho từng cơn, khó thở nặng dần, 10 ngày trở lại đây thấy có sự thay đổi giọng nói: ",
  },
  {
    answers: ["a. Kháng viêm", "b. Kháng sinh", "c. Chích rạch thoát lưu mủ*", "d. Rỏ thuốc vào mắt"],
    question: "Câu 1049: Điều trị thích hợp và quan trọng nhất được đưa ra là:",
  },
  {
    answers: ["a. 8", "b. 9", "c. 7", "d. 10*"],
    question: "Câu 1050: Sau khi cắt amidan, bệnh nhân ăn cơm bình thường vào ngày thứ:",
  },
  {
    answers: ["a. Lệch nhãn cầu", "b. Lồi lõm cung gò má", "c. Bờ dưới ổ mắt di lệch nửa thân xương", "d. Lõm gò má"],
    question: "Câu 1051: Tổn thương không thuộc chỉ định phẫu thuật trong chấn thương xoang hàm:",
  },
  {
    answers: ["a. Sào bào", "b. Loa vòi nhĩ", "c. Sào đạo", "d. Hòm nhĩ*"],
    question: "Câu 1052: Viêm tai giữa cấp tính mủ, mủ hiện diện chủ yếu ở:",
  },
  {
    answers: [
      "a. Khối Cholesteatoma khô",
      "b. Khối Cholesteatoma khu trú",
      "c. Khối Cholesteatoma xâm lấn tường dây VII*",
      "d. Khối Cholesteatoma nhỏ",
    ],
    question: "Câu 1053: Viêm tai xương chũm có Cholesteatoma điều trị bảo tồn khi, ngoại trừ:",
  },
  {
    answers: ["a. Kanamycine", "b. Amino glycoside*", "c. Gentamycine", "d. Streptomycine"],
    question: "Câu 1054: Loại thuốc nào sao đây có thể gây điếc câm ở trẻ sơ sinh:",
  },
  {
    answers: ["a. LeFort I", "b. LeFort III*", "c. LeFort II", "d. Vỡ Blow Out"],
    question: "Câu 1055: Vỡ phức tạp sàn ổ mắt thuộc kiểu gãy:",
  },
  {
    answers: ["a. Tai nạn trong sinh hoạt", "b. Đa thương", "c. Tai nạn giao thông*", "d. Tai nạn lao động"],
    question: "Câu 1056: Nguyên nhân chấn thương tai mũi họng nhiều nhất hiện nay là:",
  },
  {
    answers: ["a. Lấy giả mạc cấy.*", "b. Cấy dịch mũi.", "c. Phết họng.", "d. Cấy máu."],
    question: "Câu 1057: Xác định vi khuẩn bạch hầu tốt nhất là:",
  },
  {
    answers: ["a. Nạo V.A", "b. Điều trị kháng sinh, kháng viêm", "c. Đặt ống thông khí", "d. A và B đúng*"],
    question: "Câu 1058: Viêm tai giữa thanh dịch trên một bệnh nhân V.A, xử trí đúng nhất là:",
  },
  {
    answers: [
      "a. Vỡ xương chính mũi kèm vỡ sụn tứ giác",
      "b. Vỡ phức hợp sàng mũi",
      "c. Vỡ hố lê*",
      "d. Vỡ đầu trước xương chính mũi",
    ],
    question: "Câu 1059: Kiểu vỡ không thuộc chấn thương tháp mũi đơn thuần:",
  },
  {
    answers: ["a. Độ lấn của V.A.*", "b.Tuổi.", "c. Thời gian viêm.", "d. Độ rộng của khoang tị hầu."],
    question: "Câu 1060: Tình trạng nghẹt mũi trong viêm V.A phụ thuộc vào :",
  },
  {
    answers: ["a. Amidan.*", "b. a,b,c sai.", "c. Thành sau họng.", "d. a,b đúng."],
    question: "Câu 1061: Viêm họng giả mạc trắng thông thường giả mạc bám ở đâu:",
  },
  {
    answers: [
      "a. Tái phát nhiều lần",
      "b. Số lượng vừa, ít khi tự cầm*",
      "c. Số lượng lớn, thường tự cầm",
      "d. Thường gặp ở bé trai, tuổi thiếu niên",
    ],
    question: "Câu 1062: Chảy máu mũi trong u xơ vòm mũi họng có các đặc điểm sau, NGOẠI TRỪ:",
  },
  {
    answers: ["a.không còn chức năng miễn dịch", "b. quá phát hốc mủ", "c. tất cả các yếu tố trên*", "d. sỏi amidan"],
    question: "Câu 1063: Chỉ định cắt amidan khi:",
  },
  {
    answers: ["a. Các dấu hiệu trên*", "b. Khó thở thanh quản", "c. Họng có giả mạc", "d. Khàn tiếng"],
    question: "Câu 1064: Cần nghĩ đến viêm thanh quản bạch hầu khi:",
  },
  {
    answers: ["a. Nghẹt mũi", "b. Rối loạn khứu giác*", "c. Chảy mũi", "d. Hắt hơi"],
    question: "Câu 1065: Triệu chứng không thường xuyên của viêm mũi dị ứng:",
  },
  {
    answers: [
      "a. Điếc nặng",
      "b. Không tổn thương thần kinh",
      "c. Các trường hợp trên*",
      "d. Dùng máy trợ tính không tác dụng",
    ],
    question: "Câu 1066: Cấy điện cực ốc tai phù hợp với trường hợp sau:",
  },
  {
    answers: ["a. Mổ vách ngăn vẹo.", "b. Cắt amidan.", "c. Nạo V.A.", "d. Điều trị tốt nhiễm trùng mũi xoang.*"],
    question: "Câu 1067: Điều trị đúng nhất trong viêm họng mạn tính:",
  },
  {
    answers: [
      "a. Các tính chất trên*",
      "b. Thủng ở ¼ sau trên",
      "c. Thủng ngoặm vào khung nhĩ",
      "d. Thủng nhỏ ở màng chùng",
    ],
    question: "Câu 1068: Tình trạng viêm tai giữa mạn tính nặng khi thủng màng nhĩ có đặc điểm:",
  },
  {
    answers: [
      "a. Giả mạc trắng một bên, dễ lấy*",
      "b. Giả mạc khó gỡ, dễ chảy máu",
      "c. Giả mạc lúc đầu có cả ở 2 bên",
      "d. Giả mạc dễ mủn nát",
    ],
    question: "Câu 1069:",
  },
  {
    answers: ["a. Viêm mũi xoang", "b. Rối loạn tiêu hóa", "c. Viêm họng thanh quản", "d. Viêm tai thanh dịch*"],
    question: "Câu 1070: Biến chứng thường gặp nhất của viêm V.A là:",
  },
  {
    answers: [
      "a. Khoét rộng đá chũm bán phần",
      "b. Chỉ cần dùng kháng sinh liều cao*",
      "c. Mở sào bào thủng nhĩ",
      "d. Khoát rộng đá chũm",
    ],
    question: "Câu 1071: Chỉ định điều trị viêm tai xương chũm có cholesteatoma; ngoại trừ:",
  },
  {
    answers: ["a. Xương lợi", "b. Xương gò má", "c. Tất cả các loại trên*", "d. Vỡ nát xương hàm"],
    question: "Câu 1072: Các xương thường di chuyển khi vỡ xoang hàm:",
  },
  {
    answers: ["a. Trên 25 tuổi.", "b. Trên 10 tuổi.", "c. Trên 15 tuổi.*", "d. Trên 20 tuổi."],
    question: "Câu 1073: Gọi là V.A tồn lưu khi xuất hiện ở:",
  },
  {
    answers: ["a. Thở oxy cao áp", "b. Thuốc kháng histamin*", "c. Thuốc chống đông", "d. Thuốc dãn mạch"],
    question: "Câu 1074: Nội dung không thuộc điều trị chấn thương tai giữa do khí áp:",
  },
  {
    answers: ["a. Xén vách ngăn", "b. Mở rộng lỗ thông mũi xoang", "c. Cắt cuốn giữa", "d. Cắt cuốn dưới*"],
    question: "Câu 1075: Chảy máu mũi nhiều sau các phẫu thuật sau:",
  },
  {
    answers: ["a. Tổn thương thời kỳ bào thai", "b. Tổn thương sau sinh", "c. U dây VIII*", "d. Tổn thương lúc sinh"],
    question: "Câu 1076: Xác định nguyên nhân gây nghe kém ở trẻ nhỏ. Chọn 1 ý sai:",
  },
  {
    answers: ["a. Cao huyết áp", "b. Chấn thương*", "c. Viêm xoang cấp", "d. Dị vật mũi"],
    question: "Câu 1077: Chảy máu điểm mạch nguyên nhân thường do:",
  },
  {
    answers: ["a. Qurckensteed-Stockey (+)*", "b. Vạch màng não (+)", "c. Brudzinski (+)", "d. Kernig (+)"],
    question: "Câu 1078: Dấu hiệu màng não kinh điển bao gồm, ngoại trừ:",
  },
  {
    answers: ["a. Chích rạch dẫn lưu mủ, áp xe", "b. Kháng viêm", "c. Kháng sinh", "d. Tất cả các nội dung trên"],
    question: "Câu 1079: Điều trị thích hợp nhất đối với áp xe quanh amidan là:",
  },
  {
    answers: [
      "a. Tai mũi họng liên quan nhiều đến cơ quan của cơ thể",
      "b. Nuốt vướng, nuốt đau ở họng có thể là do bệnh lý dạ dày",
      "c. Tổn thương ở cơ quan này có thể có triệu chứng của cơ quan khác",
      "d. Không chẩn đoán lầm bệnh tai mũi họng với các bệnh của chuyên khoa khác có triệu chứng tai mũi họng hoặc ngược lại không bỏ sót bệnh của các cơ quan khác*",
    ],
    question: "Câu 1080: Bác sĩ đa khoa cần nghiên cứu sự liên quan của tai mũi họng với các chuyên khoa khác bởi vì:",
  },
  {
    answers: ["a. 2000-4000Hz", "b. 4000-6000Hz", "c. 2000-3000Hz", "d. 3000-4000Hz*"],
    question:
      "Câu 1081: Trong điếc nghề nghiệp, dấu hiệu điển hình trên thính lực đồ đơn âm là lõm thính không ở dãy tần số:",
  },
  {
    answers: ["a. Nhãn Khoa", "b. Tiêu Hóa", "c. Răng Hàm Mặt*", "d. Ngoại thần kinh"],
    question: "Câu 1082: Chuyên khoa nào liên quan nhiều nhất đến tai mũi họng:",
  },
  {
    answers: ["a. Làm ẩm không khí", "b. Khứu giác chính", "c. Làm ấm không khí", "d. Phát âm*"],
    question: "Câu 1083: Mũi có các chức năng sau, ngoại trừ:",
  },
  {
    answers: [
      "a. Xoang bướm liên quan mật thiết với dây thần kinh thị giác",
      "b. Xoang bướm nằm ở sâu*",
      "c. Xoang bướm liên quan mật thiết với động mạch cảnh trong",
      "d. Xoang bướm liên quan mật thiết với xoang hang",
    ],
    question: "Câu 1084:",
  },
  {
    answers: [
      "a. Làm giảm phản xạ họng*",
      "b. Nguồn sáng tốt",
      "c. Giải thích kỹ cho người bệnh",
      "d. Hơ nóng gương soi",
    ],
    question: "Câu 1085: Để khám thanh quản gián tiếp được tốt nhất, người thầy thuốc cần phải:",
  },
  {
    answers: ["a. Sốt rét", "b. Cao huyết áp*", "c. Bệnh Leucose", "d. Leptospira"],
    question: "Câu 1086: Triệu chứng chảy máu mũi gặp nhiều nhất trong bệnh:",
  },
  {
    answers: [
      "a. Rốn phổi đậm 2 bên",
      "b. Một vùng phổi mờ đặc*",
      "c. Nhu mô phổi sáng hơn bình thường",
      "d. Trung thất bị đẩy về bên lành",
    ],
    question: "Câu 1087: Tràn khí màng phổi bao gồm các dấu hiệu sau, ngoại trừ:",
  },
  {
    answers: ["a. Ho ra máu*", "b. Đau vùng thanh quản", "c. Khàn tiếng", "d. Ho kích thích"],
    question: "Câu 1088: Viêm thanh quản cấp có các triệu chứng sau, NGOẠI TRỪ:",
  },
  {
    answers: ["a. Cơ – thần kinh", "b. Lao thanh quản", "c. U dây thanh", "d. Viêm nhiễm*"],
    question: "Câu 1089: Khàn tiếng nhiều nhất là do nguyên nhân:",
  },
  {
    answers: ["a. Chảy mũi vàng, xanh*", "b. Nhiều xuất tiết nhầy", "c. Nghẹt mũi nhiều", "d. Niêm mạc đỏ, xung huyết"],
    question: "Câu 1090: Dấu hiệu lâm sàng chứng tỏ viêm mũi cấp bị bội nhiễm là:",
  },
  {
    answers: ["a. 1-2", "b. 2-3", "c. 3-4*", "d. 4-5"],
    question: "Câu 1091: Vị trí mở khí quản trung bình ứng với liên đốt khí quản:",
  },
  {
    answers: ["a. Giai đoạn tiến triển", "b. Giai đoạn nhầy mủ", "c. Giai đoạn bội nhiễm*", "d. Giai đoạn xuất tiết"],
    question: "Câu 1092: Giai đoạn nào của viêm mũi xoang cấp dễ nhầm với viêm mũi xoang mạn tính:",
  },
  {
    answers: ["a. Polype mũi", "b. Viêm mũi xoang", "c. Dãn phế quãn", "d. Mờ mắt*"],
    question: "Câu 1093: Hội chứng Mounier-kuhn bao gồm các triệu chứng, NGOẠI TRỪ:",
  },
  {
    answers: ["a. Gout", "b. Béo phì", "c. Đái tháo đường", "d. Các bệnh trên *"],
    question: "Câu 1094: Bệnh sau đây liên quan đến viêm họng quá sản:",
  },
  {
    answers: [
      "a. Niêm mạc mũi phù nề",
      "b. Chảy mũi nhiều",
      "c. Quá sản niêm mạc cuốn dưới*",
      "d. Các cuốn mũi co hồi chậm",
    ],
    question: "Câu 1095: Viêm mũi mạn tính giai đoạn xuất tiết có các triệu chứng lâm sàng chủ yếu sau, NGOẠI TRỪ:",
  },
  {
    answers: ["a. III*", "b. I", "c. II", "d. IV"],
    question:
      "Câu 1096: Một người bệnh nam 62 tuổi có khối u ở vòm khi nội soi, có hạch sau góc hàm bên phải di động. Đây là ung thư giai đoạn:",
  },
  {
    answers: [
      "a. Niêm mạc phù nề",
      "b. Tổ chức đệm thâm nhiễm bạch cầu đa nhân",
      "c. Biểu mô có thể bị loét tạo thành mô hạt*",
      "d. Các mạch máu sung huyết",
    ],
    question: "Câu 1097: Trong viêm tai giữa cấp, ta có thể thấy được các dấu hiệu thực thể sau, NGOẠI TRỪ:",
  },
  {
    answers: [
      "a. Cho thở oxy",
      "b. Dùng đè lưỡi khám họng*",
      "c. Dùng kháng sinh, kháng viêm",
      "d. Mở khí quản nếu cần",
    ],
    question: "Câu 1098: Một em bé dưới 1 tuổi đang bị khó thở thanh quản độ 2, không nên:",
  },
  {
    answers: [
      "a. Đau nhói khi đau, khi thở sâu",
      "b. Sốt cao hoặc hạ nhiệt độ",
      "c. Trung thất dãn rộng trên phim phổi thẳng và nghiêng*",
      "d. Dáng đi lom khom",
    ],
    question: "Câu 1099: Dấu hiệu có giá trị nhất trong chẩn đoán áp xe trung thất do hóc xương là:",
  },
  {
    answers: ["a. 5m*", "b. 6m", "c. 4m", "d. 3m"],
    question: "Câu 1100: Tai bình thường có thể nghe được tiếng nói thầm ở khoảng cách:",
  },
  {
    answers: ["a. Liệt thần kinh VII", "b. Biến chứng nội sọ*", "c. Viêm xương chủm", "d. Viêm mê nhĩ"],
    question: "Câu 1101: Biến chứng nặng của viêm tai giữa cấp tính mủ là:",
  },
  {
    answers: [
      "a. Dễ chẩn đoán trên lâm sàng",
      "b. Cần điều trị ngay, khi đã có kết quả vi khuẩn học",
      "c. Điều trị bằng kháng sinh đơn thuần",
      "d. Cần khai thác kỹ bệnh sử về việc tiếp xúc với nguồn lây*",
    ],
    question: "Câu 1102: Khẳng định đúng với viêm họng bạch hầu là:",
  },
  {
    answers: ["a.Augmentin", "b. Ciprofloxacine ", "c.Metronidazol ", "d.Các kháng sinh trên*"],
    question: "Câu 1103: Kháng sinh phù hợp được sử dụng sau chích rạch áp xe amidan:",
  },
  {
    answers: [
      "a. Dầy phần trước cột sống cổ trên phim nghiêng*",
      "b. Sưng tấy vùng cổ",
      "c. Không ăn uống được",
      "d. Sốt cao dao động",
    ],
    question: "Câu 1104: Dấu hiệu có giá trị nhất để chẩn đoán viêm tấy hoặc áp xe thực quản cổ là:",
  },
  {
    answers: ["a. Viêm mũi họng.", "b. Ảnh hưởng sự mọc răng.", "c. Bộ mặt V.A.*", "d. Thiếu oxi."],
    question: "Câu 1105: Hậu quả của tình trạng nghẹt mũi kéo dài :",
  },
  {
    answers: ["a. Bạch hầu", "b. Các bệnh trên *", "c. Viêm màng não", "d. Uốn ván"],
    question: "Câu 1106: Bệnh truyền nhiễm sau có liên quan đến chỉ định mở khí quản:",
  },
  {
    answers: [
      "a. Hướng dẫn cách xì mũi.",
      "b. Vệ sinh môi trường sống.*",
      "c. Vệ sinh cá nhân cho trẻ.",
      "d. Rửa mũi.",
    ],
    question: "Câu 1107: Phòng ngừa viêm V.A:",
  },
  {
    answers: [
      "a. Tình trạng nhiễm trùng ổn định*",
      "b. Các câu trên đều sai",
      "c. Dùng kháng sinh đồng thời với soi thực quản",
      "d. Phải soi ngang",
    ],
    question: "Câu 1108: Soi thực quản giai đoạn nhiễm trùng được thực hiện khi nào:",
  },
  {
    answers: ["a. Mọi lứa tuổi", "b. Quanh năm", "c. Ở nam gặp nhiều hơn nữ", "d. Ở trẻ từ 1 đến 3 tuổi*"],
    question: "Câu 1109: Dị vật đường thở thường gặp:",
  },
  {
    answers: ["a. Mặt", "b. Hàm trên*", "c. Cảnh trong", "d. Cảnh ngoài"],
    question: "Câu 1110: Động mạch bướm khẩu cái xuất phát từ động mạch:",
  },
  {
    answers: ["a. Thính lực đồ", "b. Đo nhĩ lượng đồ", "c. Nội soi vòm*", "d. CT- Scanner sọ não"],
    question: "Câu 1111: Viêm tai giữa thanh dịch ở người lớn tuổi điều trị nội khoa không hết cần làm:",
  },
  {
    answers: ["a. Niken", "b. Nitrosamine*", "c. Nấm", "d. Kim loại nặng"],
    question: "Câu 1112: Chất nào thường có trong thực phẩm gây ung thư vòm:",
  },
  {
    answers: ["a. Thương hàn*", "b. Sởi", "c. Bạch hầu", "d. Cúm"],
    question: "Câu 1113: Các bệnh sau đây có thể gây viêm tai giữa, NGOẠI TRỪ:",
  },
  {
    answers: ["a. Nhức đầu", "b. Chóng mặt *", "c. Ù tai", "d. Ho kéo dài"],
    question: "Câu 1114: Triệu chứng ở TMH có thể gặp trong bệnh lý nội khoa:",
  },
  {
    answers: ["a. Xương cá to và sắc ở đầu", "b. Dị vật mảnh nhọn", "c. Dị vật dài sắc", "d. Xương cá nhỏ dài*"],
    question: "Câu 1115: Dị vật cắm vào amidan thường:",
  },
  {
    answers: ["a. Khó thở ra", "b. Khó thở chậm", "c. Khó thở cả 2 thì*", "d. Có rale rít và rale ngáy"],
    question: "Câu 1116: Khó thở do suyễn có các đặc điểm sau, ngoại trừ:",
  },
  {
    answers: [
      "a. Cơ thể trẻ cần có sức đề kháng để chống lại sự nhiễm khuẩn.",
      "b. Sự suy giảm kháng thể ở trẻ sau 6 tháng tuổi.*",
      "c. V.A cần có sự tiếp xúc với vi khuẩn đầu tiên.",
      "d. V.A nằm ngay ngã tư đường ăn, đường thở.",
    ],
    question: "Câu 1117: Bệnh thích ứng là do, bao gồm các ý sau ngoại trừ:",
  },
  {
    answers: ["a. Viêm tai xương chũm", "b. Điếc đột ngột", "c. Bệnh Meniere*", "d. Viêm mê nhĩ thanh dịch"],
    question: "Câu 1118: Nghe kém hỗn hợp có ù tai, chóng mặt phải nghĩ đến bệnh:",
  },
  {
    answers: ["a. Liên cầu.", "b. Tụ cầu", "c. Phế cầu.*", "d. Nấm."],
    question: "Câu 1119: Vi khuẩn thường gặp trong viêm V.A ngoại trừ :",
  },
  {
    answers: ["a. Hàm trên*", "b. Bướm khẩu cái", "c. Khẩu cái xuống", "d. Hầu"],
    question: "Câu 1120: Mũi được cung cấp máu chủ yếu bởi động mạch:",
  },
  {
    answers: [
      "a. Lấy giả mạc cấy, làm kháng sinh đồ*",
      "b. Tất cả đều đúng",
      "c. Lấy giả mạc cho vào ly nước",
      "d. Cấy máu",
    ],
    question: "Câu 1121: Chẩn đoán chính xác viêm họng giả mạc bạch hầu dựa vào:",
  },
  {
    answers: ["a. Polype mũi bội nhiễm", "b. Viêm mũi mạn tính", "c. Viêm VA", "d. Dị vật mũi*"],
    question:
      "Câu 1122: Một em bé 3 tuổi bị chảy mũi thối 1 bên điều trị kháng sinh nhiều đợt ở trạm y tế. bệnh được nghĩ đến nhiều nhất là:",
  },
  {
    answers: ["a. Các dấu hiệu trên*", "b. Thở chậm, không đều", "c. Lơ mơ", "d. Thở nhanh nông"],
    question: "Câu 1123: Dấu hiệu nào chứng tỏ khó thở thanh quản đã diễn tiến nặng:",
  },
  {
    answers: [
      "a. Viêm xoang mạn tính *",
      "b. Viêm amidan mạn tính",
      "c. Viêm thanh quản mạn tính",
      "d. Viêm họng trào ngược",
    ],
    question: "Câu 1124: Bệnh nào sau đây có thể có triệu chứng giống lao phổi tiến triển:",
  },
  {
    answers: ["a. Thủng vách ngăn", "b. Sỏi mũi", "c. Viêm mũi xoang", "d. Các biến chứng trên*"],
    question: "Câu 1125: Dị vật mũi để lâu có thể gây biến chứng tại chỗ:",
  },
  {
    answers: [
      "a. Ho khan, khàn tiếng",
      "b. Co lõm các cơ hô hấp phụ",
      "c. Tái diễn nhiều lần",
      "d. Hội chứng “xâm nhập”*",
    ],
    question: "Câu 1126: Khó thở thanh quản cần phải soi thanh khí phế quản khi có:",
  },
  {
    answers: [
      "a. Dầy phía trược cột sống cổ",
      "b. Khoảng HenKe mất",
      "c. Cột sống cổ mất độ cong sinh lý",
      "d. Các dấu hiệu trên*",
    ],
    question: "Câu 1127: Dấu hiệu chứng tỏ có nhiễm trùng phía trước cột sống cổ trên X Quang:",
  },
  {
    answers: ["a. Đặt ống lâu ngày", "b. Các yếu tố trên*", "c. Trẻ em", "d. Mở khí quản cao"],
    question: "Câu 1128: Hội chứng “quen ống” thường gặp ở bệnh nhân:",
  },
  {
    answers: ["a. Các phương pháp trên*", "b. Tái tạo hệ thống truyền âm", "c. Đặt ống thông khí", "d. Xé màng nhĩ"],
    question: "Câu 1129: Để phục hồi chưc năng nghe trong viêm tai giữa cần điều trị:",
  },
  {
    answers: ["a. H.influenzae*", "b. Staphylococcus", "c. Pneumococcus", "d. Streptococcus"],
    question: "Câu 1130: Vi khuẩn thường gây viêm thanh thiệt cấp là:",
  },
  {
    answers: [
      "a. Nghe kém là giảm sức nghe trên 20db",
      "b. Nghe kém do nguyên nhân tại 3 phần của tai",
      "c. Nghe kém ở 1 hay nhiều tần số",
      "d. Nghe kém xảy ra ở cả 2 tai *",
    ],
    question: "Câu 1131: Xác định 1 ý sai trong các ý sau:",
  },
  {
    answers: [
      "a. Nhiễm trùng niêm mạc thực quản",
      "b. Áp xe cạnh cổ",
      "c. Áp xe trung thất*",
      "d. Dò thực – khí – phế quản phổi",
    ],
    question: "Câu 1132: Biến chứng nguy hiểm nhất trong dị vật đường ăn là:",
  },
  {
    answers: [
      "a. Chấn thương vùng cổ",
      "b. Chấn thương sọ não hôn mê sau 24h",
      "c. Trào ngược dạ dày-thực quản*",
      "d. Chấn thương lồng ngực",
    ],
    question: "Câu 1133: Mở khí quản trong những trường hợp sau đây, ngoại trừ:",
  },
  {
    answers: ["a. Polype khe giữa*", "b. Cuốn dưới quá phát", "c. Quá phát mỏm móc", "d. Quá phát bóng sàng"],
    question: "Câu 1134: Cuốn mũi giữa quá phát dễ nhầm lẫn với:",
  },
  {
    answers: ["a. Chấn thương trực tiếp", "b. Chấn thương áp lực*", "c. Vỡ xương ống tai ngoài", "d. Trật khớp đe đạp"],
    question: "Câu 1135: Loại chấn thương gây nghe kém dẫn truyền nặng hay nghe kém tiếp nhận:",
  },
  {
    answers: [
      "a. Võng lưới nội mô",
      "b. Biểu mô không biệt hóa (tế bào đáy)",
      "c. Biểu mô biệt hóa vừa (tế bào gai)*",
      "d. Loại #u mô liên kết",
    ],
    question: "Câu 1136: Về mô học, loại ung thư thanh quản gặp nhiều nhất là:",
  },
  {
    answers: ["a. Ban ngày hay ban đêm", "b. Các dấu hiệu trước đó", "c. Có sốt", "d. Các dữ liệu trên*"],
    question: "Câu 1137: Một số dữ liệu hỏi bệnh sử còn thiếu:",
  },
  {
    answers: ["a. U cơ vòm mũi họng", "b. Phi công", "c. Thợ lặn", "d. Các yếu tố trên*"],
    question: "Câu 1138: Nguyên nhân cơ học gây viêm tai giữa xuất tiết dịch thấm:",
  },
  {
    answers: ["a. Hỗn hợp", "b. Tiếp nhận", "c. Các loại trên có mức độ như nhau ", "d. Dẫn truyền*"],
    question: "Câu 1139: Loại nghe kém thường gặp nhất là:",
  },
  {
    answers: ["a. Động mạch mặt.", "b. Động mạch cảnh ngoài.*", "c. Động mạch lưỡi.", "d. Động mạch giáp."],
    question: "Câu 1140: Thành bên họng liên hệ với các động mạch:",
  },
  {
    answers: [
      "a. Xúc họng bằng các thuốc sát trùng nhẹ",
      "b. Hạn chế ăn các chất kích thích",
      "c. Vệ sinh răng miệng",
      "d. Các yếu tố trên*",
    ],
    question: "Câu 1141:",
  },
  {
    answers: ["a. Thủng ruột ( ruột già hoặc ruột non)* ", "b. Thủng tá tràng", "c. Tắc ruột", "d. Thủng dạ dày"],
    question: "Câu 1142: Dị vật ở đường ăn có thể có biến chứng trong đường tiêu hóa:",
  },
  {
    answers: [
      "a. Có thể kèm theo chóng mặt từng cơn",
      "b. Nghe kém hỗn hợp hoặc tiếp nhận",
      "c. Đường biểu diễn khí đạo nằm ngang",
      "d. Nghe kém có tính chất giảm dần*",
    ],
    question: "Câu 1143: Nghe kém trong bệnh Meniere có tính chất nào sau đây, ngoại trừ:",
  },
  {
    answers: ["a. Dùng kháng sinh", "b. Tấn bông cầu", "c. Các nội dung trên*", "d. Ngậm nước lạnh"],
    question: "Câu 1144: Xử trí đúng nhất chảy máu muộn sau cắt amidan:",
  },
  {
    answers: ["a. Đáy lưỡi", "b. Sàn miệng ", "c.a, b đúng*", "d. Trụ amidan"],
    question: "Câu 1145:Các thành phần sau tạo nên eo họng – miệng:",
  },
  {
    answers: ["a. U dây VIII", "b. U gốc cầu tiểu não", "c. Meniere", "d. Xốp xơ tai*"],
    question: "Câu 1146: Nghe kém dẫn truyền tăng dần kèm ù tai có trong bệnh:",
  },
  {
    answers: ["a. 6", "b. 4", "c. 3", "d. 5*"],
    question: "Câu 1147: Thời kỳ bào thai, nhu mô amidan được thành lập vào tháng thứ:",
  },
  {
    answers: ["a. vỡ đầu các mạch máu", "b. nhiễm trùng hố amidan", "c.chảy máu thứ phát", "d. bong giả mạc* "],
    question: "Câu 1148: Chảy máu muộn sau cắt amidan là do:",
  },
  {
    answers: ["a. Trung tâm mầm*", "b. Vỏ của nang bạch huyết", "c. Biểu mô nang lưới", "d. Vùng túi ngách"],
    question: "Câu 1149: Tế bào miễn dịch B của V.A nằm ở vùng:",
  },
  {
    answers: ["a. T2", "b. T4", "c. T3*", "d. T1"],
    question:
      "Câu 1150: Nội soi qua mũi, thấy khối ung thư vòm bít kín 1 phần cửa mũi sau, lẫn nhầy đỏ, đục; phân loại khối u thuộc:",
  },
  {
    answers: ["a. Hay liệt mặt", "b. Tất cả các câu trên*", "c. Mủ lổn nhổn, thối", "d. Điều trị toàn thân và tại chỗ"],
    question: "Câu 1151: Viêm tai giữa lao có đặc điểm sau:",
  },
  {
    answers: ["a. Bồi hoàn nước và điện giải", "b. Kháng viêm", "c. Kháng sinh liều cao", "d. Mổ khẩn cấp*"],
    question: "Câu 1152: Điều trị viêm màng não do tai gồm, chọn câu sai:",
  },
  {
    answers: ["a. 30 giây", "b. 40 giây", "c. 10giây", "d. 20 giây*"],
    question: "Câu 1153: Bình thường thời gian cốt đạo là:",
  },
  {
    answers: [
      "a. Kháng viêm, giảm đau hạ sốt",
      "b. Chích rạch màng nhĩ, dẫn lưu mủ*",
      "c. Kháng sinh liều cao, thích hợp",
      "d. Rỏ thuốc thông mũi, kháng sinh",
    ],
    question:
      "Câu 1154: Điều trị chủ yếu nhất để làm giảm triệu chứng cơ năng và toàn thân của viêm tai giữa cấp mủ là:",
  },
  {
    answers: ["a. Mặt trước", "b. Mặt trên", "c. Hàm gò má", "d. Hố nanh*"],
    question: "Câu 1155: Mốc quan trọng để vào xoang hàm trong phẫu thuật:",
  },
  {
    answers: ["a. Schuller", "b. X quang tư thế Stenvers", "c. CTScan", "d. MRI*"],
    question: "Câu 1156: U dây thần kinh số VIII có thể được xác định bởi:",
  },
  {
    answers: ["a. Đau vùng sau tai", "b. Nhịp thở chậm*", "c. Sốt cao, lạnh run", "d. Mạch không đều"],
    question: "Câu 1157: Viêm tắc tĩnh mạch bên bao gồm các triệu chứng sau, ngoại trừ:",
  },
  {
    answers: ["a. 50%", "b. 40%", "c. 60%", "d. 70%*"],
    question: "Câu 1158: Tỷ lệ cholesteatome gặp trong biến chứng nội sọ do tai hiện nay là:",
  },
  {
    answers: [
      "a. Phù nề thanh thiệt",
      "b. Giãn phế quản",
      "c. Khó xác định được vị trí khi soi",
      "d. Mắc kẹt ở thanh môn*",
    ],
    question: "Câu 1159: Dị vật di động có thể dẫn đến nguy cơ:",
  },
  {
    answers: [
      "a. Tất cả đều đúng*",
      "b. Có tiền sử viêm khớp",
      "c.Nghi ngờ nhiễm liên cầu tan huyết beta nhóm A",
      "d. Viêm nội tâm mạc",
    ],
    question: "Câu 1160: Chỉ định dùng kháng sinh điều trị viêm amidan cấp:",
  },
  {
    answers: ["a. 10", "b. 8", "c. 7", "d. 9*"],
    question: "Câu 1161: Lứa tuổi thể hiện rõ hình ảnh xoang trán trên X quang là tháng thứ mấy:",
  },
  {
    answers: [
      "a. Tất cả điều đúng.*",
      "b. Lớp đệm có nhiều tuyến nhầy, nang lympho.",
      "c. Biểu bì nhiều tầng có tế bào gai.",
      "d. Niêm mạc dạng biểu bì nhiều tầng.",
    ],
    question: "Câu 1162: Niêm mạc họng được phủ bởi:",
  },
  {
    answers: [
      "a. Đảm bảo dinh dưỡng",
      "b. Nạo V.A hoặc cắt Amidan khi có chỉ định*",
      "c. Vệ sinh răng miệng",
      "d. Giữ ấm cho trẻ",
    ],
    question: "Câu 1163: Viêm họng cấp tái diễn ở trẻ em cần phải:",
  },
  {
    answers: ["a. Tràn dịch màng phổi", "b. Xẹp phổi", "c. Co kéo trung thất*", "d. Tràn khí màng phổi"],
    question:
      "Câu 1164: Viêm trung thất, tư thế X quang thực quản – phổi thẳng, dấu hiệu có giá trị trong chẩn đoán là:",
  },
  {
    answers: ["a. Viêm amidan", "b. Viêm V.A quá phát*", "c. Viêm mũi mạn tính", "d. Viêm họng mạn tính"],
    question: "Câu 1165: Nguyên nhân chủ yếu của viêm tai giữa cấp ở trẻ em là:",
  },
  {
    answers: ["a. U nang tăng sinh xương hàm trên", "b. U nang chân răng", "c. Răng mọc lạc chỗ", "d. Các bệnh trên *"],
    question: "Câu 1166: Các bệnh sau đây thuộc Răng hàm mặt có thể biểu hiện hình ảnh trong xoang:",
  },
  {
    answers: [
      "a. Điếc hỗn hợp*",
      "b. Bệnh tích ở tai giữa cố định",
      "c. Đặt thông khí không còn tác dụng",
      "d. Điếc ngày càng tăng",
    ],
    question: "Câu 1167: Diễn biến tự nhiên của viêm tai giữa mạn tính xuất tiết xơ nhĩ:",
  },
  {
    answers: ["a. Vệ sinh răng miệng", "b. Cách ly", "c. Nhập viện điều trị", "d. Báo có dịch"],
    question: "Câu 1168: Khi có viêm họng bạch hầu cần phải:",
  },
  {
    answers: [
      "a. Cần điều trị nguyên nhân",
      "b. Do nhiều nguyên nhân gây ra",
      "c. Là một bệnh cục bộ tại mũi*",
      "d. Điều trị cầm máu tại chỗ",
    ],
    question: "Câu 1169: Chảy máu mũi bao gồm những vấn đề sau, NGOẠI TRỪ:",
  },
  {
    answers: ["a. Kháng sinh, kháng viêm", "b. Nạo V.A*", "c. Rỏ thông mũi, chống nghẹt mũi", "d. Kháng histamine"],
    question: "Câu 1170: Điều trị dự phòng chủ yếu nhất trong viêm tai giữa cấp xung huyết ở trẻ em dưới 3 tuổi là:",
  },
  {
    answers: [
      "a. Nội soi mũi xoang",
      "b. Tìm trung gian kháng thể",
      "c. Khai thác kỹ bệnh sử*",
      "d. Đánh giá tình trạng niêm mạc",
    ],
    question: "Câu 1171: Chẩn đoán viêm mũi dị ứng quan trọng nhất là:",
  },
  {
    answers: [
      "a. Rửa mũi bằng nước muối sinh lý*",
      "b. Rỏ thông mũi",
      "c. Sử dụng steroid tại chỗ",
      "d. Khí dung mũi xoang",
    ],
    question: "Câu 1172: Ngày nay điều trị tại nhà bệnh viêm mũi xoang mạn tính được quan tâm nhiều nhất là:",
  },
  {
    answers: [
      "a. Ảnh hưởng đến sự phát triển sọ mặt",
      "b. V.A quá phát gây ngừng thở lúc ngủ",
      "c. Viêm tai giữa thanh dịch",
      "d. Viêm họng mạn tính*",
    ],
    question: "Câu 1173: Chỉ định nạo V.A, ngoại trừ:",
  },
  {
    answers: ["a. Cứng", "b. To", "c. Di động", "d. Cố định*"],
    question: "Câu 1174: Tính chất sau của hạch tiên lượng xấu:",
  },
  {
    answers: ["a. Trào ngược dạ dày thực quản", "b. Loạn cảm họng", "c. Dài mỏm trâm", "d. Áp xe amidan*"],
    question: "Câu 1175:",
  },
  {
    answers: ["a. Viêm màng não", "b. Áp xe đại não", "c. Áp xe tiểu não", "d. Viêm tắc xoang tĩnh mạch bên*"],
    question: "Câu 1176: Một biến chứng của viêm tai xương chũm dễ lầm với sốt rét:",
  },
  {
    answers: [
      "a. Soi thanh khí phế quản kiểm tra",
      "b. Dùng các phương tiện cận lâm sàng để xác định nguyên nhân",
      "c. Kháng sinh, kháng viêm chống phù nề",
      "d. Mở khí quản*",
    ],
    question: "Câu 1177: Xử trí đúng đối với khó thở thanh quản độ I bao gồm các can thiệp sau, NGOẠI TRỪ:",
  },
  {
    answers: ["a. Bụi kích thích", "b. Hút thuốc lá quá mức*", "c. Viêm xoang mạn tính", "d. Hít phải hơi hóa chất"],
    question: "Câu 1178: Nguyên nhân thường gặp nhất gây viêm thanh quản mạn tính ở nam giới là:",
  },
  {
    answers: ["a. Sàng trước", "b. Trán", "c. Hàm", "d. Sàng sau*"],
    question: "Câu 1179: Xoang bị viêm có thể ảnh hưởng đến thị lực của mắt đó là xoang:",
  },
  {
    answers: ["a. Y tế", "b. Nhi*", "c. Giáo dục", "d. Tai thính học"],
    question: "Câu 1180: Điều trị điếc câm không thuộc chuyên ngành:",
  },
  {
    answers: ["a. Nuốt sặc", "b. Khó thở", "c. Khàn tiếng", "d. Rối loạn về nuốt*"],
    question: "Câu 1181: Triệu chứng chủ yếu ung thư hạ họng giai đoạn sớm là:",
  },
  {
    answers: ["a. Hạ họng", "b. Khoang trước họng", "c. Họng miệng*", "d. Họng mũi"],
    question: "Câu 1182: Amidan ở khoang nào của họng:",
  },
  {
    answers: ["a. Xương cá nhỏ", "b. Các loại hạt trái cây", "c. Hạt đậu phộng*", "d. Các vật kim loại"],
    question: "Câu 1183: Dị vật thường dễ gây phế quản phế viêm là:",
  },
  {
    answers: [
      "a. Suy dinh dưỡng",
      "b. Thiếu oxy kéo dài*",
      "c. Nhiễm trùng mũi xoang kéo dài",
      "d. Tai nghe kém do viêm tai giữa",
    ],
    question: "Câu 1184: Các chứng nhức đầu, giảm trí tuệ ở bé bị viêm V.A quá phát là do:",
  },
  {
    answers: ["a. Rối loạn tiêu hóa*", "b. Sốt cao", "c. Bỏ bú", "d. Ho"],
    question: "Câu 1185: Viêm tai sào bào ở hài nhi triệu chứng ngoài cơ quan tai mũi họng thường gặp nhất là:",
  },
  {
    answers: ["a. Xung quanh đỏ", "b. Màu trắng, mỏng*", "c. Giả mạc nhiều", "d. Dễ chảy máu"],
    question: "Câu 1186: Đặc điểm tại chỗ không thuộc viêm họng bạch hầu:",
  },
  {
    answers: ["a. Vệ sinh họng miệng.*", "b. Điều trị triệu chứng.", "c. Giảm đau.", "d. Uống nhiều nước."],
    question: "Câu 1187: Điều trị chủ yếu của viêm họng đỏ thông thường:",
  },
  {
    answers: ["a. Hạ huyết áp", "b. Viêm xoang*", "c. Bệnh lý thần kinh trung ương", "d. Viêm tai xương chũm"],
    question: "Câu 1188: Hội chứng chóng mặt thường gặp trong các bệnh sau, NGOẠI TRỪ:",
  },
  {
    answers: ["a. Xốp xơ tai", "b. Điếc đột ngột", "c. Meniere*", "d. Viêm màng nhĩ"],
    question: "Câu 1189: Nghe kém 1 bên kèm chóng mặt thường gặp trong bệnh:",
  },
  {
    answers: ["a. 5 ngày", "b. 3 ngày", "c. 5-7 ngày*", "d. 4 ngày"],
    question: "Câu 1190: Bao nhiêu ngày phải thay ống thở:",
  },
  {
    answers: ["a. Liệt màn hầu lưỡi gà*", "b. Viêm đa rễ thần kinh", "c. Liệt mặt", "d. Liệt các cơ vận nhãn"],
    question: "Câu 1191: Biến chứng thần kinh xuất hiện sớm trong bạch hầu họng là:",
  },
  {
    answers: [
      "a. Tất cả các đặc điểm trên*",
      "b. Phân hóa các tế bào",
      "c. Tăng các tế bào lympho",
      "d. Giảm các tế bào trụ có lông chuyển",
    ],
    question: "Câu 1192: Đặc điểm giải phẫu bệnh của hòm nhĩ trong viêm tai giữa cấp là:",
  },
  {
    answers: ["a. Ngứa mũi, chảy mũi", "b. Chảy mũi", "c. Ngứa kết mạc", "d. Các triệu chứng trên*"],
    question: "Câu 1193: Triệu chứng nào phải nghĩ đến viêm mũi xoang dị ứng:",
  },
  {
    answers: ["a. Ngộ độc tai*", "b. Chấn thương tai trong", "c. A,B đúng", "d. Nghe kém bẩm sinh"],
    question: "Câu 1194: Nghe kém ở cả 2 tai không thường do:",
  },
  {
    answers: [
      "a. Sự cố định của hai sụn phễu*",
      "b. Vị trí của khối u",
      "c. Độ hẹp của lòng thanh quản",
      "d. U thể sùi loét",
    ],
    question: "Câu 1195: Khi soi thanh quản trực tiếp, để đánh giá tiên lượng, dấu hiệu quan trọng nhất là:",
  },
  {
    answers: ["a. Sốt xuất huyết", "b. Thương hàn", "c. Leptospirase*", "d. Viêm mũi dị ứng"],
    question: "Câu 1196: Viêm mũi loại nào có thể gây chảy máu mũi nhiều hơn:",
  },
  {
    answers: ["a. Thanh thất Morgagni", "b. Vùng dưới dây thanh*", "c. Dây thanh", "d. Băng thanh thất"],
    question: "Câu 1197: Ở trẻ em, vùng thanh quản nào có niêm mạc rất lỏng lẻo nên dễ bị phù nề nhất là:",
  },
  {
    answers: [
      "a. Cần chọn lựa thích hợp với lâm sàng gợi ý chẩn đoán",
      "b. Dùng kháng sinh có hệ thống khi không có phết họng*",
      "c. Điều trị bằng penicilline",
      "d. Tránh thấp khớp cấp",
    ],
    question: "Câu 1198: Điều trị viêm họng cấp nghi do liên cầu tiêu huyết beta nhóm A bao gồm các ý sau, NGOẠI TRỪ:",
  },
  {
    answers: ["a. Hội chứng nhiễm trùng", "b. Hội chứng màng não", "c. Chảy mủ tai thối, khắm", "d. Vận động rối tầm*"],
    question: "Câu 1199: Triệu chứng không thuộc viêm màng não do tai là:",
  },
  {
    answers: [
      "a. Mở khí quản trong phòng mổ",
      "b. Đặt nội khí quản trước khi mở khí quản*",
      "c. Soi khí quản sau đó mở khí quản",
      "d. Mở khí quản càng nhanh càng tốt",
    ],
    question: "Câu 1200: Mở khí quản an toàn nhất cho bệnh nhân là:",
  },
  {
    answers: ["a. Giảm thính lực*", "b. Liệt mặt", "c. Xơ dính trong hòm nhĩ", "d. Biến chứng nội sọ"],
    question: "Câu 1201: Biến chứng thường gặp nhất của viêm tai giữa mạn tính mủ là:",
  },
  {
    answers: [
      "a. Bệnh rỗng hành não",
      "b. Các bệnh trên *",
      "c. Suy động mạch cột sống thân nền",
      "d. Xơ cứng rải rác",
    ],
    question: "Câu 1202: Chóng mặt do tai có thể phân biệt chóng mặt do:",
  },
  {
    answers: [
      "a. Dùng kháng sinh và giảm đau",
      "b. Nhét meche mũi cầm máu và cố định",
      "c. Không được để lâu quá một tuần",
      "d. Nắn chỉnh xương gẫy càng sớm càng tốt*",
    ],
    question: "Câu 1203: Phương pháp đúng nhất điều trị gẫy xương chính mũi là:",
  },
  {
    answers: ["a. Xốp xơ tai*", "b. Viêm tai giữa", "c. Viêm tai ngoài", "d. Dị vật tai"],
    question: "Câu 1204: Nghe kém kèm theo chảy mủ tai có thể không gặp trong bệnh sau:",
  },
  {
    answers: ["a. Phản xạ co thắt", "b. Vùng hầu họng hẹp", "c. Dễ phù nề*", "d. Sung huyết"],
    question: "Câu 1205: Khó thở ở trẻ em nguyên nhân chính là do:",
  },
  {
    answers: ["a. Ống tai ngoài", "b. Chóp mũi *", "c. Vành tai", "d. Họng"],
    question: "Câu 1206: Tổn thương phong thường gặp vùng nào của tai mũi họng:",
  },
  {
    answers: ["a. Thần kinh", "b. Mũi xoang*", "c. Mắt", "d. Tai"],
    question: "Câu 1207: Triệu chứng muộn chủ yếu của ung thư vòm họng là:",
  },
  {
    answers: ["a. Nước cất", "b. Alcool*", "c. Alphachymotrypsin", "d. Nước muối sinh lý 0.9%"],
    question: "Câu 1208: Loại nước sau có thể bỏ vào lỗ mở khí quản, ngoại trừ:",
  },
  {
    answers: ["a. Dị tật mũi", "b. Vẹo vách ngăn", "c. Viêm amidan", "d. Viêm V.A*"],
    question: "Câu 1209: Ở trẻ em dưới 5 tuổi, yếu tố tại chỗ dễ gây viêm mũi cấp là do:",
  },
  {
    answers: ["a. Rò khí thực quản*", "b. Tắc cửa mũi trước", "c. Tắc cửa mũi sau", "d. Teo hàm dính"],
    question: "Câu 1210: Loại di dạng liên quan đến khoa sản có thể gây tử vong cho trẻ:",
  },
  {
    answers: ["a. Giai đoạn 3", "b. Giai đoạn 2", "c. Giai đoạn 1*", "d. Giai đoạn 4"],
    question: "Câu 1211: Dấu hiệu lọc cọc thanh quản mất trong trường hợp, ngoại trừ:",
  },
  {
    answers: ["a. Khó thở", "b. Sẹo, hẹp*", "c. Dò ra da", "d. Khàn tiếng"],
    question: "Câu 1212: Biến chứng lâu dài của mở khí quản là:",
  },
  {
    answers: [
      "a. X quang tim phổi",
      "b. X quang thực quản cổ nghiêng",
      "c. X quang thực quản có thuốc cản quang*",
      "d. X quang thực quản cổ thẳng",
    ],
    question: "Câu 1213: Chẩn đoán Xquang gợi ý dị vật thực quản, ngoại trừ:",
  },
  {
    answers: ["a. Ngất xỉu do sợ", "b. Hạ đường huyết", "c. Chảy máu", "d. Sốc thuốc tê*"],
    question: "Câu 1214: Biến chứng thường gặp và có thể tử vong do cắt amidan gây tê là:",
  },
  {
    answers: ["a. Chảy mũi nhiều", "b. Giảm mùi*", "c. Niêm mạc mũi đỏ rực", "d. Nóng rát trong mũi"],
    question: "Câu 1215: Triệu chứng không phải của biến chứng viêm mũi do thuốc rỏ mũi:",
  },
  {
    answers: [
      "a. Phản xạ loại bỏ vật lạ ra khỏi mũi",
      "b. Điều hòa bởi nhân đậm đặc ở cầu não",
      "c. Phản xạ dây thần kinh X",
      "d. Vật lạ kích thích thụ thể H1 của thần kinh V",
    ],
    question: "Câu 1216: Phản xạ hắt hơi không do yếu tố sau:",
  },
  {
    answers: [
      "a. Dị vật quá to không xuống được miệng thực quản*",
      "b. Răng giả",
      "c. Hạt saboche",
      "d. Khúc xương vịt",
    ],
    question: "Câu 1217: Dị vật thực quản có thể gây khó thở cấp tính :",
  },
  {
    answers: ["a. Thanh thiệt", "b. Dưới thanh môn", "c. Trên thanh môn*", "d. Dây thanh"],
    question: "Câu 1218: Hạch xuất hiện sớm trong ung thư thanh quản ở:",
  },
  {
    answers: ["a. Các cơ vùng thượng đòn", "b. Ức đòn chũm", "c. Liên sườn ngoài", "d. Cơ hoành*"],
    question: "Câu 1219: Cơ tham gia chính của quá trình hô hấp là:",
  },
  {
    answers: ["a. Trên thanh môn", "b. Dây thanh*", "c. Giữa thanh quản", "d. Hạ thanh môn"],
    question: "Câu 1220: Khàn tiếng là dấu hiệu sớm nhất của ung thư thanh quản tầng:",
  },
  {
    answers: ["a. Đông*", "b. Thu", "c. Hè", "d. Xuân"],
    question: "Câu 1221: Viêm thanh quản cấp gặp nhiều nhất vào mùa",
  },
  {
    answers: [
      "a. Sử dụng giọng nói nhiều",
      "b. Ăn nhiều chất gia vị, dầu mỡ",
      "c. Hút thuốc lá nhiều*",
      "d. Uống rượu bia",
    ],
    question: "Câu 1222: Viêm thanh quản mạn tính ở người lớn nguyên nhân chủ yếu là:",
  },
  {
    answers: [
      "a. Do tắc vòi nhĩ",
      "b. Số lượng dịch trong hòm nhĩ thường ít",
      "c. Xuất tiết dịch rỉ",
      "d. Phản ứng Rivalta (+)*",
    ],
    question: "Câu 1223: Tính chất dịch hòm nhĩ trong viêm tai giữa cấp xung huyết là:",
  },
  {
    answers: ["a. 2000Hz - 4000HZ*", "b. 2000Hz – 6000Hz", "c. 2000Hz – 5000Hz", "d. 2000Hz - 3000Hz"],
    question: "Câu 1224: Lão thính thường mất sức nghe khởi đầu ở tần số:",
  },
  {
    answers: ["a. Viêm mũi xoang", "b. Bộ mặt V.A*", "c. Viêm tai giữa", "d. Viêm họng"],
    question: "Câu 1225: V.A quá phát lâu ngày có thể gây ra:",
  },
  {
    answers: [
      "a. Đặt meche có tẩm thuốc tê và co mạch",
      "b. Gây tê bằng cách xịt mũi họng",
      "c. Tiền mê cục bộ",
      "d. Gây mê nội khí quản*",
    ],
    question: "Câu 1226: Phương pháp vô cảm tốt nhất trong nạo V.A là:",
  },
  {
    answers: [
      "a. Từ phổi qua mũi",
      "b. Tất cả các câu trên",
      "c. Máu chảy ra từ niêm mạc mũi*",
      "d. Từ thực quản qua mũi",
    ],
    question: "Câu 1227: Được gọi là chảy máu mũi khi:",
  },
  {
    answers: ["a. ĐM bướm khẩu cái", "b. ĐM hàm trong", "c. ĐM cảnh trong*", "d. ĐM cảnh ngoài"],
    question: "Câu 1228: Mạch máu quan trọng trong phẫu thuật cắt amidan cần chú ý:",
  },
  {
    answers: [
      "a. Mở thấp hơn",
      "b. Soi kiểm tra trước khi rút ống",
      "c. Tập bịt ống trước khi rút",
      "d. Thay ống canuyn nhỏ hơn*",
    ],
    question: "Câu 1229: Xử trí hạn chế Hội chứng “quen ống” bao gồm, ngoại trừ:",
  },
  {
    answers: ["a. Xoang trán", "b. Xoang sàng sau *", "c. Xoang sàng trước", "d. Xoang hàm"],
    question: "Câu 1230: Xoang nào không bao quanh hốc mắt:",
  },
  {
    answers: [
      "a. Đi ngang qua 2 xoang hàm",
      "b. Đường gãy song song và cách gờ lợi 1.5cm*",
      "c. Qua lỗ chân bướm hàm 2 bên",
      "d. Ngang qua xương lá mía",
    ],
    question: "Câu 1231: Đường gãy Le Fort I thường đi ngang qua:",
  },
  {
    answers: [
      "a. Viêm tai giữa thanh dịch*",
      "b. Ở trẻ sơ sinh",
      "c. Tổn thương thời kỳ bào thai",
      "d. Trước giai đoạn biết nói",
    ],
    question: "Câu 1232: Được gọi là điếc bẩm sinh khi. Chọn 1 ý sai:",
  },
  {
    answers: ["a. Nhức đầu", "b. Viêm niêm mạc mũi xoang*", "c. Nghẹt mũi", "d. Chảy dịch mũi"],
    question: "Câu 1233: Định nghĩa chính xác nhất viêm mũi xoang:",
  },
  {
    answers: ["a. Kháng viêm", "b. Chích mạch màng nhĩ*", "c. Kháng histamin", "d. Kháng sinh"],
    question: "Câu 1234: Viêm tai giữa cấp tính màng nhĩ phồng điều trị chủ yếu là:",
  },
  {
    answers: ["a. Tháng 12", "b. Giao mùa*", "c. Tháng 6", "d. Tháng 1"],
    question: "Câu 1235: Ở các tỉnh phía nam, thời gian thường viêm mũi cấp là:",
  },
  {
    answers: ["a. Niêm mạc họng đỏ rực.", "b. Các dấu hiệu trên.*", "c. Giả mạc màu nâu.", "d. Hạch cổ sưng to."],
    question: "Câu 1236: Triệu chứng thực thể viêm họng bạch hầu ác tính:",
  },
  {
    answers: [
      "a. Mở lỗ thông xoang qua khe dưới",
      "b. Mở xoang hàm qua rãnh lợi môi",
      "c. Mở xoang sàng qua mũi",
      "d. Phẫu thuật nội soi xoang chức năng*",
    ],
    question: "Câu 1237: Phẫu thuật xoang ngày nay thường được sử dụng điều trị viêm mũi xoang mạn tính:",
  },
  {
    answers: ["a. Ngộ độc thuốc", "b. Viêm tai giữa tiết dịch*", "c. Dị vật ống tai ngoài", "d. Chấn thương tai"],
    question: "Câu 1238: Trẻ em nghe kém nguyên nhân thường do:",
  },
  {
    answers: ["a. Thanh quản sau", "b. Giáp trên", "c. Thanh quản trên*", "d. Thanh quản dưới"],
    question: "Câu 1239: Thanh quản được nuôi chủ yếu bởi động mạch:",
  },
  {
    answers: ["a. Các nguyên nhân trên*", "b. Viêm tai giữa", "c. Điếc do tiếng ồn", "d. Nhiễm độc thuốc"],
    question: "Câu 1240: Các nguyên nhân gây nghe kém có thể phòng ngừa được:",
  },
  {
    answers: ["a. Thượng bì*", "b. Lớp đệm", "c. Màng đáy", "d. Biểu mô"],
    question: "Câu 1241: Hốc mũi được bao phủ bởi lớp niêm mạc không bao gồm:",
  },
  {
    answers: ["a. Áp xe não", "b. Viêm màng não", "c. Dò xoang răng", "d. Viêm mô tế bào quanh ổ mắt*"],
    question: "Câu 1242:Biến chứng nặng nhất của viêm xoang là:",
  },
  {
    answers: [
      "a. Thay ống canule khác lớn hơn",
      "b. Dẫn lưu khí bằng đâm kim dưới da vùng có tràn khí",
      "c. Cắt chỉ ngoài da làm hở da*",
      "d. Khâu ép vết mổ thành 1 lớp",
    ],
    question: "Câu 1243: Sau khi mở khí quản, có tràn khí dưới da, việc cần làm ngay là:",
  },
  {
    answers: ["a. Buồn nôn", "b. Nuốt sặc", "c. Nhức đầu dùng thuốc giảm đau không giảm*", "d. Lé trong"],
    question: "Câu 1244: Triệu chứng sớm sau chứng tỏ ung thư vòm đã xâm lấn thần kinh:",
  },
  {
    answers: ["a. Coblator", "b. Dao điện lưỡng cực.", "c. Bóc tách thành họng *", "d. Laser CO2"],
    question: "Câu 1245: Phương pháp cắt Amidan được lựa chọn đối với ca sỹ:",
  },
  {
    answers: ["a. Ảo khứu", "b. Mất khứu", "c. Giảm khứu", "d. Các dạng trên*"],
    question: "Câu 1246: Rối loạn khứu giác bao gồm các dạng sau:",
  },
  {
    answers: ["a. Thương hàn", "b. Sốt rét*", "c. Nhiễm trùng đường mật", "d. Viêm màng não"],
    question: "Câu 1247: Viêm tắc tĩnh mạch bên dễ chẩn đoán nhầm với:",
  },
  {
    answers: ["a. Streptococcus tiêu huyết beta nhóm A* ", "b. M.catarrhalis", "c. S.aureus", "d. H.influenzae"],
    question: "Câu 1248: Các vi khuẩn sau sản xuất ra men beta-lactamase, NGOẠI TRỪ:",
  },
  {
    answers: ["a. Thanh thiệt", "b. Dưới thanh môn", "c. Trên thanh môn*", "d. Giữa thanh môn"],
    question: "Câu 1249: Khó thở là dấu hiệu sớm của ung thư thanh quản ở vị trí:",
  },
  {
    answers: [
      "a. Điếc ở mức độ nhẹ",
      "b. Không bị điếc",
      "c. Không xác định có bị điếc không",
      "d. Không có bệnh lý điếc nặng*",
    ],
    question: "Câu 1250: Nghiệm pháp tầm soát âm ốc tai (OAE) khơi gợi có ý nghĩa:",
  },
  {
    answers: [
      "a. Viêm thanh quản cấp*",
      "b. Dị vật thanh-khí-phế quản",
      "c. Mềm sụn thanh quản",
      "d. Áp xe thành sau họng",
    ],
    question: "Câu 1251: Khó thở ở trẻ em do nguyên nhân tai mũi họng gặp nhiều nhất trong bệnh:",
  },
  {
    answers: [
      "a. Méo mó tiếng ồn",
      "b. Khó chịu khi có tiếng ồn",
      "c. Nghe kém cả 2 tai*",
      "d. Nghe kém thường xuất hiện trước chóng mặt",
    ],
    question: "Câu 1252: Đặc điểm nào sau đây nghe kém không thuốc bệnh Meniere:",
  },
  {
    answers: [
      "a. Phế quản phế viêm*",
      "b. Người đang điều trị lao phổi",
      "c. Người hoạt động nhiều về giọng nói",
      "d. Viêm mũi họng mạn tính quá phát",
    ],
    question:
      "Câu 1253: Một người bị ho, khàn tiếng kéo dài, không có xu hướng tự khỏi. Khả năng có thể loại trừ viêm thanh quản mạn tính không đặc hiệu là:",
  },
  {
    answers: [
      "a. Hạn chế mức độ di căn",
      "b. Lấy hết khối ung thư",
      "c. Cải thiện chất lượng cuộc sống*",
      "d. Nâng cao hiệu quả xạ trị",
    ],
    question: "Câu 1254: Phẫu thuật trong ung thư vòm nhằm mục đích:",
  },
  {
    answers: [
      "a. Màng nhĩ còn nguyên*",
      "b. Hệ thống xương con liên tục",
      "c. Không tắc vòi nhĩ",
      "d. Đối chiếu với thính lực đồ",
    ],
    question: "Câu 1255: Điều kiện để đo phản xạ cơ bàn đạp:",
  },
  {
    answers: ["a. Chấn thương xoang", "b. Viêm xoang hàm do răng", "c. Viêm xoang do nấm", "d. Các bệnh trên*"],
    question: "Câu 1256: Mờ xoang hàm 1 bên trên X quang thường do:",
  },
  {
    answers: ["a. Ống tai xương", "b. Ống tai ngoài", "c. Tai trong", "d. Hòm nhĩ*"],
    question: "Câu 1257: Tường thượng nhĩ thuộc về:",
  },
  {
    answers: ["a. Dính", "b. Dễ chảy máu", "c. Không tan trong nước*", "d. Trắng ngà"],
    question: "Câu 1258: Giả mạc của viêm họng bạch hầu có các đặc điểm sau, NGOẠI TRỪ:",
  },
  {
    answers: ["a. Trực tiếp*", "b. Nội soi ống cứng", "c. Gián tiếp", "d. Nội soi ống mềm"],
    question: "Câu 1259: Đối với trẻ em từ 1 đến 2 tháng tuổi, để khám thanh quản thường hay dùng phương pháp soi:",
  },
  {
    answers: ["a. Đoạn dưới dây thần kinh VII", "b. Đoạn I", "c. Đoạn II", "d. Đoạn III*"],
    question: "Câu 1260: Đoạn nào của dây VII dễ bị tổn thương trong viêm tai xương chũm:",
  },
  {
    answers: ["a. Liệt dây VI", "b. Chóng mặt*", "c. Nhức nửa đầu", "d. Chảy mủ tai"],
    question: "Câu 1261: Hội chứng Gradenigo bao gồm các triệu chứng sau, ngoại trừ:",
  },
  {
    answers: ["a. Sốt cao", "b. Tối cấp cứu", "c. Nuốt đau, bỏ bú", "d. Các yếu tố trên*"],
    question: "Câu 1262: Viêm thanh thiệt cấp ở trẻ em là:",
  },
  {
    answers: ["a. Kháng histamin", "b. Các nội dung trên*", "c. Đặt ống thông khí", "d. Làm thông mũi"],
    question: "Câu 1263: Điều trị chủ yếu viêm tai giữa xuất tiết dịch thấm:",
  },
  {
    answers: ["a. Huyết áp", "b. Nhịp thở", "c. Nhiệt độ", "d. Chảy máu*"],
    question: "Câu 1264: Theo dõi chính sau nạo V.A là:",
  },
  {
    answers: ["a. CT- Scanner tai*", "b. Nội soi", "c. Schause III", "d. Schuller"],
    question: "Câu 1265: Để thấy rõ các hệ thống xương con, có thể dùng cận lâm sàng sau:",
  },
  {
    answers: [
      "a. Ung thư dây thanh*",
      "b. Viêm khí phế quản dạng hen",
      "c. Lao thanh khí phế quản",
      "d. Viêm thanh quản cấp",
    ],
    question: "Câu 1266: Chẩn đoán nào được nghĩ đến nhiều nhất:",
  },
  {
    answers: [
      "a. Soi thanh khí phế quản bằng nội soi",
      "b.CT-Scan",
      "c. Soi treo thanh quản và sinh thiết làm giải phẫu bệnh*",
      "d. X quang thanh quản thẳng",
    ],
    question:
      "Câu 1267: Sau khi xử trí bệnh nhân hết khó thở, để xác định chẩn đoán cần? Tình huống : bệnh nhân nam 65 tuổi vào phòng khám tai mũi họng của bệnh viện tỉnh trong tình trạng da bọc xương, khó thở vào, môi tím, nói ngắt quãng, co lõm cơ ức đòn chũm và hố thượng đòn. ",
  },
  {
    answers: ["a. Thực quản cổ thẳng", "b. Phổi thẳng", "c. Thực quản có cản quang", "d. Thực quản cổ nghiêng*"],
    question: "Câu 1268: Trong biến chứng viêm tấy thực quản; tư thế X quang có giá trị nhất là:",
  },
  {
    answers: ["a. Xốp xơ tai", "b. Chấn thương tai trong", "c. Ngộ độc tai", "d. Điếc đột ngột*"],
    question: "Câu 1269: Nghe kém 1 tai không thương do bệnh sau đây:",
  },
  {
    answers: ["a. Các triệu chứng trên*", "b. Không khàn tiếng", "c. Tuổi từ 1-5, khó thở cấp", "d. Nam nhiều hơn nữ"],
    question: "Câu 1270: Viêm thanh quản hạ thanh môn có các đặc điểm sau:",
  },
  {
    answers: ["a. 20-25%", "b. 25-30%*", "c. 10-15%", "d. 15-20%"],
    question: "Câu 1271: So với các bệnh tai mũi họng ở Việt Nam, viêm amidan chiếm khoảng:",
  },
  {
    answers: ["a. Tiểu phế quản hô hấp", "b. Tiểu thùy phổi", "c. Phế nang*", "d. Tiểu phế quản"],
    question: "Câu 1272: Đơn vị chức năng của phổi là:",
  },
  {
    answers: [
      "a. Cấp tính tái hồi ≥ 4 lần/năm",
      "b. Các chỉ định trên.*",
      "c. Mạn tính không đáp ứng với điều trị nội khoa",
      "d. Mạn tính có mang mầm bệnh liên cầu khuẩn",
    ],
    question: "Câu 1273: Chỉ định cắt amidan khi amidan viêm ở người lớn:",
  },
  {
    answers: ["a. Klebsiella", "b. S.pyogene*", "c. S.pneumoniae", "d. H.influenzae"],
    question: "Câu 1274: Loại vi khuẩn nguy hiểm nhất gây viêm amidan cấp là:",
  },
  {
    answers: ["a. Viêm tai giữa mạn tính", "b. Hay tái phát", "c. Giảm thính lực", "d. Các diễn tiến trên"],
    question: "Câu 1275: Diễn tiến viêm tai giữa xuất tiết dịch thấm:",
  },
  {
    answers: ["a. Răng giả *", "b. Chấn thương hàm mặt", "c. Khít hàm", "d. Viêm loét lở miệng"],
    question: "Câu 1276: Một nguyên nhân thuộc Răng hàm mặt có thể gây ra một cấp cứu TMH:",
  },
  {
    answers: ["a. Chảy mũi mủ bã đậu*", "b. Chảy mũi nhầy, xanh", "c. Nghẹt mũi", "d. Chảy mũi nhầy, trắng"],
    question: "Câu 1277: Viêm mũi ở trẻ có các triệu chứng cơ năng chủ yếu sau, NGOẠI TRỪ:",
  },
  {
    answers: [
      "a. Hạ họng (Tầng trên)*",
      "b. Tầng nào cũng có thể gây dò",
      "c. Hạ thanh môn (Tầng dưới)",
      "d. Thanh môn (Tầng giữa)",
    ],
    question: "Câu 1278: Phẫu thuật ở tầng nào của thanh quản dễ gây dò:",
  },
  {
    answers: ["a. Viêm xương tiểu cốt*", "b. Viêm tường thượng nhĩ", "c. Polype hòm nhĩ", "d. Viêm tường dây VII"],
    question: "Câu 1279: Biến chứng cục bộ thường gặp trong viêm tai giữa mạn tính:",
  },
  {
    answers: ["a. Dị vật to bít kín một phế quản*", "b. Cục gum", "c. Sapôchê", "d. Hạt Mãng Cầu"],
    question: "Câu 1280: Biến chứng xẹp một bên phổi thường gặp loại dị vật:",
  },
  { answers: ["a. Không dính", "b. Dễ chùi sạch", "c. Niêm mạc đỏ", "d. Dễ chảy máu*"], question: "Câu 1281:" },
  {
    answers: ["a. Thắt động mạch", "b. Thuốc cầm máu", "c. Kẹp, đốt điện, chấm nitrat bạc", "d. Nhét meche*"],
    question: "Câu 1282: Phương pháp chủ yếu trong cầm máu tai mũi họng là:",
  },
  {
    answers: ["a. 1-2", "b. 5-6*", "c. 3-4", "d. Trên 7 ngày"],
    question: "Câu 1283: Trong viêm tai giữa cấp mủ màng nhĩ tự vỡ vào ngày:",
  },
  {
    answers: ["a. Đau nhức tai*", "b. Chảy mủ tai", "c. Giảm thính lực", "d. Ù tai"],
    question: "Câu 1284: Viêm tai giữa mạn tính không hồi viêm có các triệu chứng sau, NGOẠI TRỪ:",
  },
  {
    answers: [
      "a. Chụp xquang để phát hiện các tổn thương phối hợp",
      "b. Nhét meche mũi trước trước khi chuyển tuyến chuyên khoa*",
      "c. Nắn chỉnh sớm di lệch tháp mũi",
      "d. Dùng thuốc giảm đau",
    ],
    question:
      "Câu 1285: Trong chấn thương có di lệch tháp mũi nhiều kèm chảy máu mũi, xử trí đúng đắn nhất ở tuyến cơ sở là:",
  },
  {
    answers: ["a. Palatine", "b. Gerlach", "c. Lushka", "d. Payer*"],
    question: "Câu 1286: Vòng bạch huyết amidan bao gồm các thành phần sau, NGOẠI TRỪ:",
  },
  {
    answers: ["a. Tiểu đường", "b. Gút", "c. Dị ứng*", "d. Béo phì"],
    question: "Câu 1287: Bệnh cơ địa nào sau đây, liên quan nhiều đến bệnh tai mũi họng:",
  },
  {
    answers: [
      "a. Chế biến thức ăn cho phù hợp",
      "b. Không ăn thức ăn có xương",
      "c. Không ăn cơm kèm uống rượu",
      "d. Cẩn thận trong ăn uống*",
    ],
    question: "Câu 1288: Phòng ngừa tốt nhất của dị vật đường ăn:",
  },
  {
    answers: [
      "a. a & c đúng*",
      "b. Viêm V.A có viêm mũi xoang",
      "c. Viêm V.A có chảy mủ tai",
      "d. Viêm V.A có viêm thận",
    ],
    question: "Câu 1289: Chỉ định nạo V.A, chọn câu đúng nhất:",
  },
  {
    answers: ["a. Trên 18 tháng tuổi*", "b. Từ 1-3 tuổi", "c. Dưới 1 tuổi", "d. Trên 1 tuổi"],
    question: "Câu 1290: Tuổi nạo V.A hợp lý nhất là:",
  },
  {
    answers: ["a. a, b đúng*", "b. Nuốt khó", "c. Khó thở", "d. Nuốt vướng"],
    question: "Câu 1291: U ở họng giai đoạn sớm triệu chứng chủ yếu là:",
  },
  {
    answers: ["a. Mép trước", "b. 1/3 trước mặt bên dây thanh", "c. 2 bên dây thanh đối xứng nhau*", "d. Mép sau"],
    question: "Câu 1292: Hạt xơ dây thanh thường ở vị trí",
  },
  {
    answers: ["a. Phi công", "b. U vòm", "c. Thợ lặn", "d. Dị ứng*"],
    question: "Câu 1293: Yếu tố không phải cơ học gây viêm tai giữa xuất tiết dịch thấm:",
  },
  {
    answers: ["a. U xơ vòm mũi họng", "b. Chấn thương sàn sọ*", "c. Cao huyết áp", "d. Ung thư sàng hàm"],
    question: "Câu 1294: Chảy máu mũi nặng nguyên nhân thường do:",
  },
  {
    answers: [
      "a. Nhiều dịch xuất tiết trong",
      "b. Niêm mạc cuốn tái nhạt*",
      "c. Niêm mạc mũi phù nề",
      "d. Các cuốn quá phát",
    ],
    question: "Câu 1295: Triệu chứng thực thể chủ yếu cho phép nghĩ đến viêm mũi dị ứng là:",
  },
  {
    answers: [
      "a. Khó thở vào",
      "b. Khó thở chậm cả 2 thì*",
      "c. Khó thở nhanh nông",
      "d. Thở ngáy và co kéo cơ hô hấp",
    ],
    question: "Câu 1296: Dấu hiệu lâm sàng tương ứng với dị vật phế quản là:",
  },
  {
    answers: ["a. 4 – 7 tuần", "b. 8 – 11 tuần", "c. Trên hoặc bằng 12 tuần*", "d. Trên 3 tuần"],
    question: "Câu 1297: Được gọi là viêm tai giữa mạn tính khi quá trình viêm nhiễm từ:",
  },
  {
    answers: ["a. Tiểu học", "b. Thiếu niên*", "c. Dưới 2 tuổi", "d. Mẫu giáo"],
    question: "Câu 1298: Viêm V.A hay gặp ở các lứa tuổi sau, NGOẠI TRỪ:",
  },
  {
    answers: ["a. Tất cả đều đúng.*", "b. Viêm thanh quản.", "c. Viêm tai giữa.", "d. Viêm tấy quanh amidan."],
    question: "Câu 1299: Viêm họng giả mạc trắng do vi khuẩn thông thường có thể gây biến chứng sau:",
  },
  {
    answers: [
      "a. Đẩy dị vật xuống dạ dày",
      "b. Dùng kéo cắt nhỏ dị vật ra sau đó dùng kẹp lấy ra từng phần*",
      "c. Chuyển lên tuyến trên",
      "d. Theo dõi thêm vài ngày, hy vọng dị vật sẽ xuống dạ dày",
    ],
    question:
      "Câu 1300: Khi soi thực quản, nếu dị vật ở thực quản cổ quá to không thể dùng kẹp để lấy ra được, cần phải:",
  },
  {
    answers: [
      "a. Đặt tạm 1 merocel cầm máu",
      "b. Lau sạch ống tai",
      "c. Dùng kháng sinh",
      "d. Đổ bột kháng sinh vào tai*",
    ],
    question: "Câu 1301: Điều không nên làm khi vỡ xương ống tai:",
  },
  {
    answers: ["a. 5-15 tuổi.*", "b. Dưới 5 tuổi.", "c. 5-10 tuổi.", "d. 10-15 tuổi."],
    question: "Câu 1302: Viêm họng do liên cầu tiêu huyết Beta nhóm A ở trẻ em thường gặp ở khoảng tuổi:",
  },
  {
    answers: ["a. Kèo theo khàn tiếng", "b. Nặng nề có nhiều đờm*", "c. Khan không có đờm", "d. Từng cơn rũ rượi"],
    question: "Câu 1303: Các đặc điểm sau đây là đặc trưng của kiểu ho thanh quản, NGOẠI TRỪ:",
  },
  {
    answers: ["a. Cắm vào xoang lê", "b. Hạ họng", "c. Trụ amidan", "d. Miệng thực quản*"],
    question: "Câu 1304: Sau khi bị mắc xương người bệnh chảy nước miếng nhiều, thường dị vật nằm ở:",
  },
  {
    answers: ["a. Đặc điểm lâm sàng", "b. Khai thác bệnh sử", "c. X quang tim phổi", "d. Nội soi thanh quản*"],
    question: "Câu 1305: Xác định nguyên nhân gây khó thở thanh quản chính xác nhất là:",
  },
  {
    answers: [
      "a. Răng hàm dưới mọc không đều",
      "b. Xương hàm dưới nhô ra",
      "c. Răng hàm trên mọc lổm chổm",
      "d. Khờ khạo*",
    ],
    question: "Câu 1306: “Bộ mặt V.A” có đặc điểm sau, ngoại trừ:",
  },
  {
    answers: ["a. 3 tuần*", "b. 5 tuần", "c. 4 tuần", "d. 2 tuần"],
    question: "Câu 1307: Sau khi đặt lại thành trước ống tai do hở xương nhĩ, thời gian kiêng nhai là:",
  },
  {
    answers: [
      "a. Cùng bên, đường kính 2cm",
      "b. Cùng bên, đường kính 4cm*",
      "c. Bên đối diện",
      "d. Nhiều, có ở cùng bên di động",
    ],
    question: "Câu 1308: Trong cách xếp loại hoạch N2 của ung thư thanh quản ứng với tính chất hạch cổ:",
  },
  {
    answers: [
      "a. X quang cổ thẳng, nghiêng",
      "b. Siêu âm mạch máu vùng cổ",
      "c. CT-Scan cổ có cản quang",
      "d. Nội soi thanh – khí – thực quản ống mềm*",
    ],
    question:
      "Câu 1309: Bệnh nhân bị dao đâm vào cổ, có dấu hiệu tràn khí dưới da vùng cổ, nói khó, nghĩ nhiều bị tổn thương thanh quản, cần thực hiện cận lâm sàng sau:",
  },
  {
    answers: ["a. Xanh tím bất thường", "b. Khàn tiếng", "c. Tiền sử bệnh", "d. Khó thở thì thở vào hay thì thở ra*"],
    question: "Câu 1310: Triệu chứng có tính chất cấp cứu và giúp cho hướng chẩn đoán là:",
  },
  {
    answers: ["a. Trắng hồng", "b. Đỏ sậm", "c. Tái nhợt*", "d. Hồng sậm"],
    question: "Câu 1311: Viêm mũi dị ứng, màu sắc của niêm mạc mũi thường:",
  },
  {
    answers: [
      "a. Tất cả đều đúng*",
      "b. Đàn hồi của màng nhĩ",
      "c.Thông thuận của hệ thống xương con",
      "d. Tình trạng dịch trong hòm nhĩ",
    ],
    question: "Câu 1312: Đo nhĩ lượng đồ là để đánh giá:",
  },
  {
    answers: [
      "a. Thường gặp ở trẻ dưới 7 tuổi",
      "b. Dễ lầm với viêm xoang*",
      "c. Dị vật thường để lâu ở trong mũi",
      "d. Thường chảy một bên, số lượng ít, lẫn nhầy đục, có mùi hôi",
    ],
    question: "Câu 1313: Chảy máu mũi do dị vật thường có các đặc điểm sau, NGOẠI TRỪ:",
  },
  {
    answers: ["a. Tai giữa", "b. Cửa sổ bầu dục", "c. Ống tai ngoài", "d. Mê nhĩ *"],
    question: "Câu 1314: Giang mai tấn công vùng nào gây điếc tai trong:",
  },
  {
    answers: ["a. Trám răng sâu*", "b. Kháng sinh", "c. Nhổ răng gây bệnh", "d. Rửa xoang hàm viêm qua nội soi"],
    question: "Câu 1315:",
  },
  {
    answers: ["a. 6", "b. 9", "c. Trên 12*", "d. Trên 15"],
    question: "Câu 1316: Trẻ em bị viêm amidan mạn tính, tuổi chỉ định cắt amidan thích hợp là:",
  },
  {
    answers: ["a. Viêm xoang sau *", "b. Viêm xoang sàng", "c. Viêm xoang bướm", "d. Viêm xoang trán"],
    question: "Câu 1317: Viêm xoang nào dễ nhầm với nhóm bệnh suy nhược thần kinh:",
  },
]

/* ==========================================================================
   VBSP - MASTER DATA STORE
   Authentic data extracted from VBSP official portals (vbsp.org.vn & vbsp-org.vnptweb.vn)
   ========================================================================== */

const VBSP_DATA = {
  // THÔNG TIN BẢN SẮC & PHÁP LÝ ĐẶC THÙ NHCSXH
  intro: {
  "legal_identity": {
    "institution_type": "Tổ chức tín dụng thuộc Chính phủ Việt Nam",
    "establishment_purpose": "Cho vay hộ nghèo và các đối tượng chính sách xã hội khác",
    "nature": "Hoạt động không vì mục đích lợi nhuận",
    "state_guarantee": "Được Chính phủ Việt Nam bảo đảm 100% khả năng thanh toán",
    "reserve_ratio": "Tỷ lệ dự trữ bắt buộc là 0%",
    "deposit_insurance": "Không phải tham gia bảo hiểm tiền gửi",
    "tax_status": "Được miễn thuế và các khoản phải nộp ngân sách nhà nước",
    "motto": "Thấu hiểu lòng dân - Tận tâm phục vụ"
  },
  "logo": {
    "name": "Ý nghĩa biểu trưng (Logo) Ngân hàng Chính sách xã hội",
    "shape": "Búp sen thanh tao vươn lên",
    "elements": [
      {
        "part": "Búp sen thanh tao",
        "meaning": "Hình ảnh búp sen - biểu tượng văn hóa thuần khiết, sức sống mãnh liệt của dân tộc Việt Nam, gắn liền với cảnh sắc làng quê nông thôn và sự chân chất, bình dị của người dân lao động nghèo."
      },
      {
        "part": "Hai bàn tay cách điệu (2 chữ N)",
        "meaning": "Hai bàn tay đan kết chặt chẽ vào nhau tạo thành 2 chữ N lồng ghép – viết tắt của từ \"Người Nghèo\", thể hiện tinh thần đùm bọc, tương thân tương ái, đồng hành và chở che của Đảng, Nhà nước cùng nhân dân đối với người nghèo."
      },
      {
        "part": "Ba khối chéo trên đỉnh",
        "meaning": "Tượng trưng cho 03 miền Bắc - Trung - Nam, biểu thị sự đoàn kết toàn dân tộc và mạng lưới tín dụng chính sách xã hội phủ rộng khắp mọi nẻo đường đất nước, không để ai bị bỏ lại phía sau."
      },
      {
        "part": "Đài sen chữ \"VBSP\"",
        "meaning": "Dòng chữ \"VBSP\" (Vietnam Bank For Social Policies) tạo đài hoa như một bệ đỡ vững chắc, kiên định, cam kết thủy chung của ngân hàng trong việc hỗ trợ người dân vươn lên thoát nghèo bền vững."
      }
    ],
    "staff_ethos": "Nhắc nhở cán bộ NHCSXH không ngừng nỗ lực phấn đấu, vượt qua mọi khó khăn thử thách; thực hiện chuẩn mực đạo đức \"Cần - Kiệm - Liêm - Chính - Chí công vô tư\", hoàn thành xuất sắc nhiệm vụ cao cả được giao phó."
  },
  "history": {
    "milestones": [
      {
        "time": "10/06/1993",
        "event": "Nghị quyết số 05-NQ/HNTW",
        "detail": "Hội nghị lần thứ năm Ban Chấp hành Trung ương Đảng khóa VII về đổi mới và phát triển kinh tế - xã hội nông thôn. Đảng ta chủ trương có chế độ tín dụng ưu đãi đối với hộ nghèo, hộ chính sách, vùng sâu vùng xa; mở rộng hình thức cho vay thông qua tín chấp."
      },
      {
        "time": "Tháng 03/1995",
        "event": "Thành lập Quỹ cho vay ưu đãi hộ nghèo",
        "detail": "Ngân hàng Nhà nước Việt Nam thành lập Quỹ với vốn ban đầu 400 tỷ đồng (Agribank, Vietcombank đóng góp và NHNN cho vay). Cho vay hộ nghèo thiếu vốn sản xuất với lãi suất ưu đãi, mức vay tối đa 2.500.000 đồng/hộ, không phải thế chấp tài sản."
      },
      {
        "time": "31/08/1995",
        "event": "Thành lập Ngân hàng Phục vụ người nghèo",
        "detail": "Thủ tướng ban hành QĐ 525/QĐ-TTg và Thống đốc NHNN ban hành QĐ 290/QĐ-NH5 thành lập Ngân hàng Phục vụ người nghèo (đặt tại Agribank), hoạt động không vì lợi nhuận, cung cấp nguồn vốn ưu đãi chuyên biệt hỗ trợ hộ nghèo phát triển sản xuất."
      },
      {
        "time": "04/10/2002",
        "event": "Thành lập Ngân hàng Chính sách xã hội (VBSP)",
        "detail": "Chính phủ ban hành Nghị định 78/2002/NĐ-CP và Thủ tướng ban hành Quyết định 131/2002/QĐ-TTg thành lập Ngân hàng Chính sách xã hội trên cơ sở tổ chức lại Ngân hàng Phục vụ người nghèo, chính thức tách tín dụng chính sách ưu đãi ra khỏi tín dụng thương mại."
      },
      {
        "time": "22/11/2014",
        "event": "Chỉ thị số 40-CT/TW của Ban Bí thư",
        "detail": "Ban Bí thư TW Đảng ban hành Chỉ thị 40-CT/TW về tăng cường sự lãnh đạo của Đảng đối với tín dụng chính sách xã hội, tạo bước đột phá trong huy động nguồn lực và nâng cao trách nhiệm của cấp ủy, chính quyền các cấp."
      },
      {
        "time": "10/06/2021",
        "event": "Kết luận số 06-KL/TW của Ban Bí thư",
        "detail": "Ban Bí thư tiếp tục ban hành Kết luận 06-KL/TW khẳng định vai trò trụ cột của tín dụng chính sách trong hệ thống an sinh xã hội quốc gia và công cuộc xây dựng nông thôn mới, giảm nghèo đa chiều bền vững."
      },
      {
        "time": "2026 - Tầm nhìn 2030",
        "event": "Chiến lược phát triển NHCSXH đến 2030",
        "detail": "Triển khai Quyết định 05/QĐ-TTg của Thủ tướng Chính phủ, phát triển NHCSXH theo hướng hiện đại, ổn định, bền vững, đẩy mạnh chuyển đổi số toàn diện (VBSP SmartBanking), quản lý nguồn vốn hàng trăm nghìn tỷ đồng phục vụ nhân dân."
      }
    ]
  },
  "awards": {
    "heroic_title": {
      "title": "Danh hiệu Anh hùng Lao động thời kỳ đổi mới",
      "awarded_by": "Chủ tịch nước Cộng hòa Xã hội Chủ nghĩa Việt Nam",
      "decision": "Quyết định số 2015/QĐ-CTN ngày 13/11/2020",
      "reason": "Đã có thành tích đặc biệt xuất sắc trong lao động, sáng tạo giai đoạn 2009 - 2019, đóng góp to lớn vào sự nghiệp xây dựng Chủ nghĩa xã hội và bảo vệ Tổ quốc."
    },
    "orders": [
      {
        "name": "Huân chương Độc lập hạng Ba",
        "year": "Giai đoạn phát triển tiêu biểu"
      },
      {
        "name": "Huân chương Lao động hạng Nhất",
        "year": "Thành tích xuất sắc toàn diện"
      },
      {
        "name": "Huân chương Lao động hạng Nhì",
        "year": "Đóng góp lớn cho xóa đói giảm nghèo"
      },
      {
        "name": "Huân chương Lao động hạng Ba",
        "year": "Xây dựng mạng lưới an sinh xã hội"
      }
    ],
    "government_awards": [
      {
        "year": "2015",
        "name": "Cờ thi đua của Chính phủ",
        "desc": "Hoàn thành xuất sắc nhiệm vụ công tác, dẫn đầu phong trào thi đua năm 2015 của ngành Ngân hàng",
        "decision": "QĐ 1799/QĐ-TTg ngày 19/9/2016 của Thủ tướng Chính phủ"
      },
      {
        "year": "2014",
        "name": "Cờ thi đua của Chính phủ",
        "desc": "Hoàn thành xuất sắc nhiệm vụ công tác, dẫn đầu phong trào thi đua năm 2014 của ngành Ngân hàng",
        "decision": "QĐ 788/QĐ-TTg ngày 05/6/2015 của Thủ tướng Chính phủ"
      },
      {
        "year": "2012",
        "name": "Bằng khen của Thủ tướng Chính phủ",
        "desc": "Thành tích trong công tác triển khai thực hiện Quyết định 157/QĐ-TTg về tín dụng đối với Học sinh sinh viên",
        "decision": "QĐ 233/QĐ-TTg ngày 25/01/2013 của Thủ tướng Chính phủ"
      },
      {
        "year": "2011",
        "name": "Cờ thi đua của Chính phủ",
        "desc": "Thành tích hoàn thành xuất sắc toàn diện nhiệm vụ công tác, dẫn đầu phong trào thi đua năm 2011 của Ngành ngân hàng",
        "decision": "QĐ 932/QĐ-TTg ngày 17/7/2012 của Thủ tướng Chính phủ"
      },
      {
        "year": "2010",
        "name": "Cờ thi đua của Chính phủ",
        "desc": "Thành tích hoàn thành xuất sắc toàn diện nhiệm vụ công tác, dẫn đầu phong trào thi đua năm 2010 của Ngành ngân hàng",
        "decision": "QĐ 1372/QĐ-TTg ngày 12/8/2011 của Thủ tướng Chính phủ"
      },
      {
        "year": "2009",
        "name": "Bằng khen của Thủ tướng Chính phủ",
        "desc": "Thành tích thực hiện chính sách tín dụng ngân hàng phục vụ phát triển nông nghiệp nông thôn",
        "decision": "QĐ 1403/QĐ-TTg ngày 09/8/2010 của Thủ tướng Chính phủ"
      },
      {
        "year": "2008",
        "name": "Cờ thi đua của Chính phủ",
        "desc": "Thành tích hoàn thành xuất sắc toàn diện nhiệm vụ công tác, dẫn đầu phong trào thi đua năm 2008",
        "decision": "QĐ 1009/QĐ-TTg ngày 16/7/2009 của Thủ tướng Chính phủ"
      },
      {
        "year": "2006",
        "name": "Cờ thi đua của Chính phủ",
        "desc": "Thành tích hoàn thành xuất sắc toàn diện nhiệm vụ công tác, dẫn đầu phong trào thi đua năm 2006",
        "decision": "QĐ 743/QĐ-TTg ngày 14/6/2007 của Thủ tướng Chính phủ"
      },
      {
        "year": "2004",
        "name": "Bằng khen của Thủ tướng Chính phủ",
        "desc": "Thành tích trong công tác từ năm 2002 đến năm 2004, góp phần vào sự nghiệp xây dựng CNXH",
        "decision": "QĐ 395/QĐ-TTg ngày 16/5/2005 của Thủ tướng Chính phủ"
      }
    ]
  },
  "organization": {
    "registration": {
      "name_vn": "NGÂN HÀNG CHÍNH SÁCH XÃ HỘI",
      "name_en": "VIETNAM BANK FOR SOCIAL POLICIES",
      "short_name": "VBSP",
      "tax_id": "0100695387",
      "headquarters": "Số 169, phố Linh Đường, phường Hoàng Liệt, thành phố Hà Nội, Việt Nam",
      "phone": "(024) 3641 7211",
      "fax": "(024) 3641 7194",
      "email": "icd@vbsp.vn",
      "website": "www.vbsp.org.vn",
      "charter_capital": "28.238.840.000.000 đồng (Hai mươi tám nghìn hai trăm ba mươi tám tỷ tám trăm bốn mươi triệu đồng)",
      "business_line": "Hoạt động trung gian tiền tệ khác (Chi tiết: Tín dụng chính sách xã hội) - Mã ngành: 6419",
      "founder": "Chính phủ Việt Nam (Quyết định thành lập số 131/2002/QĐ-TTg ngày 04/10/2002 của Thủ tướng Chính phủ)",
      "legal_representative": {
        "name": "NGUYỄN THỊ HẰNG",
        "gender": "Nữ",
        "position": "Tổng Giám đốc"
      }
    },
    "network_structure": [
      {
        "level": "Cấp Trung ương",
        "name": "Hội đồng Quản trị & Ban Tổng Giám đốc",
        "desc": "Chủ tịch HĐQT là Thống đốc NHNN. Thành viên kiêm nhiệm là Thứ trưởng/Lãnh đạo các Bộ (Tài chính, KH&ĐT, LĐTB&XH, NN&PTNT...) và người đứng đầu 4 tổ chức CT-XH (Hội Phụ nữ, Hội Nông dân, Cựu chiến binh, Đoàn Thanh niên)."
      },
      {
        "level": "Cơ quan tham mưu, điều hành",
        "name": "Hội sở chính, Sở giao dịch & 2 Trung tâm",
        "desc": "Hội sở chính tại Hà Nội, Sở giao dịch, Trung tâm Đào tạo và Trung tâm Công nghệ thông tin đảm bảo vận hành đồng bộ toàn hệ thống."
      },
      {
        "level": "Cấp Tỉnh / Thành phố",
        "name": "63 Chi nhánh tỉnh, thành phố",
        "desc": "63 Chi nhánh cấp tỉnh cùng Ban đại diện HĐQT cấp tỉnh do Chủ tịch UBND tỉnh làm Trưởng ban chỉ đạo hoạt động trên địa bàn."
      },
      {
        "level": "Cấp Huyện / Thị xã",
        "name": "Phòng giao dịch cấp huyện",
        "desc": "Hệ thống các Phòng giao dịch huyện, thị xã cùng Ban đại diện HĐQT cấp huyện (Chủ tịch UBND xã là thành viên)."
      },
      {
        "level": "Cấp Cơ sở (Xã / Phường)",
        "name": "Gần 10.000 Điểm giao dịch xã",
        "desc": "Tổ chức phiên giao dịch cố định định kỳ hàng tháng tại trụ sở UBND xã, mang toàn bộ dịch vụ ngân hàng về tận cơ sở phục vụ nhân dân."
      },
      {
        "level": "Thôn / Bản / Tổ dân phố",
        "name": "Gần 200.000 Tổ Tiết kiệm và Vay vốn",
        "desc": "Cánh tay nối dài của NHCSXH tại từng xóm, ấp, bình xét cho vay công khai, giám sát sử dụng vốn và hỗ trợ bà con tiết kiệm tích lũy."
      }
    ]
  }
},

  // 1. SẢN PHẨM & DỊCH VỤ (Bổ sung vào mục Giới thiệu theo yêu cầu)
  services: {
    payment_transfer: {
      category_id: 'payment_transfer',
      category_name: 'Dịch vụ thanh toán chuyển tiền',
      category_desc: 'Giải pháp chuyển tiền nhanh chóng, an toàn, chi phí ưu đãi trên toàn quốc và quốc tế.',
      icon: 'fa-solid fa-money-bill-transfer',
      items: [
        {
          id: 'chuyen-tien-den',
          title: 'Chuyển tiền đến trong nước',
          tag: 'Phổ biến',
          badge_class: 'badge-green',
          short_desc: 'Nhận tiền mặt hoặc chuyển khoản từ mọi ngân hàng trong nước thông qua hệ thống rộng khắp của NHCSXH.',
          icon: 'fa-solid fa-hand-holding-dollar',
          target_customers: 'Cá nhân, hộ gia đình, doanh nghiệp, tổ chức có hoặc không có tài khoản tại NHCSXH.',
          key_benefits: [
            'Không hạn chế số tiền nhận.',
            'Nhận tiền mặt hoặc ghi có tài khoản tự động từ tất cả ngân hàng trong nước.',
            'Nhận thông báo biến động số dư tức thì qua tin nhắn SMS hoặc VBSP SmartBanking.',
            'Điểm nhận tiền phủ khắp gần 10.000 Điểm giao dịch xã và Phòng giao dịch toàn quốc.'
          ],
          procedures: [
            'Khách hàng có tài khoản: Tiền tự động ghi có ngay vào tài khoản thanh toán tại NHCSXH.',
            'Khách hàng không có tài khoản: Xuất trình CCCD/Hộ chiếu còn hiệu lực tại quầy/Điểm giao dịch xã để nhận tiền mặt.'
          ],
          fees: 'Theo biểu phí dịch vụ thanh toán ưu đãi hiện hành của NHCSXH.',
          link_detail: 'chi-tiet-chuyen-tien.html?tab=den'
        },
        {
          id: 'chuyen-tien-di',
          title: 'Chuyển tiền đi trong nước',
          tag: 'Nhanh 24/7',
          badge_class: 'badge-gold',
          short_desc: 'Chuyển tiền trong cùng hệ thống hoặc liên ngân hàng 24/7 với chi phí thấp nhất, độ chính xác cao.',
          icon: 'fa-solid fa-paper-plane',
          target_customers: 'Tất cả công dân Việt Nam và tổ chức hoạt động hợp pháp tại Việt Nam.',
          key_benefits: [
            'Chuyển tiền liên ngân hàng 24/7 đến tất cả các ngân hàng tại Việt Nam.',
            'Kênh chuyển tiền đa dạng: Tại quầy, tại Điểm giao dịch xã hoặc qua ứng dụng VBSP SmartBanking.',
            'Không hạn chế số tiền chuyển (đảm bảo hạn mức theo quy định an toàn).',
            'Chính sách phí ưu đãi đặc biệt hỗ trợ đồng bào vùng sâu, vùng xa, vùng khó khăn.'
          ],
          procedures: [
            'Tại quầy: Điền Giấy nộp tiền/Ủy nhiệm chi kèm CCCD người gửi.',
            'Qua VBSP SmartBanking: Thực hiện trực tiếp trên điện thoại di động mọi lúc mọi nơi bằng mã OTP xác thực an toàn.'
          ],
          fees: 'Miễn phí chuyển tiền nội bộ NHCSXH; Phí liên ngân hàng theo quy định ưu đãi nhất.',
          link_detail: 'chi-tiet-chuyen-tien.html?tab=di'
        },
        {
          id: 'kieu-hoi',
          title: 'Dịch vụ chuyển tiền kiều hối',
          tag: 'Quốc tế',
          badge_class: 'badge-red',
          short_desc: 'Nhận kiều hối từ thân nhân ở nước ngoài gửi về an toàn, nhanh chóng, nhận tiền tại xã.',
          icon: 'fa-solid fa-globe',
          target_customers: 'Thân nhân của kiều bào, người lao động Việt Nam làm việc tại nước ngoài.',
          key_benefits: [
            'Mạng lưới phục vụ tới tận thôn, bản, xã, phường trên toàn lãnh thổ Việt Nam.',
            'Nhận tiền bằng đồng Việt Nam (VND) hoặc ngoại tệ theo quy định quản lý ngoại hối.',
            'Thủ tục nhận tiền đơn giản, nhanh chóng, bảo mật tuyệt đối.',
            'Hợp tác với các đối tác kiều hối và chuyển tiền quốc tế uy tín hàng đầu.'
          ],
          procedures: [
            'Người nhận xuất trình CCCD/Hộ chiếu và Mã số nhận tiền kiều hối (MTCN).',
            'Ký nhận Phiếu nhận tiền kiều hối tại bất kỳ Phòng giao dịch hoặc Điểm giao dịch xã của NHCSXH.'
          ],
          fees: 'Người nhận tiền kiều hối hoàn toàn KHÔNG phải trả bất kỳ khoản phí nào.',
          link_detail: 'chi-tiet-chuyen-tien.html?tab=kieuhoi'
        }
      ]
    },

    savings_deposit: {
      category_id: 'savings_deposit',
      category_name: 'Dịch vụ Nhận tiền gửi tiết kiệm',
      category_desc: 'Gửi tiền an toàn 100%, lãi suất cạnh tranh, vừa sinh lời vừa chung tay vì an sinh xã hội.',
      icon: 'fa-solid fa-piggy-bank',
      items: [
        {
          id: 'tiet-kiem-co-ky-han',
          title: 'Gửi tiết kiệm có kỳ hạn',
          tag: 'Lãi suất cao',
          badge_class: 'badge-green',
          short_desc: 'Sản phẩm tiền gửi có kỳ hạn đa dạng từ 01 đến 24 tháng, được rút gốc từng phần linh hoạt.',
          icon: 'fa-solid fa-calendar-check',
          target_customers: 'Cá nhân là người Việt Nam và người nước ngoài cư trú hợp pháp tại Việt Nam.',
          key_benefits: [
            'Lãi suất cạnh tranh, ổn định và bảo đảm an toàn tuyệt đối bởi Nhà nước.',
            'Kỳ hạn linh hoạt: 1, 2, 3, 6, 9, 12, 18, 24 tháng hoặc theo thỏa thuận.',
            'ĐƯỢC RÚT GỐC TỪNG PHẦN: Khi cần vốn đột xuất, khách hàng rút một phần gốc, phần còn lại vẫn hưởng nguyên lãi suất có kỳ hạn.',
            'Gửi và rút tiền thuận tiện tại bất kỳ Phòng giao dịch hoặc Điểm giao dịch xã nào.'
          ],
          procedures: [
            'Xuất trình CCCD/Hộ chiếu còn hiệu lực.',
            'Điền Giấy gửi tiền tiết kiệm và nộp tiền mặt hoặc chuyển khoản từ tài khoản.',
            'Nhận Sổ tiết kiệm do NHCSXH cấp bảo đảm giá trị pháp lý tuyệt đối.'
          ],
          rates_sample: 'Từ 2.6%/năm (1 tháng) đến 5.8%/năm (24 tháng).',
          link_detail: 'chi-tiet-tien-gui-tiet-kiem.html?tab=cokyhan'
        },
        {
          id: 'tiet-kiem-khong-ky-han',
          title: 'Gửi tiết kiệm không kỳ hạn',
          tag: 'Linh hoạt tối đa',
          badge_class: 'badge-gold',
          short_desc: 'Gửi và rút tiền linh hoạt mọi lúc mọi nơi theo nhu cầu, hưởng lãi suất không kỳ hạn hấp dẫn.',
          icon: 'fa-solid fa-vault',
          target_customers: 'Mọi cá nhân có nhu cầu tích lũy linh hoạt và quản lý dòng tiền hàng ngày.',
          key_benefits: [
            'Rút tiền gửi hoặc gửi thêm tiền vào sổ tiết kiệm bất cứ ngày làm việc nào.',
            'Số dư tối thiểu mở sổ chỉ từ 100.000 đồng.',
            'Tiền lãi tự động nhập gốc vào ngày cuối tháng hoặc ngày tất toán.',
            'Có thể chuyển đổi sang tiền gửi có kỳ hạn bất kỳ lúc nào để nhận lãi suất cao hơn.'
          ],
          procedures: [
            'Xuất trình CCCD tại quầy giao dịch NHCSXH.',
            'Điền thông tin vào Giấy mở sổ tiết kiệm không kỳ hạn.'
          ],
          rates_sample: '0.2%/năm tính trên số dư thực tế theo ngày.',
          link_detail: 'chi-tiet-tien-gui-tiet-kiem.html?tab=khongkyhan'
        }
      ]
    },

    lending_treasury: {
      category_id: 'lending_treasury',
      category_name: 'Quy trình cho vay & Ngân quỹ',
      category_desc: 'Tài khoản tiền gửi thanh toán, tiền gửi tổ chức và quy trình cho vay các chương trình chính sách.',
      icon: 'fa-solid fa-file-invoice-dollar',
      items: [
        {
          id: 'tien-gui-co-ky-han-to-chuc',
          title: 'Tiền gửi có kỳ hạn (Tổ chức)',
          tag: 'Tổ chức / Đoàn thể',
          badge_class: 'badge-green',
          short_desc: 'Dành cho các tổ chức, đoàn thể, ban ngành gửi vốn nhàn rỗi chung tay vì an sinh xã hội.',
          icon: 'fa-solid fa-building-columns',
          target_customers: 'Các cơ quan, tổ chức chính trị - xã hội, doanh nghiệp, hợp tác xã, quỹ tài chính.',
          key_benefits: [
            'Lãi suất ưu đãi hấp dẫn, thủ tục minh bạch, an toàn pháp lý tuyệt đối.',
            'Hợp đồng tiền gửi linh hoạt theo thỏa thuận từ 1 tháng đến nhiều năm.',
            'Được sử dụng sổ tiền gửi làm tài sản bảo đảm khi có nhu cầu.',
            'Chung tay cùng Chính phủ kiến tạo nguồn vốn an sinh xã hội cho người nghèo.'
          ],
          procedures: [
            'Hồ sơ pháp lý tổ chức: Quyết định thành lập / Giấy ĐKKD, Quyết định bổ nhiệm thủ trưởng đơn vị & kế toán trưởng.',
            'Ký kết Hợp đồng tiền gửi có kỳ hạn giữa tổ chức và NHCSXH.'
          ],
          fees: 'Miễn phí mở và quản lý tài khoản tiền gửi có kỳ hạn.',
          link_detail: 'chi-tiet-quy-trinh-cho-vay.html?tab=tiengui'
        },
        {
          id: 'tien-gui-thanh-toan',
          title: 'Tiền gửi thanh toán',
          tag: 'Giao dịch số',
          badge_class: 'badge-gold',
          short_desc: 'Tài khoản thanh toán đa năng: nộp rút tiền mặt, chuyển tiền, thanh toán hóa đơn và quản trị qua SmartBanking.',
          icon: 'fa-solid fa-credit-card',
          target_customers: 'Tổ chức và cá nhân sử dụng tài khoản thanh toán cho các mục đích chi trả, nhận vốn và kinh doanh.',
          key_benefits: [
            'Liên kết trực tiếp với ứng dụng VBSP SmartBanking chuyển tiền 24/7.',
            'Thực hiện các lệnh séc, ủy nhiệm chi, thanh toán tiền điện, nước, cước viễn thông tự động.',
            'Nhận tiền giải ngân vốn vay chính sách nhanh chóng, an toàn tuyệt đối.',
            'Biểu phí duy trì tài khoản và dịch vụ cạnh tranh nhất hệ thống ngân hàng.'
          ],
          procedures: [
            'Điền Giấy đề nghị mở tài khoản thanh toán (Mẫu NHCSXH).',
            'Kèm CCCD (đối với cá nhân) hoặc hồ sơ pháp lý (đối với tổ chức).'
          ],
          fees: 'Miễn phí mở tài khoản; Miễn phí chuyển khoản nội bộ NHCSXH.',
          link_detail: 'chi-tiet-quy-trinh-cho-vay.html?tab=thanhtoan'
        },
        {
          id: 'quy-trinh-cho-vay-chinh-sach',
          title: 'Quy trình cho vay các chương trình',
          tag: 'Chính sách ưu đãi',
          badge_class: 'badge-red',
          short_desc: 'Quy trình giải ngân vốn tín dụng chính sách qua Tổ Tiết kiệm & Vay vốn tại thôn bản và Điểm giao dịch xã.',
          icon: 'fa-solid fa-list-check',
          target_customers: 'Hộ nghèo, hộ cận nghèo, hộ mới thoát nghèo, HSSV, lao động đi làm việc nước ngoài, cơ sở giải quyết việc làm...',
          key_benefits: [
            'Vay vốn KHÔNG CẦN TÀI SẢN BẢO ĐẢM đối với hầu hết các chương trình ưu đãi hộ gia đình.',
            'Bình xét công khai, dân chủ tại Tổ Tiết kiệm và Vay vốn nơi cư trú.',
            'Giải ngân và thu nợ trực tiếp ngay tại Điểm giao dịch xã định kỳ hàng tháng.',
            'Thời hạn vay dài, lãi suất ưu đãi đặc biệt do Thủ tướng Chính phủ quy định.'
          ],
          procedures: [
            'Bước 1: Hộ vay viết Giấy đề nghị vay vốn gửi Tổ Tiết kiệm và Vay vốn (TK&VV) tại thôn/bản.',
            'Bước 2: Tổ TK&VV họp bình xét công khai dưới sự giám sát của Trưởng thôn và tổ chức hội nhận ủy thác.',
            'Bước 3: UBND cấp xã xác nhận danh sách đối tượng chính sách đủ điều kiện.',
            'Bước 4: NHCSXH phê duyệt và giải ngân tiền mặt hoặc chuyển khoản trực tiếp cho hộ vay tại phiên giao dịch xã.'
          ],
          link_detail: 'chi-tiet-quy-trinh-cho-vay.html?tab=chovay'
        }
      ]
    }
  },

  // 2. DỮ LIỆU TIN TỨC CHÍNH THỨC TỪ VBSP (TIN NỔI BẬT & TIN MỚI CẬP NHẬT)
  news_noi_bat: [
  {
    "id": "nb-1",
    "title": "Phát động Tháng cao điểm “Vì người nghèo” năm 2026",
    "link": "https://vbsp.org.vn/phat-dong-thang-cao-diem-vi-nguoi-ngheo-nam-2026.html",
    "image": "https://vbsp.org.vn/wp-content/uploads/2026/10/image0043-150x150.jpg",
    "summary": "(VBSP News) Tối 17/10, tại Hà Nội, Ban Thường trực Ủy ban Trung ương MTTQ Việt Nam tổ chức chương trình phát động Tháng cao điểm “Vì người nghèo” năm 2026 và gặp mặt, biểu dương các tổ chức, cá nhân có nhiều đóng góp cho công tác an sinh xã hội giai đoạn 2024 - 2026 với chủ đề “Đại đoàn kết - Lan tỏa tình dân tộc, nghĩa đồng bào”. Chương trình có sự tham dự của 225 đại diện tổ chức, cá nhân có nhiều đóng góp cho công tác an sinh xã hội được biểu dương, vinh danh. NHCSXH vinh dự là một trong các đơn vị được vinh danh tại chương trình.",
    "date": "Tháng 10/2026",
    "badge": "Tin nổi bật",
    "category": "noi-bat",
    "views": 3567
  },
  {
    "id": "nb-2",
    "title": "NHCSXH chúc mừng 96 năm thành lập Hội LHPN Việt Nam",
    "link": "https://vbsp.org.vn/nhcsxh-chuc-mung-96-nam-thanh-lap-hoi-lhpn-viet-nam.html",
    "image": "https://vbsp.org.vn/wp-content/uploads/2026/10/1WUpukr6fOszrhngDlBC0Kn5snUUwKyXri8HGExZiKJA7yx3ZOJyBKQhYJhH7mm7D0g-150x150.jpg",
    "summary": "(VBSP News) Nhân kỷ niệm 96 năm thành lập Hội LHPN Việt Nam (20/10/1930 - 20/10/2026), chiều 16/10, đồng chí Nguyễn Thị Hằng - Bí thư Đảng uỷ NHCSXHTW, Uỷ viên HĐQT, Tổng Giám đốc NHCSXH làm trưởng đoàn đã đến chúc mừng Trung ương Hội LHPN Việt Nam.",
    "date": "Tháng 10/2026",
    "badge": "Tin nổi bật",
    "category": "noi-bat",
    "views": 4048
  },
  {
    "id": "nb-3",
    "title": "Đổi mới phương thức lãnh đạo của Đảng, gắn trách nhiệm cá nhân với kết quả công việc",
    "link": "https://vbsp.org.vn/doi-moi-phuong-thuc-lanh-dao-cua-dang-gan-trach-nhiem-ca-nhan-voi-ket-qua-cong-viec.html",
    "image": "https://vbsp.org.vn/wp-content/uploads/2026/10/hoi-nghi-tw4-5500_11zon-150x150.jpg",
    "summary": "(VBSP News) Sáng 16/10, tại Hà Nội, Bộ Chính trị, Ban Bí thư tổ chức Hội nghị toàn quốc nghiên cứu, học tập, quán triệt và triển khai thực hiện Nghị quyết Hội nghị lần thứ Tư Ban Chấp hành Trung ương Đảng khóa XIV. Tổng Bí thư, Chủ tịch nước Tô Lâm dự và chỉ đạo Hội nghị. Hội nghị kết nối từ điểm cầu ở Trung ương với hơn 40.000 điểm cầu tại các tỉnh ủy, thành ủy, đảng ủy trực thuộc Trung ương, điểm cầu cơ sở, cơ quan, đơn vị, quân khu, quân chủng, quân đoàn trên toàn quốc với tổng số 2.725.229 đại biểu tham dự.",
    "date": "Tháng 10/2026",
    "badge": "Tin nổi bật",
    "category": "noi-bat",
    "views": 4456
  },
  {
    "id": "nb-4",
    "title": "NHCSXH quyết tâm cao, tăng tốc, phấn đấu hoàn thành toàn diện nhiệm vụ năm 2026",
    "link": "https://vbsp.org.vn/nhcsxh-quyet-tam-cao-tang-toc-phan-dau-hoan-thanh-toan-dien-nhiem-vu-nam-2026.html",
    "image": "https://vbsp.org.vn/wp-content/uploads/2026/10/502A0590-2-150x150.jpg",
    "summary": "(VBSP News) Sáng 05/10, tại Hà Nội, NHCSXH tổ chức hội nghị triển khai nhiệm vụ quý IV năm 2026 theo hình thức trực tiếp kết hợp trực tuyến toàn quốc. Chủ trì hội nghị, đồng chí Nguyễn Thị Hằng - Bí thư Đảng ủy NHCSXHTW, Ủy viên HĐQT, Tổng Giám đốc NHCSXH yêu cầu toàn hệ thống phát huy tinh thần quyết tâm cao, tăng tốc, quyết liệt triển khai các nhiệm vụ, phấn đấu hoàn thành toàn diện kế hoạch năm 2026.",
    "date": "Tháng 10/2026",
    "badge": "Tin nổi bật",
    "category": "noi-bat",
    "views": 3437
  },
  {
    "id": "nb-5",
    "title": "24 năm một hành trình tiếp nối những giá trị của NHCSXH",
    "link": "https://vbsp.org.vn/24-nam-mot-hanh-trinh-tiep-noi-nhung-gia-tri-cua-nhcsxh.html",
    "image": "https://vbsp.org.vn/wp-content/uploads/2026/10/17-150x150.jpg",
    "summary": "(VBSP News) Hướng tới 24 năm ngày thành lập NHCSXH (04/10/2002 - 04/10/2026), chiều 04/10, tại Trụ sở chính NHCSXH, trong bầu không khí ấm áp thân tình, Công đoàn NHCSXH tổ chức buổi gặp mặt với các thế hệ lãnh đạo cấp cao và lãnh đạo chi nhánh NHCSXH các tỉnh, thành phố qua các thời kỳ.",
    "date": "Tháng 10/2026",
    "badge": "Tin nổi bật",
    "category": "noi-bat",
    "views": 3474
  },
  {
    "id": "nb-6",
    "title": "Luôn đồng hành đưa tín dụng chính sách đến người dân",
    "link": "https://vbsp.org.vn/luon-dong-hanh-dua-tin-dung-chinh-sach-den-nguoi-dan.html",
    "image": "https://vbsp.org.vn/wp-content/uploads/2026/10/image0011-150x150.jpg",
    "summary": "(VBSP News) Đến thăm và chúc mừng 24 năm ngày thành lập NHCSXH (4/10/2002 - 4/10/2026), đại diện lãnh đạo các tổ chức chính trị - xã hội ở Trung ương đánh giá cao sự phối hợp chặt chẽ trong suốt thời gian qua đã kịp thời đưa nguồn vốn chính sách của Chính phủ đến hộ nghèo và các đối tượng chính sách khác để phát triển sản xuất, tạo việc làm, cải thiện đời sống và không để ai bị bỏ lại phía sau.",
    "date": "Tháng 10/2026",
    "badge": "Tin nổi bật",
    "category": "noi-bat",
    "views": 4462
  },
  {
    "id": "nb-7",
    "title": "Đảng ủy NHNN quán triệt, cụ thể hóa các nghị quyết của Trung ương gắn với nhiệm vụ ngành Ngân hàng",
    "link": "https://vbsp.org.vn/dang-uy-nhnn-quan-triet-cu-the-hoa-cac-nghi-quyet-cua-trung-uong-gan-voi-nhiem-vu-nganh-ngan-hang.html",
    "image": "https://vbsp.org.vn/wp-content/uploads/2026/09/1790151371957-866212637202921709-866212637202921709-aaec14db2351414124eadd48caa9c0ef20260923155154-150x150.jpg",
    "summary": "(VBSP News) Chiều 23/9, tại Hà Nội, Đảng ủy Ngân hàng Nhà nước Việt Nam (NHNN) tổ chức Hội nghị nghiên cứu, học tập, quán triệt, tuyên truyền và triển khai thực hiện các Nghị quyết, Chỉ thị, Quy định, Kết luận của Đảng. Đồng chí Phạm Đức Ấn, Ủy viên Trung ương Đảng, Bí thư Đảng ủy, Thống đốc NHNN trực tiếp quán triệt các nội dung trọng tâm, nhấn mạnh yêu cầu chuyển mạnh từ học tập, quán triệt sang hành động và kết quả cụ thể. Hội nghị được tổ chức trực tiếp kết hợp trực tuyến tới các điểm cầu của các đơn vị trong ngành và các Đảng bộ trực thuộc.",
    "date": "Tháng 10/2026",
    "badge": "Tin nổi bật",
    "category": "noi-bat",
    "views": 2801
  },
  {
    "id": "nb-8",
    "title": "Nâng mức cho vay đối với người chấp hành xong án phạt tù lên 200 triệu đồng",
    "link": "https://vbsp.org.vn/nang-muc-cho-vay-doi-voi-nguoi-chap-hanh-xong-an-phat-tu-len-200-trieu-dong.html",
    "image": "https://vbsp.org.vn/wp-content/uploads/2026/09/2-150x150.jpg",
    "summary": "(VBSP News) Phó Thủ tướng Chính phủ Nguyễn Văn Thắng vừa ký Quyết định số 44/2026/QĐ-TTg sửa đổi, bổ sung một số điều của Quyết định số 22/2023/QĐ-TTg ngày 17/8/2023 của Thủ tướng Chính phủ về tín dụng đối với người chấp hành xong án phạt tù. Quyết định này sửa đổi, bổ sung nhiều quy định của Quyết định số 22/2023/QĐ-TTg về đối tượng được vay vốn cũng như mức vay sản xuất, kinh doanh, tạo việc làm và đi làm việc ở nước ngoài theo hợp đồng.",
    "date": "Tháng 10/2026",
    "badge": "Tin nổi bật",
    "category": "noi-bat",
    "views": 4720
  },
  {
    "id": "nb-9",
    "title": "Hội nghị toàn quốc nghiên cứu, học tập, quán triệt và triển khai thực hiện một số Nghị quyết, Chỉ thị của Bộ Chính trị",
    "link": "https://vbsp.org.vn/hoi-nghi-toan-quoc-nghien-cuu-hoc-tap-quan-triet-va-trien-khai-thuc-hien-mot-so-nghi-quyet-chi-thi-cua-bo-chinh-tri.html",
    "image": "https://vbsp.org.vn/wp-content/uploads/2026/09/af5d90c8a98e29d0709f_11zon-150x150.jpg",
    "summary": "(VBSP News) Ngày 3/9, Bộ Chính trị, Ban Bí thư tổ chức Hội nghị toàn quốc nghiên cứu, học tập, quán triệt và triển khai thực hiện một số Nghị quyết, Chỉ thị của Bộ Chính trị. Đồng chí Tổng Bí thư, Chủ tịch nước Tô Lâm dự và phát biểu chỉ đạo hội nghị. Hội nghị được tổ chức theo hình thức trực tiếp tại Hội trường Diên Hồng, Nhà Quốc hội kết hợp trực tuyến tới hơn 35 nghìn điểm cầu với hơn 3,7 triệu đại biểu dự.",
    "date": "Tháng 10/2026",
    "badge": "Tin nổi bật",
    "category": "noi-bat",
    "views": 2813
  },
  {
    "id": "nb-10",
    "title": "Hội nghị tập huấn nghiệp vụ cho cán bộ NHCSXH",
    "link": "https://vbsp.org.vn/hoi-nghi-tap-huan-nghiep-vu-cho-can-bo-nhcsxh.html",
    "image": "https://vbsp.org.vn/wp-content/uploads/2026/07/110-150x150.jpg",
    "summary": "(VBSP News) Từ ngày 29-31/7, tại Hà Nội, NHCSXH triển khai hội nghị tập huấn nghiệp vụ cho cán bộ NHCSXH do Ban Kế hoạch nguồn vốn, Ban Tín dụng học sinh, sinh viên và các đối tượng chính sách khác (HSSV&CĐTCSK), Ban Tín dụng người nghèo, Trung tâm Đào tạo và các đơn vị liên quan phối hợp tổ chức thực hiện.",
    "date": "Tháng 10/2026",
    "badge": "Tin nổi bật",
    "category": "noi-bat",
    "views": 2900
  },
  {
    "id": "nb-11",
    "title": "Hội nghị toàn quốc quán triệt và triển khai thực hiện Nghị quyết Hội nghị lần thứ ba Ban Chấp hành Trung ương Đảng khóa XIV",
    "link": "https://vbsp.org.vn/hoi-nghi-toan-quoc-quan-triet-va-trien-khai-thuc-hien-nghi-quyet-hoi-nghi-lan-thu-ba-ban-chap-hanh-trung-uong-dang-khoa-xiv.html",
    "image": "https://vbsp.org.vn/wp-content/uploads/2026/07/039d096174e9f5b7acf8_11zon-150x150.jpg",
    "summary": "(VBSP News) Ngày 29/7, tại Hội trường Diên Hồng, Bộ Chính trị, Ban Bí thư tổ chức Hội nghị toàn quốc nghiên cứu, học tập, quán triệt và triển khai thực hiện Nghị quyết Hội nghị lần thứ ba Ban Chấp hành Trung ương Đảng khóa XIV. Đồng chí Tổng Bí thư, Chủ tịch nước Tô Lâm dự và phát biểu chỉ đạo Hội nghị.",
    "date": "Tháng 10/2026",
    "badge": "Tin nổi bật",
    "category": "noi-bat",
    "views": 4384
  },
  {
    "id": "nb-12",
    "title": "Lễ mít tinh kỷ niệm 79 năm Ngày Thương binh - Liệt sĩ",
    "link": "https://vbsp.org.vn/le-mit-tinh-ky-niem-79-nam-ngay-thuong-binh-liet-si.html",
    "image": "https://vbsp.org.vn/wp-content/uploads/2026/07/toan-canh-150x150.jpg",
    "summary": "(VBSP News) Sáng 27/7, tại hội trường tầng 3 trụ sở chính, Công đoàn cơ sở Hội sở chính phối hợp với Công đoàn cơ sở Sở giao dịch, Trung tâm Đào tạo, CNTT tổ chức Lễ mít tinh kỷ niệm 79 năm Ngày Thương binh - Liệt sĩ (27/7/1947 - 27/7/2026). Tới dự lễ kỷ niệm có đồng chí Nguyễn Thị Hằng - Bí thư Đảng ủy NHCSXHTW, Uỷ viên HĐQT, Tổng Giám đốc NHCSXH.",
    "date": "Tháng 10/2026",
    "badge": "Tin nổi bật",
    "category": "noi-bat",
    "views": 2094
  },
  {
    "id": "nb-13",
    "title": "Thư của Tổng Bí thư, Chủ tịch nước Tô Lâm nhân dịp kỷ niệm 79 năm Ngày Thương binh - Liệt sĩ (27/7/1947 - 27/7/2026)",
    "link": "https://vbsp.org.vn/thu-cua-tong-bi-thu-chu-tich-nuoc-to-lam-nhan-dip-ky-niem-79-nam-ngay-thuong-binh-liet-si-2771947-2772026.html",
    "image": "https://vbsp.org.vn/wp-content/uploads/2026/07/daa-150x150.jpg",
    "summary": "(VBSP News) Nhân dịp kỷ niệm 79 năm Ngày Thương binh - Liệt sĩ (27/7/1947 -27/7/2026), Tổng Bí thư, Chủ tịch nước Tô Lâm gửi thư tri ân đến các Mẹ Việt Nam anh hùng, các Anh hùng, thương binh, bệnh binh, thân nhân liệt sĩ, các cựu chiến binh cùng gia đình. Ban biên tập Website NHCSXH trân trọng giới thiệu toàn văn bức thư.",
    "date": "Tháng 10/2026",
    "badge": "Tin nổi bật",
    "category": "noi-bat",
    "views": 4900
  },
  {
    "id": "nb-14",
    "title": "NHCSXH chung sức chăm lo người có công, vun đắp giá trị an sinh xã hội",
    "link": "https://vbsp.org.vn/nhcsxh-chung-suc-cham-lo-nguoi-co-cong-vun-dap-gia-tri-an-sinh-xa-hoi.html",
    "image": "https://vbsp.org.vn/wp-content/uploads/2026/07/14-150x150.jpg",
    "summary": "(VBSP News) Nhân kỷ niệm 79 năm Ngày Thương binh - Liệt sĩ (27/7/1947-27/7/2026), chiều 21/7, đồng chí Nguyễn Thị Hằng - Bí thư Đảng uỷ NHCSXHTW, Uỷ viên HĐQT, Tổng Giám đốc cùng các thành viên trong đoàn công tác NHCSXH đã đến thăm, tặng quà các thương binh, bệnh binh đang điều dưỡng tại Trung tâm Điều dưỡng thương binh Thuận Thành (Bắc Ninh).",
    "date": "Tháng 10/2026",
    "badge": "Tin nổi bật",
    "category": "noi-bat",
    "views": 4551
  },
  {
    "id": "nb-15",
    "title": "Tháng Bảy về miền “đất lửa” anh hùng",
    "link": "https://vbsp.org.vn/thang-bay-ve-mien-dat-lua-anh-hung.html",
    "image": "https://vbsp.org.vn/wp-content/uploads/2026/07/image012a-150x150.jpg",
    "summary": "(VBSP News) Tháng Bảy hằng năm - tháng tri ân của dân tộc - lại về, gợi nhắc những ký ức thiêng liêng về một thời chiến tranh hào hùng và sự hy sinh cao cả của các thế hệ cha anh vì độc lập, tự do của Tổ quốc. Đây cũng là dịp để mỗi người dân Việt Nam thành kính dâng nén tâm hương, những đóa hoa tươi thắm tưởng nhớ và tri ân các Anh hùng liệt sĩ đã anh dũng chiến đấu, hy sinh vì sự nghiệp giải phóng dân tộc. Nhân kỷ niệm 79 năm Ngày Thương binh - Liệt sĩ (27/7/1947 - 27/7/2026), Đoàn công tác NHCSXH do đồng chí Bí thư Đảng ủy NHCSXH Trung ương, Ủy viên HĐQT, Tổng Giám đốc Nguyễn Thị Hằng làm Trưởng đoàn đã đến dâng hoa, dâng hương tưởng niệm các Anh hùng liệt sĩ tại Khu di tích Truông Bồn (Nghệ An), Khu di tích lịch sử cấp quốc gia đặc biệt Ngã ba Đồng Lộc (Hà Tĩnh), Nghĩa trang Liệt sĩ Quốc gia Trường Sơn và Nghĩa trang Liệt sĩ Quốc gia Đường 9, Di tích quốc gia đặc biệt Thành cổ Quảng Trị và Di tích Lịch sử Hang Tám Cô (Quảng Trị); dâng hương, dâng hoa tại mộ Đại tướng Võ Nguyên Giáp (khu vực Vũng Chùa - Đảo Yến, Quảng Trị). Tham gia đoàn có các đồng chí Lãnh đạo, nguyên Lãnh đạo NHCSXH.",
    "date": "Tháng 10/2026",
    "badge": "Tin nổi bật",
    "category": "noi-bat",
    "views": 2485
  },
  {
    "id": "nb-16",
    "title": "Hội đồng quản trị NHCSXH họp phiên thường kỳ quý II/2026",
    "link": "https://vbsp.org.vn/hoi-dong-quan-tri-nhcsxh-hop-phien-thuong-ky-quy-ii2026.html",
    "image": "https://vbsp.org.vn/wp-content/uploads/2026/07/image001-150x150.jpg",
    "summary": "(VBSP News) Chiều 14/7, tại Hà Nội, Hội đồng quản trị (HĐQT) NHCSXH họp phiên thường kỳ quý II/2026. Ủy viên Ban chấp hành Trung ương Đảng, Thống đốc NHNN Phạm Đức Ấn - Chủ tịch Hội đồng quản trị (HĐQT) NHCSXH chủ trì phiên họp.",
    "date": "Tháng 10/2026",
    "badge": "Tin nổi bật",
    "category": "noi-bat",
    "views": 4646
  },
  {
    "id": "nb-17",
    "title": "NHCSXH chúc mừng thành công Đại hội đại biểu phụ nữ toàn quốc lần thứ XIV",
    "link": "https://vbsp.org.vn/nhcsxh-chuc-mung-thanh-cong-dai-hoi-dai-bieu-phu-nu-toan-quoc-lan-thu-xiv.html",
    "image": "https://vbsp.org.vn/wp-content/uploads/2026/07/7_Jul_2026_172223_GMT_MG_8932-150x150.jpg",
    "summary": "(VBSP News) Sau thành công của Đại hội đại biểu phụ nữ toàn quốc lần thứ XIV, Đoàn NHCSXH Trung ương do Bí thư Đảng uỷ NHCSXHTW, Uỷ viên HĐQT, Tổng Giám đốc Nguyễn Thị Hằng đã đến thăm, chúc mừng các đồng chí Lãnh đạo Trung ương Hội LHPN Việt Nam tái đắc cử và chúc mừng Đại hội diễn ra thành công tốt đẹp. Uỷ viên BCH TW Đảng, Phó Chủ tịch Uỷ ban Trung ương MTTQ Việt Nam, Chủ tịch Hội LHPN Việt Nam Lê Thị Thuỷ và Phó Chủ tịch Thường trực Hội LHPN Việt Nam Trần Lan Phương tiếp đoàn.",
    "date": "Tháng 10/2026",
    "badge": "Tin nổi bật",
    "category": "noi-bat",
    "views": 2605
  },
  {
    "id": "nb-18",
    "title": "Chính sách tiền tệ linh hoạt, chủ động, đóng góp vào tăng trưởng chung của nền kinh tế",
    "link": "https://vbsp.org.vn/chinh-sach-tien-te-linh-hoat-chu-dong-dong-gop-vao-tang-truong-chung-cua-nen-kinh-te.html",
    "image": "https://vbsp.org.vn/wp-content/uploads/2026/07/z8001902068011-dabb09be122ab1339ca6510888225c2020260703083913-150x150.jpg",
    "summary": "(VBSP News) Sáng 3/7, Ngân hàng Nhà nước Việt Nam (NHNN) tổ chức Hội nghị sơ kết hoạt động ngân hàng 6 tháng đầu năm và triển khai nhiệm vụ 6 tháng cuối năm 2026. Đồng chí Phạm Đức Ấn - Ủy viên Ban Chấp hành Trung ương Đảng, Thống đốc NHNN chủ trì Hội nghị. Cùng dự có các đồng chí trong Ban lãnh đạo NHNN, Ủy viên Ban Thường vụ Đảng ủy NHNN, lãnh đạo các vụ, cục, đơn vị thuộc NHNN, lãnh đạo các TCTD trong toàn hệ thống.",
    "date": "Tháng 10/2026",
    "badge": "Tin nổi bật",
    "category": "noi-bat",
    "views": 2501
  },
  {
    "id": "nb-19",
    "title": "Công bố Quyết định bổ nhiệm Ủy viên Hội đồng quản trị, Tổng Giám đốc Ngân hàng Chính sách xã hội",
    "link": "https://vbsp.org.vn/cong-bo-quyet-dinh-bo-nhiem-uy-vien-hoi-dong-quan-tri-tong-giam-doc-ngan-hang-chinh-sach-xa-hoi.html",
    "image": "https://vbsp.org.vn/wp-content/uploads/2026/06/15-150x150.jpg",
    "summary": "(VBSP News) Sáng 30/6, tại Hà Nội, Ngân hàng Chính sách xã hội (NHCSXH) tổ chức Lễ công bố và trao Quyết định của Thủ tướng Chính phủ bổ nhiệm đồng chí Nguyễn Thị Hằng - Phó Tổng Giám đốc giữ chức Ủy viên Hội đồng quản trị, Tổng Giám đốc NHCSXH. Đồng chí Phạm Đức Ấn - Ủy viên BCH Trung ương Đảng, Bí thư Đảng ủy, Thống đốc Ngân hàng Nhà nước Việt Nam, Chủ tịch HĐQT NHCSXH tới dự, chủ trì và trao Quyết định.",
    "date": "Tháng 10/2026",
    "badge": "Tin nổi bật",
    "category": "noi-bat",
    "views": 4452
  },
  {
    "id": "nb-20",
    "title": "Vững nền tảng, tăng tốc thực hiện mục tiêu an sinh xã hội năm 2026",
    "link": "https://vbsp.org.vn/vung-nen-tang-tang-toc-thuc-hien-muc-tieu-an-sinh-xa-hoi-nam-2026.html",
    "image": "https://vbsp.org.vn/wp-content/uploads/2026/06/10.1-150x150.jpg",
    "summary": "(VBSP News) Ngày 29/6, NHCSXH tổ chức Hội nghị sơ kết 6 tháng đầu năm, triển khai nhiệm vụ những tháng tiếp theo năm 2026. Bí thư Đảng ủy NHCSXHTW, Uỷ viên HĐQT, Tổng Giám đốc Dương Quyết Thắng chủ trì hội nghị.",
    "date": "Tháng 10/2026",
    "badge": "Tin nổi bật",
    "category": "noi-bat",
    "views": 3443
  }
],
  news_moi_cap_nhat: [
  {
    "id": "mn-1",
    "title": "NHCSXH triển khai dịch vụ Mobile Banking đối với khách hàng là hộ kinh doanh",
    "link": "https://vbsp.org.vn/nhcsxh-trien-khai-dich-vu-mobile-banking-doi-voi-khach-hang-la-ho-kinh-doanh.html",
    "image": "https://vbsp.org.vn/wp-content/uploads/2026/10/4a-150x150.jpg",
    "summary": "(VBSP News) Nhằm tiếp tục gia tăng các tiện ích dịch vụ cung ứng đến khách hàng, NHCSXH triển khai các dịch vụ ngân hàng điện tử đến với khách hàng là hộ kinh doanh trên ứng dụng VBSP SmartBanking. NHCSXH đã sửa đổi, bổ sung, cập nhật và thông tin đến khách hàng Hộ kinh doanh các bước hướng dẫn sử dụng trên ứng dụng VBSP SmartBanking.",
    "date": "Tháng 10/2026",
    "badge": "Tin mới cập nhật",
    "category": "moi-nhat",
    "views": 3082
  },
  {
    "id": "mn-2",
    "title": "Nguồn vốn ưu đãi tạo động lực phát triển sản xuất nông nghiệp ở Bát Tràng",
    "link": "https://vbsp.org.vn/nguon-von-uu-dai-tao-dong-luc-phat-trien-san-xuat-nong-nghiep-o-bat-trang.html",
    "image": "https://vbsp.org.vn/wp-content/uploads/2026/10/ha-noi-150x150.jpg",
    "summary": "(VBSP News) Những nguồn vốn tín dụng ưu đãi từ NHCSXH và Quỹ Hỗ trợ nông dân các cấp đã và đang “tiếp sức” cho hàng nghìn hộ hội viên nông dân xã Bát Tràng (Hà Nội) vươn lên làm giàu trên mảnh đất quê hương",
    "date": "Tháng 10/2026",
    "badge": "Tin mới cập nhật",
    "category": "moi-nhat",
    "views": 1896
  },
  {
    "id": "mn-3",
    "title": "Lào Cai “dân vận khéo” đưa an toàn số đến với đồng bào vùng cao",
    "link": "https://vbsp.org.vn/lao-cai-dan-van-kheo-dua-an-toan-so-den-voi-dong-bao-vung-cao.html",
    "image": "https://vbsp.org.vn/wp-content/uploads/2026/10/l-cai-150x150.jpg",
    "summary": "(VBSP News) Không chỉ đưa nguồn vốn ưu đãi đến với hộ nghèo và các đối tượng chính sách, chi nhánh NHCSXH tỉnh Lào Cai còn đang đưa kiến thức số đến từng thôn, bản. Bằng cách làm gần dân, sát dân, tận tình hướng dẫn, phong trào thi đua “Dân vận khéo” gắn với chuyển đổi số đang tạo những chuyển biến thiết thực, giúp đồng bào dân tộc thiểu số từng bước làm chủ công nghệ, tự bảo vệ mình trên không gian mạng.",
    "date": "Tháng 10/2026",
    "badge": "Tin mới cập nhật",
    "category": "moi-nhat",
    "views": 1352
  },
  {
    "id": "mn-4",
    "title": "HĐQT NHCSXH làm việc tại tỉnh An Giang",
    "link": "https://vbsp.org.vn/hdqt-nhcsxh-lam-viec-tai-tinh-an-giang.html",
    "image": "https://vbsp.org.vn/wp-content/uploads/2026/10/1791946517101_7952109928694689641_7952109928694689641_1600c8ab7fee7a209216d55c7d75e69c-150x150.jpg",
    "summary": "(VBSP News) Đoàn kiểm tra, giám sát của HĐQT NHCSXH do ông Y Vinh Tơr - Thứ trưởng Bộ Dân tộc và Tôn giáo, Ủy viên HĐQT NHCSXH làm Trưởng đoàn đã có buổi làm việc với Ban đại diện HĐQT NHCSXH tỉnh An Giang để đánh giá kết quả hoạt động năm 2025 và 9 tháng năm 2026. Cùng tham dự buổi làm việc có Phó Chủ tịch UBND tỉnh kiêm Trưởng Ban đại diện HĐQT NHCSXH tỉnh An Giang Lê Văn Phước và Phó Tổng Giám đốc NHCSXH Vương Văn Minh.",
    "date": "Tháng 10/2026",
    "badge": "Tin mới cập nhật",
    "category": "moi-nhat",
    "views": 3101
  },
  {
    "id": "mn-5",
    "title": "Vốn vay chính sách mở cơ hội lập nghiệp cho nhiều bạn trẻ",
    "link": "https://vbsp.org.vn/von-vay-chinh-sach-mo-co-hoi-lap-nghiep-cho-nhieu-ban-tre.html",
    "image": "https://vbsp.org.vn/wp-content/uploads/2026/10/21-150x150.jpg",
    "summary": "(VBSP News) Sau tiếng trống khai giảng mỗi năm học mới là nỗi lo về chi phí học tập vượt quá khả năng của nhiều gia đình có hoàn cảnh khó khăn tại tỉnh Hưng Yên. Để tháo gỡ rào cản về tài chính, thực hiện Quyết định số 157/2007/QĐ-TTg của Thủ tướng Chính phủ, thời gian qua, chi nhánh NHCSXH tỉnh Hưng Yên đã thực hiện hiệu quả chương trình tín dụng ưu đãi dành cho HSSV; qua đó mở cơ hội lập thân, lập nghiệp cho hàng nghìn HSSV nghèo.",
    "date": "Tháng 10/2026",
    "badge": "Tin mới cập nhật",
    "category": "moi-nhat",
    "views": 1299
  },
  {
    "id": "mn-6",
    "title": "NHCSXH chúc mừng 96 năm ngày thành lập Hội Nông dân Việt Nam",
    "link": "https://vbsp.org.vn/nhcsxh-chuc-mung-96-nam-ngay-thanh-lap-hoi-nong-dan-viet-nam.html",
    "image": "https://vbsp.org.vn/wp-content/uploads/2026/10/19-150x150.jpg",
    "summary": "(VBSP News) Nhân dịp kỉ niệm 96 năm ngày thành lập Hội Nông dân Việt Nam (14/10/1930 - 14/10/2026), Phó Tổng Giám đốc NHCSXH Huỳnh Văn Thuận cùng đại diện các Ban CMNV tại Hội sở chính đã đến tặng hoa và chúc mừng Trung ương Hội Nông dân Việt Nam. Tiếp đón đoàn có Phó Chủ tịch Thường trực BCH Trung ương Hội Nông dân Việt Nam Phan Như Nguyện.",
    "date": "Tháng 10/2026",
    "badge": "Tin mới cập nhật",
    "category": "moi-nhat",
    "views": 2702
  },
  {
    "id": "mn-7",
    "title": "Hơn 11.100 lượt phụ nữ Đồng Tháp được tư vấn vay vốn",
    "link": "https://vbsp.org.vn/hon-11-100-luot-phu-nu-dong-thap-duoc-tu-van-vay-von.html",
    "image": "https://vbsp.org.vn/wp-content/uploads/2026/10/162201-dong-thap-phu-nu-luong-hoa-lac-phat-trien-kinh-te-tu-nguon-von-ho-tro-150x150.jpg",
    "summary": "(VBSP News) Từ nguồn vốn vay NHCSXH, Hội LHPN tỉnh Đồng Tháp đã kết nối và hỗ trợ phụ nữ trên địa bàn tiếp cận vốn ưu đãi để phát triển kinh tế, nâng cao thu nhập.",
    "date": "Tháng 10/2026",
    "badge": "Tin mới cập nhật",
    "category": "moi-nhat",
    "views": 1225
  },
  {
    "id": "mn-8",
    "title": "HĐQT NHCSXH làm việc tại tỉnh Đắk Lắk",
    "link": "https://vbsp.org.vn/hdqt-nhcsxh-lam-viec-tai-tinh-dak-lak.html",
    "image": "https://vbsp.org.vn/wp-content/uploads/2026/10/hdqt-1-150x150.jpg",
    "summary": "(VBSP News) Đoàn công tác của HĐQT NHCSXH do Chủ tịch Hội Liên hiệp Phụ nữ Việt Nam (LHPNVN) Lê Thị Thủy - Thành viên HĐQT NHCSXH làm Trưởng đoàn vừa có buổi làm việc với Ban đại diện HĐQT NHCSXH tỉnh Đắk Lắk nhằm kiểm tra, giám sát hoạt động tín dụng chính sách trên địa bàn tỉnh. Cùng tham dự buổi làm việc có Phó Chủ tịch UBND tỉnh kiêm Trưởng Ban đại diện HĐQT NHCSXH tỉnh Đắk Lắk Y Nhuân Byă và Phó Tổng Giám đốc NHCSXH Huỳnh Văn Thuận.",
    "date": "Tháng 10/2026",
    "badge": "Tin mới cập nhật",
    "category": "moi-nhat",
    "views": 3455
  },
  {
    "id": "mn-9",
    "title": "Giữ “dòng chảy” mạch vốn tín dụng chính sách ở Tuy Phước",
    "link": "https://vbsp.org.vn/giu-dong-chay-mach-von-tin-dung-chinh-sach-o-tuy-phuoc.html",
    "image": "https://vbsp.org.vn/wp-content/uploads/2026/10/nhcsxh-tuy-phuoc-tich-cuc-cho-vay-von-tai-mang-luoi-diem-giao-dich-xa-9922_11zon-150x150.jpg",
    "summary": "(VBSP News) Dòng vốn tín dụng chính sách đã và đang hỗ trợ cuộc sống cho người dân vùng đồng bằng duyên hải Tuy Phước (Gia Lai), góp phần quan trọng trong công cuộc giảm nghèo bền vững địa phương.",
    "date": "Tháng 10/2026",
    "badge": "Tin mới cập nhật",
    "category": "moi-nhat",
    "views": 3373
  },
  {
    "id": "mn-10",
    "title": "Hơn 41.000 lượt khách hàng ở Tuyên Quang được vay vốn chính sách",
    "link": "https://vbsp.org.vn/hon-41-000-luot-khach-hang-o-tuyen-quang-duoc-vay-von-chinh-sach.html",
    "image": "https://vbsp.org.vn/wp-content/uploads/2026/10/tuyen-quang-1-150x150.jpg",
    "summary": "(VBSP News) Sáng 12/10, chi nhánh NHCSXH tỉnh Tuyên Quang tổ chức Hội nghị giao ban hoạt động ủy thác giữa NHCSXH và các tổ chức chính trị - xã hội cấp tỉnh, đánh giá kết quả hoạt động ủy thác quý III, triển khai nhiệm vụ quý IV năm 2026.",
    "date": "Tháng 10/2026",
    "badge": "Tin mới cập nhật",
    "category": "moi-nhat",
    "views": 3255
  },
  {
    "id": "mn-11",
    "title": "Kiểm tra, giám sát hoạt động tín dụng chính sách xã hội tại chi nhánh NHCSXH tỉnh Hưng Yên",
    "link": "https://vbsp.org.vn/kiem-tra-giam-sat-hoat-dong-tin-dung-chinh-sach-xa-hoi-tai-chi-nhanh-nhcsxh-tinh-hung-yen.html",
    "image": "https://vbsp.org.vn/wp-content/uploads/2026/10/hung-yen-150x150.jpg",
    "summary": "(VBSP News) Đoàn công tác của HĐQT NHCSXH do Thứ trưởng Bộ Nội vụ Nguyễn Mạnh Khương - Thành viên HĐQT NHCSXH làm Trưởng đoàn đã có buổi làm việc với chi nhánh NHCSXH tỉnh Hưng Yên nhằm đánh giá hoạt động tín dụng chính sách xã hội trên địa bàn tỉnh. Cùng tham dự buổi làm việc có Phó Chủ tịch Thường trực UBND tỉnh kiêm Trưởng Ban đại diện HĐQT NHCSXH tỉnh Hưng Yên Nguyễn Lê Huy, Giám đốc Sở Nội vụ tỉnh Đào Hồng Vận và Phó Tổng Giám đốc NHCSXH Nguyễn Đức Hải.",
    "date": "Tháng 10/2026",
    "badge": "Tin mới cập nhật",
    "category": "moi-nhat",
    "views": 1577
  },
  {
    "id": "mn-12",
    "title": "Hiệu quả tín dụng chính sách ở TP Hồ Chí Minh",
    "link": "https://vbsp.org.vn/hieu-qua-tin-dung-chinh-sach-o-tp-ho-chi-minh.html",
    "image": "https://vbsp.org.vn/wp-content/uploads/2026/10/asa-150x150.jpg",
    "summary": "(VBSP News) Các chương trình tín dụng chính sách đã đáp ứng nhu cầu vốn phục vụ sản xuất, kinh doanh, dịch vụ của người nghèo, người lao động và các đối tượng chính sách khác, góp phần tích cực phát triển kinh tế và bảo đảm an sinh xã hội trên địa bàn TP Hồ Chí Minh.",
    "date": "Tháng 10/2026",
    "badge": "Tin mới cập nhật",
    "category": "moi-nhat",
    "views": 2988
  },
  {
    "id": "mn-13",
    "title": "Phòng giao dịch NHCSXH Quang Bình tư vấn hỗ trợ người chấp hành xong án phạt tù",
    "link": "https://vbsp.org.vn/phong-giao-dich-nhcsxh-quang-binh-tu-van-ho-tro-nguoi-chap-hanh-xong-an-phat-tu.html",
    "image": "https://vbsp.org.vn/wp-content/uploads/2026/10/e1dda5d1d54b4ca1a7cfd7d774b968d9-150x150.jpg",
    "summary": "(VBSP News) Phòng giao dịch NHCSXH Quang Bình (Tuyên Quang) vừa tham dự Hội nghị hỗ trợ tâm lý, hỗ trợ thủ tục pháp lý, tư vấn đào tạo nghề, giới thiệu việc làm cho người chấp hành xong án phạt tù năm 2026, do Công an tỉnh Tuyên Quang phối hợp với các đơn vị liên quan tổ chức thực hiện.",
    "date": "Tháng 10/2026",
    "badge": "Tin mới cập nhật",
    "category": "moi-nhat",
    "views": 2164
  },
  {
    "id": "mn-14",
    "title": "Trạm hy vọng mở lối tái hòa nhập cho người sau cai nghiện và chấp hành án tù",
    "link": "https://vbsp.org.vn/tram-hy-vong-mo-loi-tai-hoa-nhap-cho-nguoi-sau-cai-nghien-va-chap-hanh-an-tu.html",
    "image": "https://vbsp.org.vn/wp-content/uploads/2026/10/sada-150x150.jpg",
    "summary": "(VBSP News) Công an xã Thuận Nam (Khánh Hòa) tổ chức sinh hoạt, tư vấn, hỗ trợ người sau cai nghiện ma túy và người chấp hành xong án tù trở về địa phương. Bên cạnh đó, mô hình “Trạm hy vọng” được triển khai để hỗ trợ người sau cai nghiện, chấp hành xong án tù.",
    "date": "Tháng 10/2026",
    "badge": "Tin mới cập nhật",
    "category": "moi-nhat",
    "views": 1285
  },
  {
    "id": "mn-15",
    "title": "Gửi tiết kiệm, tiếp thêm nguồn vốn cho người nghèo",
    "link": "https://vbsp.org.vn/gui-tiet-kiem-tiep-them-nguon-von-cho-nguoi-ngheo.html",
    "image": "https://vbsp.org.vn/wp-content/uploads/2026/10/qtri-150x150.jpg",
    "summary": "(VBSP News) Tại Quảng Trị, phong trào “Gửi tiền tiết kiệm chung tay vì người nghèo và các đối tượng chính sách” đang tạo sức lan tỏa, đưa những nguồn tiền nhàn rỗi trong xã hội trở thành nguồn vốn hỗ trợ sinh kế, tạo việc làm và góp phần thực hiện mục tiêu giảm nghèo bền vững.",
    "date": "Tháng 10/2026",
    "badge": "Tin mới cập nhật",
    "category": "moi-nhat",
    "views": 1579
  },
  {
    "id": "mn-16",
    "title": "Tín dụng chính sách xã hội - Sinh kế từ cơ sở",
    "link": "https://vbsp.org.vn/tin-dung-chinh-sach-xa%cc%83-ho%cc%a3i-sinh-ke-tu-co-so.html",
    "image": "https://vbsp.org.vn/wp-content/uploads/2026/10/trang6jpg1790755214-150x150.jpg",
    "summary": "(VBSP News) Không chỉ đưa vốn đến đúng người, tín dụng chính sách xã hội trên địa bàn tỉnh Vĩnh Long đang được tổ chức theo cách để đồng vốn có thể chuyển thành sinh kế, việc làm và thu nhập.",
    "date": "Tháng 10/2026",
    "badge": "Tin mới cập nhật",
    "category": "moi-nhat",
    "views": 3402
  },
  {
    "id": "mn-17",
    "title": "Từ vốn vay chính sách đến cơ hội tự lập",
    "link": "https://vbsp.org.vn/tu-von-vay-chinh-sach-den-co-hoi-tu-lap.html",
    "image": "https://vbsp.org.vn/wp-content/uploads/2026/10/das-150x150.jpg",
    "summary": "(VBSP News) Khoản vay chính sách có thể bắt đầu từ học phí và chi phí sinh hoạt, nhưng đích đến không chỉ là giúp người trẻ hoàn thành việc học, mà còn tạo điều kiện để họ có việc làm, tạo thu nhập và từng bước tự chủ.",
    "date": "Tháng 10/2026",
    "badge": "Tin mới cập nhật",
    "category": "moi-nhat",
    "views": 1361
  },
  {
    "id": "mn-18",
    "title": "Hành trình thoát nghèo từ khoản vay 3 triệu đồng",
    "link": "https://vbsp.org.vn/hanh-trinh-thoat-ngheo-tu-khoan-vay-3-trieu-dong.html",
    "image": "https://vbsp.org.vn/wp-content/uploads/2026/10/ban-huou-150x150.jpg",
    "summary": "(VBSP News) Từ một hộ nghèo gần như không có vốn sản xuất, ông Vũ Trí Long ở xóm 18, xã Đồng Hỷ (Thái Nguyên) đã bắt đầu hành trình thoát nghèo bằng khoản vay 3 triệu đồng để mua một cặp bò. Hơn 20 năm sau, gia đình ông có mô hình nuôi hươu cho doanh thu hàng trăm triệu đồng mỗi năm.",
    "date": "Tháng 10/2026",
    "badge": "Tin mới cập nhật",
    "category": "moi-nhat",
    "views": 2427
  },
  {
    "id": "mn-19",
    "title": "Cuộc hành trình của tín dụng chính sách ở một vùng đồng bằng tỉnh Nghệ An",
    "link": "https://vbsp.org.vn/cuoc-hanh-trinh-cua-tin-dung-chinh-sach-o-mot-vung-dong-bang-tinh-nghe-an.html",
    "image": "https://vbsp.org.vn/wp-content/uploads/2026/10/11-150x150.jpg",
    "summary": "(VBSP News) Từ trung tâm vùng Bắc Trung Bộ, Giám đốc chi nhánh NHCSXH tỉnh Nghệ An Hoàng Xuân Thủy thông tin, nhân 24 năm ngày thành lập NHCSXH (04/10/2002 - 04/10/2026) Phòng giao dịch NHCSXH Đô Lương là đơn vị thứ 5 của Nghệ An đạt mốc tổng dư nợ trên 1.000 tỷ đồng với hơn 10.000 khách hàng còn dư nợ. Sự tăng trưởng lớn đó đã làm điểm tựa vững chắc bảo đảm an sinh xã hội, giúp người nghèo, các đối tượng chính sách vượt khó, cải thiện cuộc sống và hỗ trợ địa phương thực hiện tốt các chương trình, kế hoạch phát triển kinh tế, giảm nghèo nhanh, xây dựng nông thôn mới.",
    "date": "Tháng 10/2026",
    "badge": "Tin mới cập nhật",
    "category": "moi-nhat",
    "views": 2896
  },
  {
    "id": "mn-20",
    "title": "Tự hào người cán bộ “sen hồng”",
    "link": "https://vbsp.org.vn/tu-hao-nguoi-can-bo-sen-hong.html",
    "image": "https://vbsp.org.vn/wp-content/uploads/2026/10/ghep-150x150.jpg",
    "summary": "(VBSP News) Mỗi lần xuống cơ sở, tôi vẫn thường nghe người dân nói làm tín dụng chính sách là trách nhiệm cao cả, vì hạnh phúc người nghèo. Kỳ thực, sau nhiều năm công tác gắn bó với NHCSXH từ những ngày đầu thành lập, được gần gũi với hộ nghèo và đối tượng chính sách, tôi lại thấy những cán bộ “sen hồng” đáng yêu và gần gũi biết bao nhiêu.",
    "date": "Tháng 10/2026",
    "badge": "Tin mới cập nhật",
    "category": "moi-nhat",
    "views": 3224
  }
],

  // Danh mục phân loại tin tức
  news_categories: [
    { id: 'all', name: 'Tất cả tin tức', icon: 'fa-solid fa-newspaper' },
    { id: 'noi-bat', name: 'Tin nổi bật', icon: 'fa-solid fa-star' },
    { id: 'moi-nhat', name: 'Tin mới cập nhật', icon: 'fa-solid fa-bolt' },
    { id: 'chinh-sach', name: 'Tín dụng chính sách', icon: 'fa-solid fa-hand-holding-dollar' },
    { id: 'hoat-dong', name: 'Tin hoạt động NHCSXH', icon: 'fa-solid fa-bullhorn' },
    { id: 'chi-thi-40', name: 'Chỉ thị số 40 & 39-CT/TW', icon: 'fa-solid fa-flag' },
    { id: 'digital', name: 'Ngân hàng số', icon: 'fa-solid fa-mobile-screen-button' }
  ],

  // SLIDER HOME
  slider_home: [
    {
      id: 1,
      title: 'Tạo sinh kế cho bà con di dân tái định cư thuỷ điện (VTV1 - 5h30 - 13.10.2026)',
      url: 'https://vbsp.org.vn/tao-sinh-ke-cho-ba-con-di-dan-tai-dinh-cu-thuy-dien-vtv1-5h30-13-10-2026.html',
      image: 'https://vbsp.org.vn/wp-content/uploads/2026/10/cbs5d-394x208.png',
      badge: 'VTV1 Thời sự',
      date: '13/10/2026',
      tag: 'Điểm tin'
    },
    {
      id: 2,
      title: 'Phát động Tháng cao điểm “Vì người nghèo” năm 2026',
      url: 'https://vbsp.org.vn/phat-dong-thang-cao-diem-vi-nguoi-ngheo-nam-2026.html',
      image: 'https://vbsp.org.vn/wp-content/uploads/2026/10/image0043-394x208.jpg',
      badge: 'Vì người nghèo',
      date: '17/10/2026',
      tag: 'Sự kiện'
    },
    {
      id: 3,
      title: 'NHCSXH chúc mừng 96 năm thành lập Hội LHPN Việt Nam',
      url: 'https://vbsp.org.vn/nhcsxh-chuc-mung-96-nam-thanh-lap-hoi-lhpn-viet-nam.html',
      image: 'https://vbsp.org.vn/wp-content/uploads/2026/10/1WUpukr6fOszrhngDlBC0Kn5snUUwKyXri8HGExZiKJA7yx3ZOJyBKQhYJhH7mm7D0g-394x208.jpg',
      badge: 'Hội LHPN VN',
      date: '18/10/2026',
      tag: 'Đoàn thể'
    },
    {
      id: 4,
      title: 'Đổi mới phương thức lãnh đạo của Đảng, gắn trách nhiệm cá nhân với kết quả công việc',
      url: 'https://vbsp.org.vn/doi-moi-phuong-thuc-lanh-dao-cua-dang-gan-trach-nhiem-ca-nhan-voi-ket-qua-cong-viec.html',
      image: 'https://vbsp.org.vn/wp-content/uploads/2026/10/hoi-nghi-tw4-5500_11zon-394x208.jpg',
      badge: 'Công tác Đảng',
      date: '16/10/2026',
      tag: 'Chỉ đạo'
    },
    {
      id: 5,
      title: 'NHCSXH triển khai dịch vụ Mobile Banking đối với khách hàng là hộ kinh doanh',
      url: 'https://vbsp.org.vn/nhcsxh-trien-khai-dich-vu-mobile-banking-doi-voi-khach-hang-la-ho-kinh-doanh.html',
      image: 'https://vbsp.org.vn/wp-content/uploads/2026/10/4a-394x208.jpg',
      badge: 'Ngân hàng số',
      date: '15/10/2026',
      tag: 'Dịch vụ mới'
    }
  ],

  // 3. MULTIMEDIA DATA (Video, Photo, Podcast, Infographics - Theo mẫu ảnh 1)
  multimedia: [
    {
      id: 1,
      type: 'video',
      type_label: 'Video',
      icon: 'fa-solid fa-video',
      title: 'Giao lưu cùng nhân chứng lịch sử - Hành trình tín dụng an sinh xã hội',
      thumb: 'https://img.youtube.com/vi/y6ZU9zN0z6E/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=y6ZU9zN0z6E',
      date: '18/10/2026'
    },
    {
      id: 2,
      type: 'video',
      type_label: 'Video',
      icon: 'fa-solid fa-video',
      title: 'Hội nghị toàn quốc quán triệt, triển khai thực hiện NQ và Chiến lược phát triển NHCSXH',
      thumb: 'https://vbsp.org.vn/wp-content/uploads/2026/10/hoi-nghi-tw4-5500_11zon-394x208.jpg',
      url: 'https://vbsp.org.vn/doi-moi-phuong-thuc-lanh-dao-cua-dang-gan-trach-nhiem-ca-nhan-voi-ket-qua-cong-viec.html',
      date: '16/10/2026'
    },
    {
      id: 3,
      type: 'video',
      type_label: 'Video',
      icon: 'fa-solid fa-video',
      title: 'Truyền hình trực tiếp Chương trình nghệ thuật "Bản hùng ca vì an sinh - Khát vọng vươn lên"',
      thumb: 'https://vbsp.org.vn/wp-content/uploads/2026/10/image0043-394x208.jpg',
      url: 'https://vbsp.org.vn/phat-dong-thang-cao-diem-vi-nguoi-ngheo-nam-2026.html',
      date: '17/10/2026'
    },
    {
      id: 4,
      type: 'video',
      type_label: 'Video',
      icon: 'fa-solid fa-video',
      title: 'Kỷ niệm 20 năm đồng hành cùng người nghèo và các đối tượng chính sách',
      thumb: 'https://vbsp.org.vn/wp-content/uploads/2026/10/1WUpukr6fOszrhngDlBC0Kn5snUUwKyXri8HGExZiKJA7yx3ZOJyBKQhYJhH7mm7D0g-394x208.jpg',
      url: 'https://vbsp.org.vn/nhcsxh-chuc-mung-96-nam-thanh-lap-hoi-lhpn-viet-nam.html',
      date: '15/10/2026'
    },
    {
      id: 5,
      type: 'video',
      type_label: 'Video',
      icon: 'fa-solid fa-video',
      title: 'Phim tài liệu VTV1: Tạo sinh kế cho bà con di dân tái định cư thuỷ điện',
      thumb: 'https://vbsp.org.vn/wp-content/uploads/2026/10/cbs5d-394x208.png',
      url: 'https://vbsp.org.vn/tao-sinh-ke-cho-ba-con-di-dan-tai-dinh-cu-thuy-dien-vtv1-5h30-13-10-2026.html',
      date: '13/10/2026',
      featured: true
    },
    {
      id: 6,
      type: 'photo',
      type_label: 'Photos',
      icon: 'fa-regular fa-image',
      title: 'Khám phá nét đẹp các Điểm giao dịch xã vùng cao Mường Lát - Quan Hóa',
      thumb: 'https://storage-vnportal.vnpt.vn/gov-tha/7364/thu vien anh/1.jpg',
      url: '#',
      date: '12/10/2026'
    },
    {
      id: 7,
      type: 'photo',
      type_label: 'Photos',
      icon: 'fa-regular fa-image',
      title: 'Chùm ảnh: Cán bộ ngân hàng vượt sông suối mang nguồn vốn chính sách về bản xa',
      thumb: 'https://storage-vnportal.vnpt.vn/gov-tha/7364/thu vien anh/1.1.jpg',
      url: '#',
      date: '10/10/2026'
    },
    {
      id: 8,
      type: 'video',
      type_label: 'Video',
      icon: 'fa-solid fa-video',
      title: 'Diễn văn chỉ đạo của Lãnh đạo Chính phủ tại Hội nghị triển khai nhiệm vụ NHCSXH',
      thumb: 'https://img.youtube.com/vi/d51Cbvvt58M/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=d51Cbvvt58M',
      date: '08/10/2026'
    },
    {
      id: 9,
      type: 'video',
      type_label: 'Video',
      icon: 'fa-solid fa-video',
      title: 'Phiên giao dịch cố định định kỳ hàng tháng phục vụ bà con nhân dân tại xã',
      thumb: 'https://vbsp.org.vn/wp-content/uploads/2026/10/4a-394x208.jpg',
      url: 'https://vbsp.org.vn/nhcsxh-trien-khai-dich-vu-mobile-banking-doi-voi-khach-hang-la-ho-kinh-doanh.html',
      date: '05/10/2026'
    },
    {
      id: 10,
      type: 'audio',
      type_label: 'Podcast',
      icon: 'fa-solid fa-podcast',
      title: 'Podcast Tập 12: Chuyện kể từ bản nghèo - Khi người phụ nữ Dao tự tin làm kinh tế',
      thumb: 'https://storage-vnportal.vnpt.vn/gov-tha/7364/thu vien anh/1.1.jpg',
      url: '#',
      date: '03/10/2026'
    },
    {
      id: 11,
      type: 'infographic',
      type_label: 'Infographics',
      icon: 'fa-solid fa-chart-pie',
      title: 'Infographic: Toàn cảnh tăng trưởng dư nợ và hiệu quả xã hội của NHCSXH giai đoạn 2020-2026',
      thumb: 'https://storage-vnportal.vnpt.vn/gov-tha/7364/thu vien anh/1.jpg',
      url: '#',
      date: '01/10/2026'
    }
  ],

  // 4. VĂN BẢN CHỈ ĐẠO ĐIỀU HÀNH (Đầy đủ theo phân loại cơ quan ban hành)
  steering_docs: [
    {
      code: '9734/CĐ-NHCS',
      agency_id: 'tgd',
      agency_name: 'Tổng Giám đốc NHCSXH',
      title: 'Công điện về việc khẩn trương hỗ trợ khắc phục hậu quả bão lũ thiên tai, khôi phục sản xuất kinh doanh',
      date: '18/10/2026',
      file: '9734_CD_NHCS.pdf'
    },
    {
      code: '9349/CĐ-NHCS',
      agency_id: 'hdqt',
      agency_name: 'Hội đồng Quản trị NHCSXH',
      title: 'Hướng dẫn rà soát, tổng hợp nhu cầu vay vốn các chương trình tín dụng chính sách năm 2027',
      date: '14/10/2026',
      file: '9349_CD_NHCS.pdf'
    },
    {
      code: '1990/QĐ-TTg',
      agency_id: 'chinhphu',
      agency_name: 'Thủ tướng Chính phủ',
      title: 'Quyết định phê duyệt Chiến lược phát triển Ngân hàng Chính sách xã hội giai đoạn đến năm 2030',
      date: '05/10/2026',
      file: '1990_QD_TTg.pdf'
    },
    {
      code: '15/QĐ-HĐQT',
      agency_id: 'hdqt',
      agency_name: 'HĐQT NHCSXH',
      title: 'Ban hành Quy chế về tổ chức và hoạt động của Tổ tiết kiệm và vay vốn tại các thôn, ấp, bản, khu phố',
      date: '28/09/2026',
      file: '15_QD_HDQT.pdf'
    },
    {
      code: '120-KL/TW',
      agency_id: 'dang',
      agency_name: 'Ban Bí thư TW Đảng',
      title: 'Kết luận của Ban Bí thư về tiếp tục thực hiện Chỉ thị 40-CT/TW về tăng cường sự lãnh đạo của Đảng đối với tín dụng chính sách xã hội',
      date: '15/09/2026',
      file: '120_KL_TW.pdf'
    },
    {
      code: '8866/HD-NHCS',
      agency_id: 'tgd',
      agency_name: 'Tổng Giám đốc NHCSXH',
      title: 'Hướng dẫn quy trình nghiệp vụ giải ngân vốn cho vay hỗ trợ tạo việc làm, duy trì và mở rộng việc làm',
      date: '10/09/2026',
      file: '8866_HD_NHCS.pdf'
    },
    {
      code: '14/2026/TT-NHNN',
      agency_id: 'nhnn',
      agency_name: 'Ngân hàng Nhà nước VN',
      title: 'Thông tư quy định về việc cung cấp dịch vụ thanh toán và quản lý an toàn hệ thống thông tin ngân hàng số',
      date: '02/09/2026',
      file: '14_2026_TT_NHNN.pdf'
    },
    {
      code: '05/CT-TTg',
      agency_id: 'chinhphu',
      agency_name: 'Thủ tướng Chính phủ',
      title: 'Chỉ thị về việc đẩy mạnh triển khai đồng bộ các chương trình tín dụng chính sách đối với đồng bào DTTS và miền núi',
      date: '20/08/2026',
      file: '05_CT_TTg.pdf'
    },
    {
      code: '39/2026/NĐ-CP',
      agency_id: 'chinhphu',
      agency_name: 'Chính phủ',
      title: 'Nghị định quy định về cơ chế quản lý tài chính và hiệu quả hoạt động đối với Ngân hàng Chính sách xã hội',
      date: '08/08/2026',
      file: '39_2026_ND_CP.pdf'
    },
    {
      code: '12/QĐ-HĐQT',
      agency_id: 'hdqt',
      agency_name: 'HĐQT NHCSXH',
      title: 'Quyết định nâng mức cho vay tối đa đối với chương trình tín dụng Nước sạch và Vệ sinh môi trường nông thôn lên 25 triệu đồng/công trình',
      date: '25/07/2026',
      file: '12_QD_HDQT.pdf'
    },
    {
      code: '8120/HD-NHCS',
      agency_id: 'tgd',
      agency_name: 'Tổng Giám đốc NHCSXH',
      title: 'Hướng dẫn triển khai gói tín dụng hỗ trợ học sinh sinh viên có hoàn cảnh khó khăn mua máy tính, thiết bị học tập năm học 2026 - 2027',
      date: '15/07/2026',
      file: '8120_HD_NHCS.pdf'
    },
    {
      code: '10/2026/TT-NHNN',
      agency_id: 'nhnn',
      agency_name: 'Ngân hàng Nhà nước VN',
      title: 'Thông tư hướng dẫn thủ tục tái cấp vốn đối với Ngân hàng Chính sách xã hội theo quy định của Luật Các tổ chức tín dụng',
      date: '30/06/2026',
      file: '10_2026_TT_NHNN.pdf'
    },
    {
      code: '08/CT-NHCS',
      agency_id: 'tgd',
      agency_name: 'Tổng Giám đốc NHCSXH',
      title: 'Chỉ thị về nâng cao chất lượng hoạt động ủy thác và đảm bảo tuyệt đối an toàn tiền, tài sản tại các Điểm giao dịch xã',
      date: '18/06/2026',
      file: '08_CT_NHCS.pdf'
    },
    {
      code: '40-CT/TW',
      agency_id: 'dang',
      agency_name: 'Ban Bí thư TW Đảng',
      title: 'Chỉ thị số 40-CT/TW của Ban Bí thư về tăng cường sự lãnh đạo của Đảng đối với tín dụng chính sách xã hội',
      date: '22/11/2014',
      file: '40_CT_TW.pdf'
    }
  ],

  // 4.5. LIÊN KẾT WEBSITE (Theo mẫu ảnh 3: 3x3 logos bên trái, chi tiết bên phải)
  partners: [
    {
      id: 'tap-chi-cong-san',
      name: 'Tạp chí Cộng sản',
      desc: 'Cơ quan lý luận và chính trị của Ban Chấp hành Trung ương Đảng Cộng sản Việt Nam, ngọn cờ tiên phong trong công tác tư tưởng, lý luận của Đảng.',
      address: 'Số 28 Bà Triệu, Phường Hàng Bài, Quận Hoàn Kiếm, TP. Hà Nội',
      website: 'https://tapchicongsan.org.vn'
    },
    {
      id: 'ngan-hang-nha-nuoc',
      name: 'Ngân hàng Nhà nước Việt Nam',
      desc: 'Ngân hàng Trung ương của nước Cộng hòa Xã hội Chủ nghĩa Việt Nam, thực hiện chức năng quản lý nhà nước về tiền tệ, hoạt động ngân hàng và ngoại hối.',
      address: 'Số 49 Lý Thái Tổ, Phường Tràng Tiền, Quận Hoàn Kiếm, TP. Hà Nội',
      website: 'https://sbv.gov.vn'
    },
    {
      id: 'apraca',
      name: 'Hiệp hội Tín dụng Nông nghiệp và Nông thôn khu vực Châu Á Thái Bình Dương',
      desc: 'Hiệp hội tín dụng nông nghiệp và nông thôn khu vực châu Á - Thái Bình Dương (Asia-Pacific Rural and Agricultural Credit Association). VBSP là thành viên tích cực, đóng góp nhiều sáng kiến tài chính vi mô bền vững.',
      address: 'Phòng 303, Tòa nhà BAAC, 2346 Đường Phahon Yothin, Senanikhom, Chatuchak, Bangkok 10900, Thái Lan',
      website: 'https://www.apraca.org'
    },
    {
      id: 'hoc-vien-ngan-hang',
      name: 'Học viện Ngân hàng',
      desc: 'Cơ sở giáo dục đại học công lập trọng điểm đào tạo nguồn nhân lực chất lượng cao trong lĩnh vực tài chính - ngân hàng và nghiên cứu khoa học ứng dụng.',
      address: 'Số 12 Chùa Bộc, Phường Quang Trung, Quận Đống Đa, TP. Hà Nội',
      website: 'https://hvnh.edu.vn'
    },
    {
      id: 'bao-phap-luat',
      name: 'Báo Pháp luật Việt Nam',
      desc: 'Cơ quan ngôn luận của Bộ Tư pháp, thực hiện nhiệm vụ tuyên truyền chủ trương, đường lối chính sách của Đảng, pháp luật của Nhà nước đến đông đảo người dân.',
      address: 'Số 42/29 Phố Nguyễn Chí Thanh, Phường Ngọc Khánh, Quận Ba Đình, TP. Hà Nội',
      website: 'https://baophapluat.vn'
    },
    {
      id: 'bao-dan-viet',
      name: 'Báo Dân Việt - Báo Nông thôn Ngày nay',
      desc: 'Cơ quan Trung ương của Hội Nông dân Việt Nam, tiếng nói của giai cấp nông dân và người lao động nông thôn, phản ánh sinh động các mô hình kinh tế giảm nghèo hiệu quả.',
      address: 'Tòa nhà Báo Nông Thôn Ngày Nay, Lô E2, Đường Dương Đình Nghệ, Quận Cầu Giấy, TP. Hà Nội',
      website: 'https://danviet.vn'
    },
    {
      id: 'bao-nhan-dan',
      name: 'Báo Nhân Dân',
      desc: 'Tiếng nói của Đảng, Nhà nước và Nhân dân Việt Nam, cơ quan báo chí trung ương hàng đầu tuyên truyền sâu rộng chính sách kinh tế - xã hội và giảm nghèo bền vững.',
      address: 'Số 71 Hàng Trống, Quận Hoàn Kiếm, TP. Hà Nội',
      website: 'https://nhandan.vn'
    },
    {
      id: 'cong-thong-tin-chinh-phu',
      name: 'Cổng Thông tin điện tử Chính phủ (VGP)',
      desc: 'Cơ quan thông tin, truyền thông đa phương tiện của Chính phủ, cầu nối trực tuyến thông tin chỉ đạo điều hành giữa Chính phủ với nhân dân và doanh nghiệp.',
      address: 'Số 16 Lê Hồng Phong, Quận Ba Đình, TP. Hà Nội',
      website: 'https://chinhphu.vn'
    },
    {
      id: 'bao-lao-dong',
      name: 'Báo Lao Động',
      desc: 'Cơ quan ngôn luận của Tổng Liên đoàn Lao động Việt Nam, tiếng nói bảo vệ quyền và lợi ích hợp pháp, chính đáng của đoàn viên, người lao động cả nước.',
      address: 'Số 6 Phạm Văn Bạch, Phường Yên Hòa, Quận Cầu Giấy, TP. Hà Nội',
      website: 'https://laodong.vn'
    }
  ],

  // 5. BIỂU LÃI SUẤT TỔNG HỢP (THEO MẪU ẢNH THIẾT KẾ MỚI)
  rates: {
    loans_card: [
      { program: 'Hộ nghèo, HSSV', rate: '6.24%', highlight: false },
      { program: 'Hộ cận nghèo', rate: '7.488%', highlight: true },
      { program: 'Nhà ở xã hội', rate: '5.4%', highlight: false }
    ],
    deposits_card: [
      { term: '01 tháng', rate: '2,6% / 3,2%', highlight: false },
      { term: '06→09 tháng', rate: '4,0% / 5,7%', highlight: true },
      { term: 'Từ 24 tháng', rate: '6,0% / 6,7%', highlight: false }
    ],
    savings: [
      { term: 'Không kỳ hạn', counter_rate: '0.20%/năm', online_rate: '0.20%/năm', note: 'Rút linh hoạt mọi lúc' },
      { term: '01 tháng', counter_rate: '2.60%/năm', online_rate: '3.20%/năm', note: 'Lãi trả cuối kỳ' },
      { term: '03 tháng', counter_rate: '3.00%/năm', online_rate: '3.50%/năm', note: 'Lãi trả cuối kỳ' },
      { term: '06→09 tháng', counter_rate: '4.00%/năm', online_rate: '5.70%/năm', note: 'Lãi suất cạnh tranh' },
      { term: '12 tháng', counter_rate: '5.20%/năm', online_rate: '5.80%/năm', note: 'Rút gốc từng phần' },
      { term: 'Từ 24 tháng', counter_rate: '6.00%/năm', online_rate: '6.70%/năm', note: 'Lãi suất cao nhất' }
    ],
    loans: [
      { program: 'Cho vay hộ nghèo, HSSV', rate: '6.24%/năm', period: 'Tối đa 120 tháng' },
      { program: 'Cho vay hộ cận nghèo', rate: '7.488%/năm', period: 'Tối đa 120 tháng' },
      { program: 'Nhà ở xã hội', rate: '5.40%/năm', period: 'Tối đa 25 năm' },
      { program: 'Giải quyết việc làm', rate: '6.60%/năm', period: 'Tối đa 120 tháng' },
      { program: 'Nước sạch & VSMT nông thôn', rate: '9.00%/năm', period: 'Tối đa 60 tháng' }
    ]
  },

  // 6. TRA CỨU ĐIỂM GIAO DỊCH: MÔ HÌNH 2 CẤP (34 TỈNH THÀNH -> PHÒNG GIAO DỊCH)
  locations: {
    provinces: [
      { id: 'HP', name: 'TP. Hải Phòng' },
      { id: 'HY', name: 'Hưng Yên' },
      { id: 'HN', name: 'TP. Hà Nội' },
      { id: 'NB', name: 'Ninh Bình' },
      { id: 'PT', name: 'Phú Thọ' },
      { id: 'BN', name: 'Bắc Ninh' },
      { id: 'LC', name: 'Lai Châu' },
      { id: 'SL', name: 'Sơn La' },
      { id: 'LCA', name: 'Lào Cai' },
      { id: 'TN', name: 'Thái Nguyên' },
      { id: 'LS', name: 'Lạng Sơn' },
      { id: 'TQ', name: 'Tuyên Quang' },
      { id: 'CB', name: 'Cao Bằng' },
      { id: 'QN', name: 'Quảng Ninh' },
      { id: 'TH', name: 'Thanh Hóa' },
      { id: 'NA', name: 'Nghệ An' },
      { id: 'HT', name: 'Hà Tĩnh' },
      { id: 'QT', name: 'Quảng Trị' },
      { id: 'HUE', name: 'TP. Huế' },
      { id: 'DN', name: 'TP. Đà Nẵng' },
      { id: 'QNG', name: 'Quảng Ngãi' },
      { id: 'GL', name: 'Gia Lai' },
      { id: 'DL', name: 'Đắk Lắk' },
      { id: 'KH', name: 'Khánh Hòa' },
      { id: 'LD', name: 'Lâm Đồng' },
      { id: 'HCM', name: 'TP. Hồ Chí Minh' },
      { id: 'DNA', name: 'Đồng Nai' },
      { id: 'VL', name: 'Vĩnh Long' },
      { id: 'CT', name: 'TP. Cần Thơ' },
      { id: 'TNI', name: 'Tây Ninh' },
      { id: 'AG', name: 'An Giang' },
      { id: 'DT', name: 'Đồng Tháp' },
      { id: 'CM', name: 'Cà Mau' },
      { id: 'DB', name: 'Điện Biên' }
    ],
    offices: {
      'TH': [
        { id: 'th-hs', name: 'Hội sở CN Thanh Hóa', address: 'Số 168 Triệu Quốc Đạt, P. Điện Biên, TP. Thanh Hóa', phone: '0237 3854 222', schedule: 'Ngày 06 và 20 hàng tháng' },
        { id: 'th-ht', name: 'Điểm giao dịch Hạc Thành', address: 'Nhà văn hóa phố Đồng Lễ, P. Hạc Thành, TP. Thanh Hóa', phone: '0237 3854 223', schedule: 'Ngày 06 hàng tháng (13h30-16h00)' },
        { id: 'th-hr', name: 'Điểm giao dịch Hàm Rồng', address: 'Trụ sở UB MTTQ P. Hàm Rồng, TP. Thanh Hóa', phone: '0237 3854 224', schedule: 'Ngày 08 hàng tháng (08h00-11h00)' },
        { id: 'th-ds', name: 'Điểm giao dịch Đông Sơn', address: 'Trung tâm DV Hành chính công P. Đông Sơn', phone: '0237 3854 225', schedule: 'Ngày 06 hàng tháng (08h00-11h00)' },
        { id: 'th-qp', name: 'Điểm giao dịch Quảng Phú', address: 'Trụ sở UB MTTQ P. Quảng Phú, TP. Thanh Hóa', phone: '0237 3854 226', schedule: 'Ngày 08 hàng tháng (13h30-16h00)' }
      ],
      'HN': [
        { id: 'hn-hs', name: 'Hội sở Chi nhánh TP. Hà Nội', address: 'Số 12 Chùa Bộc, Q. Đống Đa, TP. Hà Nội', phone: '024 3852 4680', schedule: 'Ngày 10 và 25 hàng tháng' },
        { id: 'hn-bd', name: 'Phòng giao dịch Ba Đình', address: 'Số 25 Liễu Giai, Q. Ba Đình, TP. Hà Nội', phone: '024 3762 1199', schedule: 'Ngày 12 hàng tháng tại các phường' },
        { id: 'hn-dd', name: 'Phòng giao dịch Đống Đa', address: 'Số 279 Tôn Đức Thắng, Q. Đống Đa, TP. Hà Nội', phone: '024 3511 8892', schedule: 'Ngày 14 hàng tháng tại các phường' },
        { id: 'hn-hm', name: 'Phòng giao dịch Hoàng Mai', address: 'Lô CC5B Bán đảo Linh Đàm, P. Hoàng Liệt, Q. Hoàng Mai', phone: '024 3634 2288', schedule: 'Ngày 16 hàng tháng tại các phường' },
        { id: 'hn-da', name: 'Phòng giao dịch Đông Anh', address: 'Tổ 4, Thị trấn Đông Anh, H. Đông Anh, TP. Hà Nội', phone: '024 3883 5566', schedule: 'Ngày 18 hàng tháng tại UBND các xã' },
        { id: 'hn-st', name: 'Phòng giao dịch Sơn Tây', address: 'Số 1 Phó Đức Chính, TX. Sơn Tây, TP. Hà Nội', phone: '024 3383 2345', schedule: 'Ngày 20 hàng tháng tại UBND các xã' },
        { id: 'hn-ss', name: 'Phòng giao dịch Sóc Sơn', address: 'Khu Đô thị Sóc Sơn, H. Sóc Sơn, TP. Hà Nội', phone: '024 3885 1234', schedule: 'Ngày 22 hàng tháng tại UBND các xã' },
        { id: 'hn-cm', name: 'Phòng giao dịch Chương Mỹ', address: 'Khu Hòa Sơn, TT. Chúc Sơn, H. Chương Mỹ, TP. Hà Nội', phone: '024 3386 6789', schedule: 'Ngày 24 hàng tháng tại UBND các xã' }
      ],
      'HCM': [
        { id: 'hcm-hs', name: 'Hội sở Chi nhánh TP. Hồ Chí Minh', address: 'Số 41-43 Bến Chương Dương, P. Nguyễn Thái Bình, Q. 1, TP. HCM', phone: '028 3821 5566', schedule: 'Ngày 10 và 25 hàng tháng' },
        { id: 'hcm-q1', name: 'Phòng giao dịch Quận 1', address: 'Số 115 Nguyễn Công Trứ, P. Nguyễn Thái Bình, Q. 1', phone: '028 3822 4488', schedule: 'Ngày 12 hàng tháng' },
        { id: 'hcm-td', name: 'Phòng giao dịch TP. Thủ Đức', address: 'Số 43 Nguyễn Văn Bá, P. Bình Thọ, TP. Thủ Đức', phone: '028 3722 0011', schedule: 'Ngày 15 hàng tháng tại các phường' },
        { id: 'hcm-bt', name: 'Phòng giao dịch Bình Thạnh', address: 'Số 12 Ung Văn Khiêm, P. 25, Q. Bình Thạnh', phone: '028 3512 3344', schedule: 'Ngày 17 hàng tháng' },
        { id: 'hcm-cc', name: 'Phòng giao dịch Củ Chi', address: 'Khu phố 7, Thị trấn Củ Chi, H. Củ Chi, TP. HCM', phone: '028 3892 0123', schedule: 'Ngày 19 hàng tháng tại UBND các xã' },
        { id: 'hcm-hm', name: 'Phòng giao dịch Hóc Môn', address: 'Số 2/1 Lý Thường Kiệt, TT. Hóc Môn, H. Hóc Môn', phone: '028 3710 4567', schedule: 'Ngày 21 hàng tháng tại UBND các xã' },
        { id: 'hcm-cg', name: 'Phòng giao dịch Cần Giờ', address: 'Đường Rừng Sác, TT. Cần Thạnh, H. Cần Giờ', phone: '028 3874 0122', schedule: 'Ngày 23 hàng tháng tại UBND các xã' },
        { id: 'hcm-bc', name: 'Phòng giao dịch Bình Chánh', address: 'Đường Tân Túc, TT. Tân Túc, H. Bình Chánh', phone: '028 3760 1234', schedule: 'Ngày 25 hàng tháng tại UBND các xã' }
      ],
      'HP': [
        { id: 'hp-hs', name: 'Hội sở Chi nhánh TP. Hải Phòng', address: 'Số 22 Trần Hưng Đạo, Q. Hồng Bàng, TP. Hải Phòng', phone: '0225 3842 119', schedule: 'Ngày 10 hàng tháng' },
        { id: 'hp-tn', name: 'Phòng giao dịch Thủy Nguyên', address: 'Thị trấn Núi Đèo, H. Thủy Nguyên', phone: '0225 3874 555', schedule: 'Ngày 15 hàng tháng tại UBND xã' },
        { id: 'hp-tl', name: 'Phòng giao dịch Tiên Lãng', address: 'Khu 2, TT. Tiên Lãng, H. Tiên Lãng', phone: '0225 3883 222', schedule: 'Ngày 18 hàng tháng tại UBND xã' },
        { id: 'hp-ad', name: 'Phòng giao dịch An Dương', address: 'Thị trấn An Dương, H. An Dương', phone: '0225 3871 333', schedule: 'Ngày 20 hàng tháng tại UBND xã' }
      ],
      'DN': [
        { id: 'dn-hs', name: 'Hội sở Chi nhánh TP. Đà Nẵng', address: 'Số 14 Pasteur, P. Hải Châu 1, Q. Hải Châu, TP. Đà Nẵng', phone: '0236 3822 556', schedule: 'Ngày 12 hàng tháng' },
        { id: 'dn-tk', name: 'Phòng giao dịch Thanh Khê', address: 'Số 384 Điện Biên Phủ, Q. Thanh Khê', phone: '0236 3756 888', schedule: 'Ngày 16 hàng tháng' },
        { id: 'dn-st', name: 'Phòng giao dịch Sơn Trà', address: 'Số 2 Đông Du, P. An Hải Bắc, Q. Sơn Trà', phone: '0236 3944 222', schedule: 'Ngày 18 hàng tháng' },
        { id: 'dn-hv', name: 'Phòng giao dịch Hòa Vang', address: 'Khu Trung tâm Hành chính H. Hòa Vang', phone: '0236 3784 111', schedule: 'Ngày 22 hàng tháng tại UBND xã' }
      ],
      'CT': [
        { id: 'ct-hs', name: 'Hội sở Chi nhánh TP. Cần Thơ', address: 'Số 18 Đại lộ Hòa Bình, Q. Ninh Kiều, TP. Cần Thơ', phone: '0292 3821 777', schedule: 'Ngày 10 hàng tháng' },
        { id: 'ct-cr', name: 'Phòng giao dịch Cái Răng', address: 'Số 149 Đường 3 Tháng 2, Q. Cái Răng', phone: '0292 3914 555', schedule: 'Ngày 15 hàng tháng' },
        { id: 'ct-bt', name: 'Phòng giao dịch Bình Thủy', address: 'Đường Cách Mạng Tháng Tám, Q. Bình Thủy', phone: '0292 3883 444', schedule: 'Ngày 18 hàng tháng' },
        { id: 'ct-pd', name: 'Phòng giao dịch Phong Điền', address: 'Ấp Nhơn Lộc, TT. Phong Điền, H. Phong Điền', phone: '0292 3894 222', schedule: 'Ngày 22 hàng tháng tại UBND xã' }
      ],
      'AG': [
        { id: 'ag-hs', name: 'Hội sở Chi nhánh tỉnh An Giang', address: 'Số 51 Nguyễn Huệ, P. Mỹ Long, TP. Long Xuyên, Tỉnh An Giang', phone: '0296 3841 888', schedule: 'Ngày 10 hàng tháng' },
        { id: 'ag-cd', name: 'Phòng giao dịch Châu Đốc', address: 'Số 12 Phan Đình Phùng, TP. Châu Đốc', phone: '0296 3866 555', schedule: 'Ngày 14 hàng tháng' },
        { id: 'ag-ts', name: 'Phòng giao dịch Thoại Sơn', address: 'Thị trấn Núi Sập, H. Thoại Sơn', phone: '0296 3879 222', schedule: 'Ngày 18 hàng tháng tại UBND xã' },
        { id: 'ag-tt', name: 'Phòng giao dịch Tri Tôn', address: 'Thị trấn Tri Tôn, H. Tri Tôn', phone: '0296 3874 111', schedule: 'Ngày 22 hàng tháng tại UBND xã' }
      ]
    },
    schedules: {
      default: {
        location: 'Hội trường UBND Xã / Phường',
        day: 'Ngày 15 hàng tháng',
        time: 'Buổi sáng: 07h30 - 11h30 | Buổi chiều: 13h30 - 17h00',
        officer: 'Nguyễn Văn Hùng - Cán bộ tín dụng theo dõi địa bàn',
        phone: '1900 638 586 - Nhánh 3',
        trustees: 'Hội Phụ nữ, Hội Nông dân, Đoàn Thanh niên, Hội Cựu chiến binh'
      }
    }
  },

  // 7. DỮ LIỆU TIN TỨC CHUYÊN ĐỀ ĐẶC SẮC (4 KHỐI YÊU CẦU TRANG CHỦ)
  news_hoat_dong: [
    {
      id: 'hd-1',
      title: 'Tạo sinh kế cho bà con di dân tái định cư thuỷ điện (VTV1 - 5h30 - 13.10.2026)',
      link: 'https://vbsp.org.vn/tao-sinh-ke-cho-ba-con-di-dan-tai-dinh-cu-thuy-dien-vtv1-5h30-13-10-2026.html',
      image: 'https://vbsp.org.vn/wp-content/uploads/2026/10/cbs5d-394x208.png',
      summary: 'Chương trình Thời sự VTV1 phản ánh hiệu quả nguồn vốn vay ưu đãi của NHCSXH giúp hàng trăm hộ di dân vùng lòng hồ thủy điện Bản Vẽ ổn định nơi ở mới, phát triển kinh tế bền vững.',
      date: '13/10/2026',
      badge: 'VTV1 Thời sự',
      category: 'hoat-dong',
      views: 3820,
      lead: true
    },
    {
      id: 'hd-2',
      title: 'NHCSXH đẩy mạnh giải ngân các chương trình tín dụng chính sách quý IV/2026',
      link: 'https://vbsp.org.vn/tin-moi-cap-nhat',
      image: 'https://vbsp.org.vn/wp-content/uploads/2026/10/hoi-nghi-tw4-5500_11zon-394x208.jpg',
      summary: 'Toàn hệ thống tập trung dồn nguồn lực đáp ứng 100% nhu cầu vay vốn hợp pháp của hộ nghèo và các đối tượng chính sách phục vụ sản xuất vụ đông xuân và chuẩn bị Tết.',
      date: '18/10/2026',
      badge: 'Chỉ đạo điều hành',
      category: 'hoat-dong',
      views: 3120
    },
    {
      id: 'hd-3',
      title: 'Hiệu quả mô hình Tổ Tiết kiệm và Vay vốn gắn với chuyển đổi số tại nông thôn mới',
      link: 'https://vbsp.org.vn/tin-moi-cap-nhat',
      image: 'https://vbsp.org.vn/wp-content/uploads/2026/10/4a-394x208.jpg',
      summary: 'Mô hình chuyển đổi số trong thu lãi, gửi tiết kiệm tại gần 170.000 Tổ TK&VV mang lại sự thuận tiện vượt bậc, giảm bớt thủ tục giấy tờ cho người dân vùng sâu vùng xa.',
      date: '16/10/2026',
      badge: 'Chuyển đổi số',
      category: 'hoat-dong',
      views: 2890
    },
    {
      id: 'hd-4',
      title: 'Mạng lưới gần 10.000 Điểm giao dịch xã phục vụ an toàn, chu đáo hơn 6,8 triệu lượt khách hàng',
      link: 'https://vbsp.org.vn/tin-moi-cap-nhat',
      image: 'https://vbsp.org.vn/wp-content/uploads/2026/09/daa.jpg',
      summary: 'Phương thức phục vụ tại xã - nét đặc thù chỉ có ở NHCSXH đã đưa ngân hàng đến tận nhà, phục vụ tại chỗ với chi phí tối thiểu cho bà con nhân dân.',
      date: '14/10/2026',
      badge: 'Mạng lưới phục vụ',
      category: 'hoat-dong',
      views: 4150
    }
  ],

  news_dang_uy: [
    {
      id: 'dang-1',
      title: 'Đổi mới phương thức lãnh đạo của Đảng, gắn trách nhiệm cá nhân với kết quả công việc',
      link: 'https://vbsp.org.vn/doi-moi-phuong-thuc-lanh-dao-cua-dang-gan-trach-nhiem-ca-nhan-voi-ket-qua-cong-viec.html',
      image: 'https://vbsp.org.vn/wp-content/uploads/2026/10/hoi-nghi-tw4-5500_11zon-394x208.jpg',
      summary: 'Đảng bộ NHCSXH Trung ương quán triệt sâu sắc các Nghị quyết Hội nghị TW, đề cao tinh thần trách nhiệm nêu gương của người đứng đầu, đưa tín dụng chính sách trở thành công cụ đắc lực thực hiện mục tiêu giảm nghèo của Đảng.',
      date: '16/10/2026',
      badge: 'Công tác Đảng',
      category: 'cong-tac-dang',
      views: 3650,
      lead: true
    },
    {
      id: 'dang-2',
      title: 'Đảng ủy NHCSXH Trung ương: Nâng cao năng lực lãnh đạo và sức chiến đấu của tổ chức cơ sở Đảng',
      link: 'https://vbsp.org.vn/tin-moi-cap-nhat',
      image: 'https://vbsp.org.vn/wp-content/uploads/2026/10/1WUpukr6fOszrhngDlBC0Kn5snUUwKyXri8HGExZiKJA7yx3ZOJyBKQhYJhH7mm7D0g-394x208.jpg',
      summary: 'Tập trung xây dựng Đảng bộ trong sạch, vững mạnh; gắn công tác xây dựng Đảng với lãnh đạo thực hiện thắng lợi các chỉ tiêu kinh tế - chính trị được giao.',
      date: '15/10/2026',
      badge: 'Xây dựng Đảng',
      category: 'cong-tac-dang',
      views: 2450
    },
    {
      id: 'dang-3',
      title: 'Tài liệu sinh hoạt chi bộ: Quán triệt Kết luận số 06-KL/TW và Chỉ thị số 40-CT/TW của Ban Bí thư',
      link: 'https://vbsp.org.vn/tin-moi-cap-nhat',
      image: 'https://vbsp.org.vn/wp-content/uploads/2026/10/image0043-394x208.jpg',
      summary: 'Khẳng định vai trò hạt nhân chính trị của cấp ủy trong việc huy động mọi nguồn lực tài chính xã hội cho người nghèo và các đối tượng yếu thế trong xã hội.',
      date: '12/10/2026',
      badge: 'Sinh hoạt Chi bộ',
      category: 'cong-tac-dang',
      views: 2980
    },
    {
      id: 'dang-4',
      title: 'Hưởng ứng Giải Báo chí toàn quốc về xây dựng Đảng (Búa liềm vàng) lần thứ IX trong toàn hệ thống',
      link: 'https://vbsp.org.vn/tin-moi-cap-nhat',
      image: 'https://vbsp.org.vn/wp-content/uploads/2026/09/daa.jpg',
      summary: 'Nhiều bài viết đặc sắc khắc họa hình ảnh người đảng viên - cán bộ tín dụng chính sách tận tụy cõng vốn lên non, hết lòng vì nhân dân.',
      date: '10/10/2026',
      badge: 'Búa Liềm Vàng',
      category: 'cong-tac-dang',
      views: 3100
    }
  ],

  news_cong_doan: [
    {
      id: 'cd-1',
      title: 'Phát động Tháng cao điểm “Vì người nghèo” năm 2026 - Lan tỏa tình dân tộc, nghĩa đồng bào',
      link: 'https://vbsp.org.vn/phat-dong-thang-cao-diem-vi-nguoi-ngheo-nam-2026.html',
      image: 'https://vbsp.org.vn/wp-content/uploads/2026/10/image0043-394x208.jpg',
      summary: 'Tối 17/10, tại Hà Nội, Ban Thường trực UBTW MTTQ Việt Nam tổ chức chương trình Tháng cao điểm Vì người nghèo năm 2026. NHCSXH vinh dự được biểu dương là đơn vị tiên phong có nhiều đóng góp xuất sắc cho công tác an sinh xã hội.',
      date: '17/10/2026',
      badge: 'Vì người nghèo',
      category: 'cong-doan',
      views: 4150,
      lead: true
    },
    {
      id: 'cd-2',
      title: 'Công đoàn NHCSXH trao 50 căn nhà “Mái ấm tình thương” và sổ tiết kiệm cho hộ nghèo vùng bão lũ',
      link: 'https://vbsp.org.vn/tin-moi-cap-nhat',
      image: 'https://vbsp.org.vn/wp-content/uploads/2026/10/cbs5d-394x208.png',
      summary: 'Hàng ngàn cán bộ, đoàn viên Công đoàn NHCSXH tự nguyện quyên góp ngày lương kịp thời sẻ chia những mất mát, giúp bà con sớm dựng lại mái nhà, ổn định sinh hoạt.',
      date: '16/10/2026',
      badge: 'Mái ấm tình thương',
      category: 'cong-doan',
      views: 3260
    },
    {
      id: 'cd-3',
      title: 'Chương trình “Mẹ đỡ đầu” - Phụng dưỡng Mẹ VNAH và tiếp sức trẻ mồ côi vượt khó',
      link: 'https://vbsp.org.vn/tin-moi-cap-nhat',
      image: 'https://vbsp.org.vn/wp-content/uploads/2026/10/1WUpukr6fOszrhngDlBC0Kn5snUUwKyXri8HGExZiKJA7yx3ZOJyBKQhYJhH7mm7D0g-394x208.jpg',
      summary: 'Hoạt động nghĩa tình thường niên thể hiện đạo lý Uống nước nhớ nguồn của tập thể cán bộ viên chức người lao động Ngân hàng Chính sách xã hội.',
      date: '14/10/2026',
      badge: 'Đền ơn đáp nghĩa',
      category: 'cong-doan',
      views: 2950
    },
    {
      id: 'cd-4',
      title: 'Công đoàn các chi nhánh phát động phong trào thi đua “Lao động giỏi, phục vụ tận tâm người nghèo”',
      link: 'https://vbsp.org.vn/tin-moi-cap-nhat',
      image: 'https://vbsp.org.vn/wp-content/uploads/2026/09/daa.jpg',
      summary: 'Tạo động lực thi đua sôi nổi, chăm lo thiết thực đời sống tinh thần, điều kiện làm việc và an toàn sức khỏe cho người lao động tại các huyện nghèo, hải đảo.',
      date: '11/10/2026',
      badge: 'Phong trào thi đua',
      category: 'cong-doan',
      views: 2780
    }
  ],

  // ĐOÀN THANH NIÊN - TIN TỨC VẮN TẮT (FLASH UPDATES / DIGEST DÀNH CHO TRANG CHỦ)
  news_doan_thanh_nien: [
    {
      id: 'dtn-1',
      time_tag: '18/10 • 08:30',
      badge: 'Thanh niên số',
      title: 'Ra quân chiến dịch "Thanh niên số": Hướng dẫn cài đặt VBSP SmartBanking tại 120 điểm xã',
      brief: 'Hơn 500 đoàn viên thanh niên trực tiếp có mặt tại phiên giao dịch xã hướng dẫn bà con quét QR, thực hiện chuyển tiền an toàn trên điện thoại di động.',
      link: 'chi-tiet-tin-tuc.html?id=dtn-1',
      views: 1850,
      image: 'https://vbsp.org.vn/wp-content/uploads/2026/10/4a-394x208.jpg'
    },
    {
      id: 'dtn-2',
      time_tag: '17/10 • 14:15',
      badge: 'Hiến máu tình nguyện',
      title: 'Tuổi trẻ VBSP hiến tặng 350 đơn vị máu trong chiến dịch "Giọt hồng tri ân 2026"',
      brief: 'Phát huy tinh thần xung kích tình nguyện vì cuộc sống cộng đồng, đông đảo đoàn viên thanh niên các chi nhánh sôi nổi tham gia ngày hội hiến máu cứu người.',
      link: 'chi-tiet-tin-tuc.html?id=dtn-2',
      views: 2120,
      image: 'https://vbsp.org.vn/wp-content/uploads/2026/10/image0043-394x208.jpg'
    },
    {
      id: 'dtn-3',
      time_tag: '15/10 • 09:00',
      badge: 'Khuyến học',
      title: 'Trao 200 suất học bổng "Tiếp sức đến trường" cho học sinh nghèo vượt khó',
      brief: 'Chắp cánh ước mơ đến trường cho con em các hộ gia đình chính sách tại các xã biên giới khó khăn nhân dịp đầu năm học mới.',
      link: 'chi-tiet-tin-tuc.html?id=dtn-3',
      views: 1640,
      image: 'https://vbsp.org.vn/wp-content/uploads/2026/10/1WUpukr6fOszrhngDlBC0Kn5snUUwKyXri8HGExZiKJA7yx3ZOJyBKQhYJhH7mm7D0g-394x208.jpg'
    },
    {
      id: 'dtn-4',
      time_tag: '12/10 • 16:45',
      badge: 'Nông thôn mới',
      title: 'Khánh thành 5 công trình thanh niên "Thắp sáng đường quê" tại Tây Bắc',
      brief: 'Lắp đặt hệ thống đèn chiếu sáng năng lượng mặt trời dài hơn 8km giúp bà con đi lại thuận tiện và giữ gìn an ninh trật tự bản làng.',
      link: 'chi-tiet-tin-tuc.html?id=dtn-4',
      views: 1930,
      image: 'https://vbsp.org.vn/wp-content/uploads/2026/10/cbs5d-394x208.png'
    },
    {
      id: 'dtn-5',
      time_tag: '10/10 • 10:20',
      badge: 'Rèn đức luyện nghề',
      title: 'Tọa đàm "Cán bộ trẻ NHCSXH Tiên phong - Đổi mới - Sáng tạo số"',
      brief: 'Diễn đàn trí thức trẻ chia sẻ các giải pháp cải tiến quy trình giải ngân, số hóa công tác kiểm tra giám sát và nâng cao đạo đức công vụ phục vụ nhân dân.',
      link: 'chi-tiet-tin-tuc.html?id=dtn-5',
      views: 2410,
      image: 'https://vbsp.org.vn/wp-content/uploads/2026/09/daa.jpg'
    }
  ],

  // TỔNG HỢP DANH MỤC ARTICLES PHỤC VỤ TRANG CHI TIẾT & MODAL VIEW
  articles: [
    {
      id: 1,
      slug: 'tao-sinh-ke-ba-con-di-dan',
      badge: 'Thông tin hoạt động',
      title: 'Tạo sinh kế cho bà con di dân tái định cư thuỷ điện (VTV1 - 5h30 - 13.10.2026)',
      summary: 'Chương trình Thời sự VTV1 phản ánh hiệu quả nguồn vốn vay ưu đãi của NHCSXH giúp hàng trăm hộ di dân vùng lòng hồ thủy điện Bản Vẽ ổn định nơi ở mới, phát triển kinh tế bền vững.',
      date: '13/10/2026',
      views: '3,820',
      author: 'Ban Truyền thông VBSP',
      image: 'https://vbsp.org.vn/wp-content/uploads/2026/10/cbs5d-394x208.png',
      body: '<p>Thực hiện chính sách nhân văn của Đảng và Nhà nước, nguồn vốn tín dụng chính sách xã hội đã được phân bổ kịp thời đến từng hộ di dân tái định cư thủy điện Bản Vẽ. Với mức vốn vay ưu đãi giải quyết việc làm và sản xuất nông nghiệp, các hộ dân đã mạnh dạn đầu tư chuyển đổi cây trồng, vật nuôi, xây dựng chuồng trại chăn nuôi gia súc theo hướng hàng hóa.</p><p>Tại các phiên giao dịch xã định kỳ, cán bộ NHCSXH cùng các tổ chức chính trị - xã hội nhận ủy thác luôn tận tình hướng dẫn thủ tục, bình xét công khai, bảo đảm nguồn vốn đến đúng đối tượng thụ hưởng và phát huy hiệu quả cao nhất.</p>'
    },
    {
      id: 2,
      slug: 'doi-moi-phuong-thuc-lanh-dao-dang',
      badge: 'Công tác Đảng',
      title: 'Đổi mới phương thức lãnh đạo của Đảng, gắn trách nhiệm cá nhân với kết quả công việc',
      summary: 'Đảng bộ NHCSXH Trung ương đề cao vai trò hạt nhân chính trị, phát huy tính tiên phong gương mẫu của cán bộ, đảng viên hoàn thành thắng lợi nhiệm vụ an sinh xã hội.',
      date: '16/10/2026',
      views: '3,650',
      author: 'Đảng ủy NHCSXH Trung ương',
      image: 'https://vbsp.org.vn/wp-content/uploads/2026/10/hoi-nghi-tw4-5500_11zon-394x208.jpg',
      body: '<p>Sáng 16/10, tại Hà Nội, Bộ Chính trị, Ban Bí thư tổ chức Hội nghị toàn quốc nghiên cứu, học tập, quán triệt và triển khai thực hiện Nghị quyết Trung ương. Đảng ủy NHCSXH Trung ương kết nối điểm cầu trực tuyến với sự tham gia đầy đủ của toàn thể đảng viên trong Đảng bộ.</p><p>Hội nghị nhấn mạnh yêu cầu siết chặt kỷ cương, đề cao trách nhiệm người đứng đầu, đưa việc thực hiện Chỉ thị 40-CT/TW và Kết luận 06-KL/TW vào nghị quyết sinh hoạt thường kỳ của từng chi bộ.</p>'
    },
    {
      id: 3,
      slug: 'vi-nguoi-ngheo-2026',
      badge: 'Hoạt động Công đoàn',
      title: 'Phát động Tháng cao điểm “Vì người nghèo” năm 2026 - Lan tỏa tình dân tộc, nghĩa đồng bào',
      summary: 'NHCSXH vinh dự được vinh danh là đơn vị tiên phong có nhiều đóng góp xuất sắc cho công tác an sinh xã hội tại lễ phát động Tháng cao điểm Vì người nghèo năm 2026.',
      date: '17/10/2026',
      views: '4,150',
      author: 'Công đoàn NHCSXH',
      image: 'https://vbsp.org.vn/wp-content/uploads/2026/10/image0043-394x208.jpg',
      body: '<p>Tối 17/10, tại Hà Nội, Ban Thường trực UBTW MTTQ Việt Nam phát động Tháng cao điểm “Vì người nghèo” năm 2026. NHCSXH đã đồng hành và đóng góp hàng nghìn tỷ đồng tín dụng ưu đãi cùng nhiều tỷ đồng trích từ quỹ phúc lợi công đoàn để xây dựng nhà tình thương, tặng sổ tiết kiệm cho các hộ khó khăn trên toàn quốc.</p>'
    },
    {
      id: 4,
      slug: 'thanh-nien-so-vbsp',
      badge: 'Đoàn thanh niên',
      title: 'Chiến dịch "Thanh niên số": Tuổi trẻ NHCSXH hướng dẫn bà con chuyển đổi số tài chính',
      summary: 'Đoàn viên thanh niên NHCSXH xung kích tại các phiên giao dịch xã, trực tiếp hỗ trợ bà con nông dân tiếp cận dịch vụ ngân hàng điện tử hiện đại và an toàn.',
      date: '18/10/2026',
      views: '1,850',
      author: 'Đoàn Thanh niên NHCSXH',
      image: 'https://vbsp.org.vn/wp-content/uploads/2026/10/4a-394x208.jpg',
      body: '<p>Chiến dịch Thanh niên số của Đoàn thanh niên NHCSXH đã lan tỏa tại hơn 120 điểm giao dịch xã trên toàn quốc. Các bạn trẻ tình nguyện viên kiên nhẫn hướng dẫn bà con cách tra cứu thông tin dư nợ, chuyển tiền miễn phí và bảo mật mật khẩu OTP trên ứng dụng VBSP SmartBanking.</p>'
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { VBSP_DATA };
}


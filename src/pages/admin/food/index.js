import React, { useState } from "react";
import {
  Table,
  Button,
  Icon,
  Popconfirm,
  notification,
  Upload,
  Descriptions,
  Avatar
} from "antd";
import FoodModal from "./UserModal";

const dataUser = [
  {
    id: 1,
    key: 1,
    src:
      "https://images.foody.vn/res/g95/946021/prof/s576x330/foody-upload-api-foody-mobile-bun-hh-190806141635.jpg",
    name: "Bún Bò Huế",
    description:
      "Bún đặc sản của xứ Huế, trong nước dùng có một ít mắm ruốc, góp phần làm nên hương vị rất riêng",
    type: "MAIN",
    cost: 37000,
    options: ["Bún thêm", "Rau thêm", "Thịt bò thêm", "Rau trụng"],
    requires: [
      {
        id: 1,
        title: ""
      }
    ]
  },
  {
    id: 2,
    key: 2,
    src:
      "https://cdn.huongnghiepaau.com/wp-content/uploads/2018/01/1162815ad9bf895f2061c0defe3b0cae.jpg",
    name: "Bánh canh",
    description:
      "Được làm từ bột gạo, bột mì, hoặc bột sắn hoặc bột gạo pha bột sắn cán thành tấm và cắt ra thành sợi to và ngắn với nước dùng được nấu từ tôm, cá, giò heo... thêm gia vị tùy theo từng loại",
    type: "MAIN",
    cost: 37000,
    options: ["Bánh canh thêm", "Giò thêm", "Chả thêm"],
    requires: [
      {
        id: 1,
        title: ""
      }
    ]
  },
  {
    id: 3,
    key: 3,
    src:
      "https://media.cooky.vn/recipe/g1/6361/s480x480/recipe6361-prepare-step6-636486731568656198.jpg",
    name: "Bún chả",
    description: "Bún và chả cá nướng trộn nước mắm, rau sống",
    type: "MAIN",
    cost: 37000,
    options: ["Bún thêm", "Ray thêm", "Chả thêm"],
    requires: [
      {
        id: 1,
        title: ""
      }
    ]
  },
  {
    id: 4,
    key: 4,
    src:
      "https://www.cet.edu.vn/wp-content/uploads/2018/03/bun-thit-nuong-kieu-mien-nam.jpg",
    name: "Bún thịt nướng",
    description: "Bún ăn với thịt nướng cùng nước mắm và rau sống kiểu Huế.",
    type: "MAIN",
    cost: 35000,
    options: ["Bún thêm", "Rau thêm", "Thịt nướng thêm"],
    requires: [
      {
        id: 1,
        title: ""
      }
    ]
  },
  {
    id: 5,
    key: 5,
    src:
      "https://media.cooky.vn/recipe/g5/44500/s640/cooky-recipe-cover-r44500.jpg",
    name: "Hủ tiếu",
    description:
      "Bánh hủ tiếu chan nước dùng với thịt băm nhỏ, lòng heo nấu cùng. Sau đó trụng sơ bánh hủ tiếu với nước dùng, rồi cho các nguyên liệu phụ vào như giá đỗ, hẹ, thịt băm cùng lòng lợn vào",
    type: "MAIN",
    cost: 32000,
    options: ["Thêm vắt mì", "Bánh hủ tiếu thêm", "Thịt heo thêm", "Rau thêm"],
    requires: [
      {
        id: 1,
        title: ""
      }
    ]
  },
  {
    id: 6,
    key: 6,
    src:
      "https://danang.huongnghiepaau.com/images/mon-ngon-mien-trung/mi-quang-ga.jpg",
    name: "Mì quảng",
    description:
      "Được làm từ sợi mì bằng bột gạo xay mịn và tráng thành từng lớp bánh mỏng, sau đó thái theo chiều ngang để có những sợi mì mỏng khoảng 2mm. Sợi mì làm bằng bột mỳ được trộn thêm một số phụ gia cho đạt độ dòn, dai. Dưới lớp mì là các loại rau sống, trên mì là thịt heo nạc, tôm, thịt gà cùng với nước dùng",
    type: "MAIN",
    cost: 42000,
    options: ["Thêm mì", "Rau thêm", "Thịt heo thêm", "Bánh tráng thêm"],
    requires: [
      {
        id: 1,
        title: ""
      }
    ]
  },
  {
    id: 7,
    key: 7,
    src:
      "https://thammyviennevada.com/wp-content/uploads/2019/08/an-pho-co-beo-khong-1.jpg",
    name: "Phở",
    description:
      "Là một trong những món ăn đặc trưng nhất cho ẩm thực Việt Nam. Thành phần chính của phở là bánh phở và nước dùng (hay nước lèo theo cách gọi miền Nam) cùng với thịt bò hoặc gà cắt lát mỏng. Ngoài ra còn kèm theo các gia vị như: tương, tiêu, chanh, nước mắm, ớt,...",
    type: "MAIN",
    cost: 39000,
    options: ["Thịt bò", "Thịt gà", "Thêm phở", "Rau thêm"],
    requires: [
      {
        id: 1,
        title: ""
      }
    ]
  },
  {
    id: 8,
    key: 8,
    src: "https://wikiohana.net/wp-content/uploads/2019/01/bun-dau-mam-tom.jpg",
    name: "Bún đậu mắm tôm",
    description: "Bún ăn với đậu rán và mắm tôm",
    type: "MAIN",
    cost: 37000,
    options: ["Bún thêm", "Đậu thêm", "Chả thêm", "Rau thêm"],
    requires: [
      {
        id: 1,
        title: ""
      }
    ]
  },
  {
    id: 9,
    key: 9,
    src:
      "https://beptruong.edu.vn/wp-content/uploads/2013/01/mi-xao-thap-cam.jpg",
    name: "Mì xào",
    description: "Mì xào chín giòn với trứng, rau, hải sản...",
    type: "MAIN",
    cost: 38000,
    options: ["Mì thêm", "Rau thêm", "Thịt thêm"],
    requires: [
      {
        id: 1,
        title: ""
      }
    ]
  },
  {
    id: 10,
    key: 10,
    type: "DESSERT",
    src:
      "https://cdn.24h.com.vn/upload/2-2018/images/2018-04-27/1524823525-992-2018-04-02-14-54-20-1524823062-width650height488.jpg",
    name: "Chè đậu xanh",
    description:
      "Chè đậu (đỗ) xanh nấu với đường và bột năng (hoặc bột sắn dây), có thể cho thêm dừa nạo và nước cốt dừa.",
    cost: 32000,
    options: [],
    requires: [
      {
        id: 1,
        title: ""
      }
    ]
  },
  {
    id: 11,
    key: 11,
    type: "DESSERT",
    src:
      "https://monngonmoingay.com/wp-content/uploads/2019/02/che-ba-ba-500.jpg",
    name: "Chè bà ba",
    cost: 39000,
    description: "Chè khoai lang với đậu xanh cà và nước cốt dừa.",
    options: [],
    requires: [
      {
        id: 1,
        title: ""
      }
    ]
  },
  {
    id: 12,
    key: 12,
    type: "DESSERT",
    src: "https://thucthan.com/media/2019/06/suong-sao/suong-sao.jpg",
    name: "Sương sáo",
    cost: 35000,
    description:
      "Thân và lá cây thạch đen được phơi khô rồi xay nát, đun sôi trong nước và thêm bột, khi nguội đông lại thành thạch.",
    options: [],
    requires: [
      {
        id: 1,
        title: ""
      }
    ]
  },
  {
    id: 13,
    key: 13,
    type: "DESSERT",
    src:
      "http://bizweb.dktcdn.net/100/083/428/files/chuoinammy2.jpg?v=1474618960262",
    name: "Chuối già nam mĩ",
    cost: 33000,
    description:
      "Chuối chuyển màu từ xanh đậm sang vàng khi chín, phần thịt trắng ngà hoặc vàng, mềm, nhiều tinh bột khi chin. Chuối già Nam Mỹ chiếm 47% lượng chuối trên toàn thế giới. Hương vị rất ngon, dẻo, ngọt hơn so với các loại chuối khác.",
    options: [],
    requires: [
      {
        id: 1,
        title: ""
      }
    ]
  },
  {
    id: 14,
    key: 14,
    type: "DESSERT",
    src:
      "https://bizweb.dktcdn.net/100/010/432/products/green-grape.jpg?v=1530625676553",
    name: "Nho xanh",
    cost: 23000,
    description:
      "Nho Xanh thơm ngon và chứa nhiều chất dinh dưỡng có lợi cho sức khỏe.",
    options: [],
    requires: [
      {
        id: 1,
        title: ""
      }
    ]
  },
  {
    id: 15,
    key: 15,
    type: "DESSERT",
    src:
      "https://kienthuctieuduong.vn/wp-content/uploads/2019/09/benh-tieu-duong-an-chom-chom-duoc-khong-1.jpeg.pagespeed.ce.kYBQGB-FXQ.jpeg",
    name: "Chôm chôm",
    cost: 31000,
    description:
      "Chôm chôm có tên danh pháp hai phần là Nephelium lappaceum, loài cây có nguồn gốc từ vùng nhiệt đới Đông Nam Á, khi chín có vỏ màu đỏ, có vị ngọt dịu và hình dạng tròn, chôm chôm cung cấp rất nhiều dưỡng chất cho cơ thể và mang nhiều lợi ích sức khỏe không ngờ.",
    options: [],
    requires: [
      {
        id: 1,
        title: ""
      }
    ]
  },
  {
    id: 16,
    key: 16,
    type: "DESSERT",
    src:
      "https://vcdn-suckhoe.vnecdn.net/2019/05/20/duahaungon-1558332883-7658-1558333733.png",
    name: "Dưa hấu",
    cost: 37000,
    description:
      "Dưa hấu có hàm lượng nước cao, giàu vitamin và khoáng chất, tốt cho sức khỏe tổng thể và thích hợp cho ngày hè.",
    options: [],
    requires: [
      {
        id: 1,
        title: ""
      }
    ]
  },
  {
    id: 17,
    key: 17,
    type: "DESSERT",
    src:
      "https://blog.beemart.vn/wp-content/uploads/2018/04/cach-lam-rau-cau-dua-10.jpg",
    name: "Rau cau dừa",
    cost: 35000,
    description:
      "Mùa hè đang đến gần, bên cạnh những loại đồ uống như trà sữa, trà hoa quả, sinh tố,… thì thạch rau câu cũng là một món ăn cực HOT mà bạn không thể bỏ qua",
    options: [],
    requires: [
      {
        id: 1,
        title: ""
      }
    ]
  },
  {
    id: 18,
    key: 18,
    type: "DESSERT",
    src:
      "data:image/jpeg;base64,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",
    name: "bánh flan",
    cost: 27000,
    description:
      "Bánh flan là một món ăn vặt, món tráng miệng được phụ nữ và đặc biệt là trẻ em rất yêu thích. Bánh flan ngọt dịu, đắng nhẹ, thơm mát và ngậy ngậy rất hấp dẫn, thích hợp ăn vào các mùa, đặc biệt là mùa hè.",
    options: [],
    requires: [
      {
        id: 1,
        title: ""
      }
    ]
  }
];

function Index() {
  const [users, setUsers] = useState(dataUser);
  const [visiableFormUserModal, setvisiableFormUserModal] = useState(false);
  const [userSelected, setUserSelected] = useState(null);
  const imageComponent = record => {
    const list = [
      {
        uid: "-1",
        name: record.name,
        status: "done",
        url: record.src,
        thumbUrl: record.src
      }
    ];
    // console.log({ record, users });
    return (
      <Upload
        showUploadList={{ showDownloadIcon: false, showRemoveIcon: false }}
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture"
        defaultFileList={list}
        className="upload-list-inline"
      />
    );
  };
  const columns = [
    {
      title: "Hình ảnh",
      dataIndex: "src",
      width: 120,
      render: text => <Avatar size={80} src={text} />
    },
    {
      title: "Tên món ăn",
      dataIndex: "name"
    },

    {
      title: "Món thêm",
      dataIndex: "options",
      render: text => text.map(i => <li key={i}>{i}</li>)
    },
    {
      title: "Loại món ăn",
      dataIndex: "type",
      render: text => {
        switch (text) {
          case "MAIN":
            return "Món chính";
          case "DESSERT":
            return "Món phụ";
          default:
            return "";
        }
      }
    },
    {
      title: "Số tiền",
      dataIndex: "cost",
      render: text => `${text} ₫`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    },
    {
      title: "Tác vụ",
      key: "action",
      // fixed: 'right',
      width: 200,
      render: item => (
        <div className="d-flex align-items-center">
          <Button
            className="mr-2 d-flex align-items-center"
            type="primary"
            size="small"
            onClick={() => {
              setUserSelected(item);
              setvisiableFormUserModal(true);
            }}
          >
            <Icon type="edit" />
            Edit
          </Button>
          <Popconfirm
            title="Bạn có muốn xóa không?"
            onConfirm={() => {
              setUsers(users.filter(user => user.id !== item.id));
              notification.success({
                message: "Xóa tài khoản thành công"
              });
            }}
            // onCancel={cancel}
            okText="Có"
            cancelText="Không"
          >
            <Button
              className="d-flex align-items-center"
              type="danger"
              size="small"
            >
              <Icon type="delete" />
              Delete
            </Button>
          </Popconfirm>
        </div>
      )
    }
  ];

  return (
    <div>
      <h3 style={{ padding: "10px", textAlign: "center" }}>
        Tài khoản{" "}
        <Button
          type="primary"
          icon="plus"
          onClick={() => {
            setvisiableFormUserModal(true);
            setUserSelected(null);
          }}
          style={{ float: "right" }}
        />
      </h3>
      <Table
        pagination={{ pageSize: 7 }}
        columns={columns}
        expandedRowRender={record => (
          <Descriptions>
            <Descriptions.Item label="Mô tả">
              {record.description}
            </Descriptions.Item>
          </Descriptions>
        )}
        dataSource={users}
        bordered
        rowKey="_id"
        scroll={{ y: 700 }}
      />
      <FoodModal
        users={users}
        setUsers={setUsers}
        visiableFormUserModal={visiableFormUserModal}
        setvisiableFormUserModal={setvisiableFormUserModal}
        userSelected={userSelected}
        isLoading={visiableFormUserModal}
      />
    </div>
  );
}

export default Index;

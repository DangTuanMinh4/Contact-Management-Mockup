
# Quy tắc Giao diện Người dùng (UI Rules) - Dự án Contact Management

Tài liệu này mô tả các quy tắc giao diện người dùng (UI) cần tuân theo để đảm bảo tính nhất quán và thẩm mỹ cho dự án Contact Management, dựa trên phong cách thiết kế được cung cấp.

## 1. Tổng quan Layout

Dự án tuân theo bố cục hai cột chính:
-   **Sidebar (Cột Trái):** Chứa logo ứng dụng, các mục điều hướng chính (Search, Notification, Home, Workspace, Broadcast, Form submission, Chats, Channel, Integration, Setting, Help and support) và thông tin người dùng.
-   **Main Content Area (Cột Phải):** Hiển thị nội dung chính, bao gồm tiêu đề trang (ví dụ: "Contacts (102)"), thanh tìm kiếm, các nút hành động (Import, Add new contact) và danh sách/bảng dữ liệu (ví dụ: danh sách liên hệ).

## 2. Bảng màu (Color Palette)

Sử dụng bảng màu sạch sẽ, hiện đại với các điểm nhấn màu sắc phù hợp. Ưu tiên sử dụng các lớp tiện ích màu sắc của Bootstrap 5.

-   **Màu nền chính:** Trắng (`#FFFFFF`) và Xám nhạt (`#F8F9FA` hoặc tương tự).
-   **Màu thương hiệu/Chính (Primary):** Một sắc thái Xanh dương/Tím (ví dụ: `#6A5ACD` hoặc tương tự) được sử dụng cho logo, các mục điều hướng đang hoạt động, nút chính ("Add new contact"). Có thể sử dụng các lớp `.text-primary`, `.bg-primary` của Bootstrap.
-   **Màu phụ trợ (Secondary):** Sử dụng cho các yếu tố thứ cấp như nút "Import". Có thể sử dụng `.btn-secondary`.
-   **Màu văn bản chính:** Đen hoặc Xám đậm (`#212529` hoặc tương tự).
-   **Màu văn bản phụ:** Xám nhạt hơn cho thông tin chi tiết (ví dụ: email).
-   **Màu Tag:**
    -   `Active`: Xanh nhạt (ví dụ: `.badge-info` hoặc tùy chỉnh).
    -   `Inactive`: Xám nhạt (ví dụ: `.badge-secondary` hoặc tùy chỉnh).
    -   `Frequent user`: Vàng cam nhạt (ví dụ: tùy chỉnh).
    -   `New user`: Xanh lá nhạt (ví dụ: `.badge-success` hoặc tùy chỉnh).
    -   Nút "Add tag": Sử dụng `.btn-outline-secondary` hoặc tương tự.

## 3. Typography

-   **Font chữ:** Sử dụng font chữ Sans-serif dễ đọc (ví dụ: Bootstrap mặc định hoặc Google Fonts được chỉ định).
-   **Kích thước và trọng lượng:**
    -   Tiêu đề chính (ví dụ: "Contacts (102)"): Lớn, đậm.
    -   Tiêu đề cột bảng: Trung bình, đậm.
    -   Nội dung văn bản: Kích thước chuẩn, trọng lượng thông thường.
    -   Thông tin phụ (email, địa chỉ): Kích thước nhỏ hơn, màu nhạt hơn.
-   **Sử dụng các lớp tiện ích Typography của Bootstrap** như `.h1`, `.h2`, `.fw-bold`, `.text-muted`, v.v.

## 4. Component và Quy tắc áp dụng

### 4.1. Sidebar

-   Sử dụng cấu trúc điều hướng Bootstrap (`.nav`, `.nav-link`).
-   Các mục điều hướng có biểu tượng (icon) và văn bản.
-   Mục đang hoạt động (active) cần có màu nền hoặc màu chữ nổi bật (sử dụng màu thương hiệu).
-   Khu vực người dùng ở dưới cùng với ảnh đại diện và tên.

### 4.2. Header (trong Main Content Area)

-   Sử dụng cấu trúc Navbar của Bootstrap (`.navbar`, `.navbar-expand`).
-   Nút "Back" có thể là một liên kết hoặc nút.
-   Tiêu đề trang (ví dụ: "Contacts (102)") cần rõ ràng.
-   Thanh tìm kiếm (`.form-control` với kích thước phù hợp, có thể thêm icon search).
-   Các nút hành động ("Import", "Add new contact") sử dụng `.btn`. "Add new contact" là nút chính (`.btn-primary`), "Import" là nút phụ (`.btn-secondary` hoặc `.btn-outline-secondary`).

### 4.3. Danh sách Liên hệ (Contact List)

-   Sử dụng bảng Bootstrap (`.table`).
-   Áp dụng kiểu bảng `.table-striped` để phân biệt dòng.
-   **Cột Profile Name:**
    -   Chứa ảnh đại diện tròn hoặc chữ cái viết tắt trong vòng tròn. Sử dụng `.rounded-circle` và có thể thêm background color.
    -   Tên đầy đủ và email hiển thị bên cạnh.
-   **Cột Contact Info:** Hiển thị số điện thoại và địa chỉ.
-   **Cột Creation Date:** Định dạng ngày tháng rõ ràng (ví dụ: "1 Dec, 2024").
-   **Cột Tag:**
    -   Hiển thị các tag dưới dạng `badge` của Bootstrap.
    -   Các tag có màu sắc khác nhau tùy thuộc vào trạng thái (`Active`, `Inactive`, `New user`, `Frequent user`).
    -   Nút "Add tag" có thể là một nút nhỏ hoặc liên kết.

### 4.4. Nút (Buttons)

-   Sử dụng các lớp `.btn` của Bootstrap.
-   Nút chính (hành động quan trọng): `.btn-primary`.
-   Nút thứ cấp: `.btn-secondary` hoặc `.btn-outline-secondary`.
-   Kích thước nút có thể điều chỉnh bằng các lớp `.btn-lg`, `.btn-sm` nếu cần, nhưng trong thiết kế, các nút có vẻ có kích thước mặc định hoặc nhỏ.
-   Đảm bảo các nút có khoảng cách hợp lý (`me-2`, `mb-2`...).

### 4.5. Thẻ (Tags / Badges)

-   Sử dụng các lớp `.badge` của Bootstrap.
-   Áp dụng các màu sắc tiện ích của Bootstrap (`.bg-success`, `.bg-warning`, `.bg-info`, `.bg-secondary`) hoặc định nghĩa màu tùy chỉnh tương ứng với thiết kế.
-   Bo tròn các góc cho tag.

### 4.6. Icon

-   Sử dụng thư viện icon nhất quán (ví dụ: Font Awesome, Bootstrap Icons) được tích hợp trong dự án.
-   Đảm bảo icon có kích thước và màu sắc phù hợp với ngữ cảnh.

### 4.7. Form Controls

-   Sử dụng các lớp form của Bootstrap (`.form-control`, `.form-label`).
-   Input tìm kiếm có viền và kiểu dáng sạch sẽ.

## 5. Quy ước đặt tên

-   **Component:** PascalCase (ví dụ: `ContactList.jsx`).
-   **File:** PascalCase (ví dụ: `ContactList.jsx`).
-   **Biến/Hàm:** camelCase.
-   **Class CSS:** Sử dụng class của Bootstrap hoặc BEM nếu cần CSS tùy chỉnh.

## 6. Lưu ý

-   Luôn ưu tiên sử dụng các lớp tiện ích và component có sẵn của Bootstrap 5 để đảm bảo tính nhất quán và tiết kiệm thời gian phát triển.
-   Khi cần tùy chỉnh, hãy tạo các lớp CSS mới theo quy ước BEM hoặc các phương pháp CSS hiện đại khác, tránh viết CSS inline.
-   Đảm bảo responsive design cho các layout và component.

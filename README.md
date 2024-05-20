# LEARN NEXTJS

## Cấu trúc thư mục

- .next: được khi chạy lệnh npm run build, chứa code server khi build
- node_modules: chứa tất cả package và module của dự án
- public: chứa các hình ảnh, video
- src: source fe (code chính)
  app: đại diện cho chức năng app router

- next.config.mjs: chứa những config đặc biệt , cài một số plugin vào để config
- postcss.config.mjs: file này để config tailwind
- components.json: hỗ trợ cho thư viện shadcnui
- tsconfig.json: Nó được sử dụng để thiết lập các tùy chọn biên dịch TypeScript cho dự án của bạn.

## Routing trong nextjs

- Trong các page chính thường sẽ là server component chứ k có được dùng (muốn dùng thì phải tách ra để import)
- redirect có hỗ trợ cho việc render nhưng không hỗ trợ cho các sự kiện như click

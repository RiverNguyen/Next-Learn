# 🚀 Next.js Authentication Learning Project

Dự án học tập Next.js với hệ thống xác thực (Authentication) được xây dựng bằng các công nghệ hiện đại.

## 📋 Mô tả

Đây là một dự án học tập Next.js tập trung vào việc xây dựng hệ thống xác thực người dùng với giao diện đẹp và trải nghiệm người dùng tốt. Dự án sử dụng App Router của Next.js 15 và các thư viện UI hiện đại.

## ✨ Tính năng

### 🔐 Hệ thống Xác thực

- **Đăng nhập/Đăng ký**: Form xác thực với validation
- **Google OAuth**: Tích hợp đăng nhập bằng Google
- **Form Validation**: Sử dụng React Hook Form + Zod
- **Responsive Design**: Tương thích với mọi thiết bị

### 🎨 Giao diện Người dùng

- **Modern UI**: Thiết kế hiện đại với Tailwind CSS
- **Component Library**: Sử dụng Radix UI components
- **Dark/Light Mode**: Hỗ trợ chế độ tối/sáng
- **Loading States**: Trạng thái loading mượt mà
- **Toast Notifications**: Thông báo với Sonner

### 🛠️ Công nghệ & Thư viện

#### Core

- **Next.js 15.4.4** - React framework với App Router
- **React 19.1.0** - UI library
- **TypeScript 5** - Type safety
- **Tailwind CSS 4** - Utility-first CSS framework

#### UI Components

- **Radix UI** - Headless UI components
- **Lucide React** - Icon library
- **Class Variance Authority** - Component variants
- **Tailwind Merge** - Utility merging

#### Forms & Validation

- **React Hook Form** - Form management
- **Zod** - Schema validation
- **@hookform/resolvers** - Form validation resolvers

#### Additional Features

- **Next Themes** - Theme switching
- **Next.js Top Loader** - Progress bar
- **Date-fns** - Date utilities
- **Recharts** - Chart components
- **Embla Carousel** - Carousel component

## 🚀 Bắt đầu

### Yêu cầu hệ thống

- Node.js 18+ hoặc Bun
- npm, yarn, pnpm hoặc bun

### Cài đặt

1. **Clone dự án**

```bash
git clone <repository-url>
cd auth
```

2. **Cài đặt dependencies**

```bash
# Sử dụng npm
npm install

# Hoặc sử dụng yarn
yarn install

# Hoặc sử dụng pnpm
pnpm install

# Hoặc sử dụng bun
bun install
```

3. **Chạy development server**

```bash
# Sử dụng npm
npm run dev

# Hoặc sử dụng yarn
yarn dev

# Hoặc sử dụng pnpm
pnpm dev

# Hoặc sử dụng bun
bun dev
```

4. **Mở trình duyệt**
   Truy cập [http://localhost:3000](http://localhost:3000) để xem kết quả.

## 📁 Cấu trúc Dự án

```
auth/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (auth)/            # Route group cho authentication
│   │   │   ├── login/         # Trang đăng nhập
│   │   │   └── register/      # Trang đăng ký
│   │   ├── globals.css        # Global styles
│   │   └── layout.tsx         # Root layout
│   ├── components/
│   │   └── ui/                # Reusable UI components
│   ├── config/
│   │   └── config-env.ts      # Environment configuration
│   ├── fetches/
│   │   └── fetchData.ts       # API utilities
│   ├── hooks/
│   │   └── use-mobile.ts      # Custom hooks
│   └── lib/
│       └── utils.ts           # Utility functions
├── public/                    # Static assets
└── package.json              # Dependencies & scripts
```

## 🎯 Các Trang Chính

### `/login`

- Form đăng nhập với validation
- Tùy chọn đăng nhập bằng Google
- Link chuyển đến trang đăng ký
- Responsive design với banner

### `/register`

- Form đăng ký với validation
- Tùy chọn đăng ký bằng Google
- Link chuyển đến trang đăng nhập
- Responsive design với banner

## 🔧 Scripts

```bash
# Development
npm run dev          # Chạy development server với Turbopack

# Production
npm run build        # Build dự án cho production
npm run start        # Chạy production server

# Linting
npm run lint         # Kiểm tra code với ESLint
```

## 🎨 Customization

### Thay đổi Theme

Dự án sử dụng `next-themes` để quản lý theme. Bạn có thể:

- Thay đổi màu sắc trong `tailwind.config.ts`
- Tùy chỉnh components trong `src/components/ui/`
- Thêm theme mới trong configuration

### Thêm Components

1. Tạo component mới trong `src/components/ui/`
2. Sử dụng Radix UI primitives
3. Style với Tailwind CSS
4. Export component để sử dụng

## 📚 Học tập

### Next.js Concepts

- **App Router**: File-based routing system
- **Server Components**: Mặc định trong App Router
- **Client Components**: Sử dụng `"use client"` directive
- **Layouts**: Shared UI across routes
- **Loading & Error**: Built-in error handling

### React Patterns

- **Custom Hooks**: Logic reuse
- **Component Composition**: Flexible component design
- **Form Handling**: Controlled vs uncontrolled
- **State Management**: Local state with useState

### TypeScript

- **Type Safety**: Strict typing
- **Interfaces**: Define object shapes
- **Generics**: Reusable type logic
- **Utility Types**: Built-in type helpers

## 🚀 Deployment

### Vercel (Recommended)

1. Push code lên GitHub
2. Connect repository với Vercel
3. Deploy tự động

### Other Platforms

- **Netlify**: Static site hosting
- **Railway**: Full-stack hosting
- **DigitalOcean**: VPS hosting

## 🤝 Đóng góp

1. Fork dự án
2. Tạo feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Mở Pull Request

## 📝 License

Dự án này được tạo ra cho mục đích học tập. Bạn có thể tự do sử dụng và chỉnh sửa.

## 🔗 Liên kết hữu ích

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Radix UI](https://www.radix-ui.com)
- [TypeScript](https://www.typescriptlang.org)

---

**Happy Coding! 🎉**

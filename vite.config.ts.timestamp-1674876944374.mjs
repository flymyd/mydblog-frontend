// vite.config.ts
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
var __vite_injected_original_dirname = "C:\\Users\\MYD\\Documents\\mydblog-frontend";
var vite_config_default = defineConfig(({ mode, command }) => ({
  plugins: [
    react({
      jsxImportSource: "@emotion/react",
      jsxRuntime: process.env.MODE !== "production" ? "classic" : "automatic",
      babel: {
        plugins: ["@emotion/babel-plugin"],
        babelrc: true
      }
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src"),
      "~": path.resolve(__vite_injected_original_dirname, "./")
    }
  },
  server: {
    host: "0.0.0.0",
    open: false
  },
  css: {
    modules: {
      localsConvention: "camelCase"
    },
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  build: {
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: command === "build" && loadEnv(mode, __vite_injected_original_dirname).VITE_API_ENV === "prod",
        drop_debugger: command === "build" && loadEnv(mode, __vite_injected_original_dirname).VITE_API_ENV === "prod"
      }
    }
  }
}));
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxNWURcXFxcRG9jdW1lbnRzXFxcXG15ZGJsb2ctZnJvbnRlbmRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXE1ZRFxcXFxEb2N1bWVudHNcXFxcbXlkYmxvZy1mcm9udGVuZFxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvTVlEL0RvY3VtZW50cy9teWRibG9nLWZyb250ZW5kL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHtkZWZpbmVDb25maWcsIGxvYWRFbnZ9IGZyb20gJ3ZpdGUnXHJcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCdcclxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKHsgbW9kZSwgY29tbWFuZCB9KSA9Pih7XHJcbiAgcGx1Z2luczogW1xyXG4gICAgcmVhY3Qoe1xyXG4gICAgICBqc3hJbXBvcnRTb3VyY2U6IFwiQGVtb3Rpb24vcmVhY3RcIixcclxuICAgICAganN4UnVudGltZTogcHJvY2Vzcy5lbnYuTU9ERSAhPT0gJ3Byb2R1Y3Rpb24nID8gJ2NsYXNzaWMnIDogJ2F1dG9tYXRpYycsXHJcbiAgICAgIGJhYmVsOiB7XHJcbiAgICAgICAgcGx1Z2luczogW1wiQGVtb3Rpb24vYmFiZWwtcGx1Z2luXCJdLFxyXG4gICAgICAgIGJhYmVscmM6IHRydWVcclxuICAgICAgfSxcclxuICAgIH0pLFxyXG4gIF0sXHJcbiAgcmVzb2x2ZToge1xyXG4gICAgYWxpYXM6IHtcclxuICAgICAgJ0AnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMnKSxcclxuICAgICAgJ34nOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi8nKSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBzZXJ2ZXI6IHtcclxuICAgIGhvc3Q6ICcwLjAuMC4wJyxcclxuICAgIG9wZW46IGZhbHNlLFxyXG4gICAgLy8gcHJveHk6IHtcclxuICAgIC8vICAgJy9hcGknOiB7XHJcbiAgICAvLyAgICAgdGFyZ2V0OiAnaHR0cDovL3h4eC5jb20vYXBpL3YxJyxcclxuICAgIC8vICAgICBjaGFuZ2VPcmlnaW46IHRydWUsXHJcbiAgICAvLyAgICAgcmV3cml0ZTogcGF0aCA9PiBwYXRoLnJlcGxhY2UoL15cXC9hcGkvLCAnJykgLy8gXHU1QzA2IC9hcGkgXHU5MUNEXHU1MTk5XHU0RTNBXHU3QTdBXHJcbiAgICAvLyAgIH1cclxuICAgIC8vIH1cclxuICB9LFxyXG4gIGNzczoge1xyXG4gICAgbW9kdWxlczoge1xyXG4gICAgICBsb2NhbHNDb252ZW50aW9uOiAnY2FtZWxDYXNlJ1xyXG4gICAgfSxcclxuICAgIHByZXByb2Nlc3Nvck9wdGlvbnM6IHtcclxuICAgICAgbGVzczoge1xyXG4gICAgICAgIGphdmFzY3JpcHRFbmFibGVkOiB0cnVlLCAvLyBcdTY1MkZcdTYzMDFcdTUxODVcdTgwNTQgSmF2YVNjcmlwdFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBidWlsZDoge1xyXG4gICAgbWluaWZ5OiBcInRlcnNlclwiLFxyXG4gICAgdGVyc2VyT3B0aW9uczoge1xyXG4gICAgICBjb21wcmVzczoge1xyXG4gICAgICAgIGRyb3BfY29uc29sZTogY29tbWFuZCA9PT0gXCJidWlsZFwiICYmIGxvYWRFbnYobW9kZSwgX19kaXJuYW1lKS5WSVRFX0FQSV9FTlYgPT09IFwicHJvZFwiLFxyXG4gICAgICAgIGRyb3BfZGVidWdnZXI6IGNvbW1hbmQgPT09IFwiYnVpbGRcIiAmJiBsb2FkRW52KG1vZGUsIF9fZGlybmFtZSkuVklURV9BUElfRU5WID09PSBcInByb2RcIlxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxufSkpIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFpVCxTQUFRLGNBQWMsZUFBYztBQUNyVixPQUFPLFdBQVc7QUFDbEIsT0FBTyxVQUFVO0FBRmpCLElBQU0sbUNBQW1DO0FBSXpDLElBQU8sc0JBQVEsYUFBYSxDQUFDLEVBQUUsTUFBTSxRQUFRLE9BQU07QUFBQSxFQUNqRCxTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsTUFDSixpQkFBaUI7QUFBQSxNQUNqQixZQUFZLFFBQVEsSUFBSSxTQUFTLGVBQWUsWUFBWTtBQUFBLE1BQzVELE9BQU87QUFBQSxRQUNMLFNBQVMsQ0FBQyx1QkFBdUI7QUFBQSxRQUNqQyxTQUFTO0FBQUEsTUFDWDtBQUFBLElBQ0YsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssS0FBSyxRQUFRLGtDQUFXLE9BQU87QUFBQSxNQUNwQyxLQUFLLEtBQUssUUFBUSxrQ0FBVyxJQUFJO0FBQUEsSUFDbkM7QUFBQSxFQUNGO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFRUjtBQUFBLEVBQ0EsS0FBSztBQUFBLElBQ0gsU0FBUztBQUFBLE1BQ1Asa0JBQWtCO0FBQUEsSUFDcEI7QUFBQSxJQUNBLHFCQUFxQjtBQUFBLE1BQ25CLE1BQU07QUFBQSxRQUNKLG1CQUFtQjtBQUFBLE1BQ3JCO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLFFBQVE7QUFBQSxJQUNSLGVBQWU7QUFBQSxNQUNiLFVBQVU7QUFBQSxRQUNSLGNBQWMsWUFBWSxXQUFXLFFBQVEsTUFBTSxnQ0FBUyxFQUFFLGlCQUFpQjtBQUFBLFFBQy9FLGVBQWUsWUFBWSxXQUFXLFFBQVEsTUFBTSxnQ0FBUyxFQUFFLGlCQUFpQjtBQUFBLE1BQ2xGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixFQUFFOyIsCiAgIm5hbWVzIjogW10KfQo=

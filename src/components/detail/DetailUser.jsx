const DetailUser = () => {
  return (
    <div className='flex-1'>DetailUser</div>
  )
}

export default DetailUser


  // < !DOCTYPE html >
  //   <html class="dark" lang="en"><head>
  //     <meta charset="utf-8" />
  //     <meta content="width=device-width, initial-scale=1.0" name="viewport" />
  //     <title>ChatApp - Full Interface</title>
  //     <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&amp;family=Noto+Sans:wght@400;500;700&amp;display=swap" rel="stylesheet" />
  //     <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet" />
  //     <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
  //     <script id="tailwind-config">
  //       tailwind.config = {
  //         darkMode: "class",
  //       theme: {
  //         extend: {
  //         colors: {
  //         "primary": "#6366f1",
  //       "slate-dark": "#0f172a",
  //       "slate-card": "#1e293b",
  //       "slate-border": "#334155"
  //                   },
  //       fontFamily: {
  //         "display": ["Plus Jakarta Sans", "Noto Sans", "sans-serif"]
  //                   },
  //       borderRadius: {"DEFAULT": "0.375rem", "lg": "0.5rem", "xl": "0.75rem", "2xl": "1rem", "full": "9999px"},
  //               },
  //           },
  //       }
  //     </script>
  //     <style type="text/tailwindcss">
  //       .material-symbols-outlined {
  //         font - variation - settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
  //       }
  //       body {
  //         font - family: "Plus Jakarta Sans", "Noto Sans", sans-serif;
  //       @apply antialiased overflow-hidden;
  //       }
  //       ::-webkit-scrollbar {
  //         width: 5px;
  //       }
  //       ::-webkit-scrollbar-track {
  //         @apply bg-transparent;
  //       }
  //       ::-webkit-scrollbar-thumb {
  //         @apply bg-slate-700 rounded-full;
  //       }
  //     </style>
  //   </head>
  //     <body class="bg-slate-dark text-slate-200">
  //       <div class="flex h-screen w-full overflow-hidden">
  //         <aside class="w-80 border-r border-slate-border/50 bg-slate-900 flex flex-col shrink-0">
  //           <div class="p-4 border-b border-slate-border/30">
  //             <div class="flex items-center justify-between">
  //               <div class="flex items-center gap-3">
  //                 <div class="size-10 rounded-full bg-cover bg-center ring-2 ring-slate-800" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAXQQXwKyA0HSZbz-0TWpzUoXTuWMe0Vea8HDW8fJGdBmr8tCGDVsVhSI6irCSep8r4uzrIThRI5bWTUHY0Qp-WR0t8CHOpdDEYTqZCf8zJhmkh2GHtAYqSZuyRWMZawtFATPk0yeNrRXbkpu1-6R27at1p7CKFk4_6lMH3aNU5IRh6AcgxCVCN8NHhkaDylBaWrsLwA1WpR22_yhikdiX__8womienNpxzE6LyJ4PyOx-pq8bJOVQBVpPxdY0v08brqOJLxroK6Q");'></div>
  //                 <div class="overflow-hidden">
  //                   <h2 class="text-sm font-bold text-white truncate">John Doe</h2>
  //                   <p class="text-[10px] text-slate-400 font-medium">My Account</p>
  //                 </div>
  //               </div>
  //               <div class="flex items-center gap-1">
  //                 <button class="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors">
  //                   <span class="material-symbols-outlined text-[20px]">edit</span>
  //                 </button>
  //                 <button class="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors">
  //                   <span class="material-symbols-outlined text-[20px]">more_vert</span>
  //                 </button>
  //               </div>
  //             </div>
  //           </div>
  //           <div class="px-4 py-3">
  //             <div class="relative">
  //               <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-lg">search</span>
  //               <input class="w-full h-9 rounded-xl border-none bg-slate-800/50 pl-10 pr-4 text-xs text-white placeholder:text-slate-500 focus:ring-2 focus:ring-primary/40 focus:bg-slate-800 transition-all" placeholder="Search messages or contacts" type="text" />
  //             </div>
  //           </div>
  //           <div class="flex-1 overflow-y-auto">
  //             <div class="flex items-center justify-between px-4 py-2">
  //               <h3 class="text-[11px] font-bold uppercase tracking-wider text-slate-500">Recent Chats</h3>
  //               <button class="size-6 flex items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all">
  //                 <span class="material-symbols-outlined text-sm">add</span>
  //               </button>
  //             </div>
  //             <div class="space-y-0.5 px-2">
  //               <div class="flex items-center gap-3 p-3 rounded-xl bg-primary/10 border border-primary/20 cursor-pointer">
  //                 <div class="relative shrink-0">
  //                   <div class="size-11 rounded-full bg-cover bg-center" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBVo-kygx_GYa-P76PPpzAdgs4aJQl_cG9Wg5FzabsBO-ypuSraZWinQ4U0P5ALftkNsCL-UsU_Oqcg4zNvVkAPK4J4nCPv_DApkLpg5l7WHdfWeqquIOVIfnQVhEMUP7WoAhfmjQKmQK8zenXZVvMRxEvKvjwvC2WirBLtOA6Ncwac01qs_jUmNzoGOOtCOQg_bZ95aieksxMJRlY9EttVUHXv5Epexn00cJkI13TXlg2QzP8u5zHk4IAMDWBUj-uCb6m2cJsBCA");'></div>
  //                   <div class="absolute bottom-0 right-0 size-3 rounded-full border-2 border-slate-900 bg-emerald-500"></div>
  //                 </div>
  //                 <div class="flex-1 min-w-0">
  //                   <div class="flex justify-between items-baseline">
  //                     <h4 class="text-sm font-semibold text-white truncate">Jane Smith</h4>
  //                     <span class="text-[10px] text-primary font-medium">10:28 AM</span>
  //                   </div>
  //                   <p class="text-xs text-slate-400 truncate">Great work! The new slate theme...</p>
  //                 </div>
  //               </div>
  //               <div class="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800/50 cursor-pointer transition-colors group">
  //                 <div class="relative shrink-0">
  //                   <div class="size-11 rounded-full bg-cover bg-center" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBznR73zmx5bWMsUfEso_BgEzD2sRxzhKjJ7k-dpWeAX2PmkQ85xtnSJopFQS481gyyIVFlBlWnrBLSApTbZzlXunwyEkuYEyt_g5usqzgxqzKf5ajGNMvvqVbZdQdAkP3WEybH9oTuPU9VHavDwUiHhjsSSIt_bBZjyXJIeUfaIRZ0pEKLrtLIhZqIre0XlSC3WelFsc28Wu95jtd7EAv8hnfkTNO-KqnQmY7Wpm3YM9LKsqeb3XZrQiKfdzkRrk0R1SrRnPGl3Q");'></div>
  //                   <div class="absolute bottom-0 right-0 size-3 rounded-full border-2 border-slate-900 bg-slate-500"></div>
  //                 </div>
  //                 <div class="flex-1 min-w-0">
  //                   <div class="flex justify-between items-baseline">
  //                     <h4 class="text-sm font-semibold text-slate-300 group-hover:text-white truncate">Robert Fox</h4>
  //                     <span class="text-[10px] text-slate-500">Yesterday</span>
  //                   </div>
  //                   <p class="text-xs text-slate-500 truncate">Can we review the files later?</p>
  //                 </div>
  //               </div>
  //               <div class="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800/50 cursor-pointer transition-colors group">
  //                 <div class="relative shrink-0">
  //                   <div class="size-11 rounded-full bg-cover bg-center" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCXteP1CsbW7cdKl96pxPMym-8xzV5v8NHYzEEs1i3XI60lPPLkbOZW3lZO1MhPGzN9MzmmASv_Bfa5dntMFtUdf4b0ou9QdDCEH3ah4itkFtItJb9V3R0wti4mZhwngOLJuNRspKkZFyoUrJIjCg2K148IrB5RHHPZRwdtfwr1PZO53T65HeGZg-7uhfjPxUXIFoVWmdAmTjHtXvw-3eR0wYidjX-9pCmGCw1qbuOlEYk4lBU7AEk0JkOjrQyauPqbJrMxgmbV5g");'></div>
  //                   <div class="absolute bottom-0 right-0 size-3 rounded-full border-2 border-slate-900 bg-emerald-500"></div>
  //                 </div>
  //                 <div class="flex-1 min-w-0">
  //                   <div class="flex justify-between items-baseline">
  //                     <h4 class="text-sm font-semibold text-slate-300 group-hover:text-white truncate">Esther Howard</h4>
  //                     <span class="text-[10px] text-slate-500">Monday</span>
  //                   </div>
  //                   <p class="text-xs text-slate-500 truncate">The presentation is ready for tomorrow's meeting.</p>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </aside>



  //         <main class="flex-1 flex flex-col bg-slate-dark">
  //           <div class="flex h-16 items-center justify-between border-b border-slate-border/30 px-6 bg-slate-900/50 backdrop-blur-sm shrink-0">
  //             <div class="flex items-center gap-3">
  //               <div class="relative">
  //                 <div class="size-10 rounded-full bg-cover bg-center ring-2 ring-slate-800" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBVo-kygx_GYa-P76PPpzAdgs4aJQl_cG9Wg5FzabsBO-ypuSraZWinQ4U0P5ALftkNsCL-UsU_Oqcg4zNvVkAPK4J4nCPv_DApkLpg5l7WHdfWeqquIOVIfnQVhEMUP7WoAhfmjQKmQK8zenXZVvMRxEvKvjwvC2WirBLtOA6Ncwac01qs_jUmNzoGOOtCOQg_bZ95aieksxMJRlY9EttVUHXv5Epexn00cJkI13TXlg2QzP8u5zHk4IAMDWBUj-uCb6m2cJsBCA");'></div>
  //                 <div class="absolute bottom-0 right-0 size-3 rounded-full border-2 border-slate-900 bg-emerald-500"></div>
  //               </div>
  //               <div>
  //                 <h2 class="text-base font-bold text-white leading-tight">Jane Smith</h2>
  //                 <p class="text-[10px] text-emerald-500 font-bold uppercase tracking-wider">Online</p>
  //               </div>
  //             </div>
  //             <div class="flex gap-2">
  //               <button class="flex size-9 items-center justify-center rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors">
  //                 <span class="material-symbols-outlined">videocam</span>
  //               </button>
  //               <button class="flex size-9 items-center justify-center rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors">
  //                 <span class="material-symbols-outlined">call</span>
  //               </button>
  //               <button class="flex size-9 items-center justify-center rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors">
  //                 <span class="material-symbols-outlined">search</span>
  //               </button>
  //             </div>
  //           </div>
  //           <div class="flex-1 overflow-y-auto p-6 space-y-8">
  //             <div class="flex items-end gap-3 max-w-[85%]">
  //               <div class="size-8 shrink-0 rounded-full bg-cover bg-center ring-1 ring-slate-700" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBVo-kygx_GYa-P76PPpzAdgs4aJQl_cG9Wg5FzabsBO-ypuSraZWinQ4U0P5ALftkNsCL-UsU_Oqcg4zNvVkAPK4J4nCPv_DApkLpg5l7WHdfWeqquIOVIfnQVhEMUP7WoAhfmjQKmQK8zenXZVvMRxEvKvjwvC2WirBLtOA6Ncwac01qs_jUmNzoGOOtCOQg_bZ95aieksxMJRlY9EttVUHXv5Epexn00cJkI13TXlg2QzP8u5zHk4IAMDWBUj-uCb6m2cJsBCA");'></div>
  //               <div class="flex flex-col gap-1.5 items-start">
  //                 <p class="text-slate-500 text-[11px] font-semibold ml-1">Jane Smith • 10:24 AM</p>
  //                 <div class="rounded-2xl rounded-bl-none bg-slate-800 border border-slate-700/50 px-4 py-3 text-sm leading-relaxed text-slate-200 shadow-sm">
  //                   Hi John! Have you seen the latest design components for the chat application? I've uploaded them to the workspace.
  //                 </div>
  //               </div>
  //             </div>
  //             <div class="flex items-end justify-end gap-3">
  //               <div class="flex flex-col gap-1.5 items-end max-w-[85%]">
  //                 <p class="text-slate-500 text-[11px] font-semibold mr-1 text-right">John Doe • 10:25 AM</p>
  //                 <div class="rounded-2xl rounded-br-none bg-primary px-4 py-3 text-sm leading-relaxed text-white shadow-lg shadow-primary/20">
  //                   Not yet, I'll check them right now. Are they in the "V3 Design" folder?
  //                 </div>
  //               </div>
  //               <div class="size-8 shrink-0 rounded-full bg-cover bg-center ring-1 ring-slate-700" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAXQQXwKyA0HSZbz-0TWpzUoXTuWMe0Vea8HDW8fJGdBmr8tCGDVsVhSI6irCSep8r4uzrIThRI5bWTUHY0Qp-WR0t8CHOpdDEYTqZCf8zJhmkh2GHtAYqSZuyRWMZawtFATPk0yeNrRXbkpu1-6R27at1p7CKFk4_6lMH3aNU5IRh6AcgxCVCN8NHhkaDylBaWrsLwA1WpR22_yhikdiX__8womienNpxzE6LyJ4PyOx-pq8bJOVQBVpPxdY0v08brqOJLxroK6Q");'></div>
  //             </div>
  //             <div class="flex items-end gap-3 max-w-[85%]">
  //               <div class="size-8 shrink-0 rounded-full bg-cover bg-center ring-1 ring-slate-700" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBVo-kygx_GYa-P76PPpzAdgs4aJQl_cG9Wg5FzabsBO-ypuSraZWinQ4U0P5ALftkNsCL-UsU_Oqcg4zNvVkAPK4J4nCPv_DApkLpg5l7WHdfWeqquIOVIfnQVhEMUP7WoAhfmjQKmQK8zenXZVvMRxEvKvjwvC2WirBLtOA6Ncwac01qs_jUmNzoGOOtCOQg_bZ95aieksxMJRlY9EttVUHXv5Epexn00cJkI13TXlg2QzP8u5zHk4IAMDWBUj-uCb6m2cJsBCA");'></div>
  //               <div class="flex flex-col gap-1.5 items-start">
  //                 <p class="text-slate-500 text-[11px] font-semibold ml-1">Jane Smith • 10:26 AM</p>
  //                 <div class="rounded-2xl rounded-bl-none bg-slate-800 border border-slate-700/50 px-4 py-3 text-sm leading-relaxed text-slate-200 shadow-sm">
  //                   Yes, exactly! I've added the dark mode variants as well. Let me know if the primary contrast works for you.
  //                 </div>
  //               </div>
  //             </div>
  //             <div class="flex items-end justify-end gap-3">
  //               <div class="flex flex-col gap-1.5 items-end max-w-[85%]">
  //                 <p class="text-slate-500 text-[11px] font-semibold mr-1 text-right">John Doe • 10:28 AM</p>
  //                 <div class="rounded-2xl rounded-br-none bg-primary px-4 py-3 text-sm leading-relaxed text-white shadow-lg shadow-primary/20">
  //                   Looks perfect. The new slate theme with indigo accents really pops. Great work!
  //                 </div>
  //               </div>
  //               <div class="size-8 shrink-0 rounded-full bg-cover bg-center ring-1 ring-slate-700" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAXQQXwKyA0HSZbz-0TWpzUoXTuWMe0Vea8HDW8fJGdBmr8tCGDVsVhSI6irCSep8r4uzrIThRI5bWTUHY0Qp-WR0t8CHOpdDEYTqZCf8zJhmkh2GHtAYqSZuyRWMZawtFATPk0yeNrRXbkpu1-6R27at1p7CKFk4_6lMH3aNU5IRh6AcgxCVCN8NHhkaDylBaWrsLwA1WpR22_yhikdiX__8womienNpxzE6LyJ4PyOx-pq8bJOVQBVpPxdY0v08brqOJLxroK6Q");'></div>
  //             </div>
  //           </div>
  //           <div class="p-6 bg-slate-900/50 border-t border-slate-border/30">
  //             <div class="flex items-center gap-2 bg-slate-800 rounded-2xl px-4 py-1.5 border border-slate-700/50 focus-within:border-primary/50 transition-colors shadow-inner">
  //               <div class="flex items-center gap-1">
  //                 <button class="p-2 text-slate-400 hover:text-primary transition-colors">
  //                   <span class="material-symbols-outlined text-[22px]">add_circle</span>
  //                 </button>
  //                 <button class="p-2 text-slate-400 hover:text-primary transition-colors">
  //                   <span class="material-symbols-outlined text-[22px]">image</span>
  //                 </button>
  //                 <button class="p-2 text-slate-400 hover:text-primary transition-colors">
  //                   <span class="material-symbols-outlined text-[22px]">mic</span>
  //                 </button>
  //               </div>
  //               <input class="flex-1 bg-transparent border-none focus:ring-0 text-sm py-3 text-slate-100 placeholder:text-slate-500" placeholder="Type your message here..." type="text" />
  //               <div class="flex items-center gap-2">
  //                 <button class="text-slate-400 hover:text-primary transition-colors">
  //                   <span class="material-symbols-outlined text-[22px]">mood</span>
  //                 </button>
  //                 <button class="flex items-center justify-center size-10 rounded-xl bg-primary text-white hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
  //                   <span class="material-symbols-outlined">send</span>
  //                 </button>
  //               </div>
  //             </div>
  //           </div>
  //         </main>
  //         <aside class="w-80 border-l border-slate-border/50 bg-slate-900 flex flex-col shrink-0">
  //           <div class="flex-1 overflow-y-auto">
  //             <div class="flex flex-col items-center p-8 text-center">
  //               <div class="relative mb-4">
  //                 <div class="size-28 rounded-full border-4 border-primary/20 p-1 bg-slate-800">
  //                   <div class="size-full rounded-full bg-cover bg-center shadow-inner" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBVo-kygx_GYa-P76PPpzAdgs4aJQl_cG9Wg5FzabsBO-ypuSraZWinQ4U0P5ALftkNsCL-UsU_Oqcg4zNvVkAPK4J4nCPv_DApkLpg5l7WHdfWeqquIOVIfnQVhEMUP7WoAhfmjQKmQK8zenXZVvMRxEvKvjwvC2WirBLtOA6Ncwac01qs_jUmNzoGOOtCOQg_bZ95aieksxMJRlY9EttVUHXv5Epexn00cJkI13TXlg2QzP8u5zHk4IAMDWBUj-uCb6m2cJsBCA");'></div>
  //                 </div>
  //                 <div class="absolute bottom-1 right-1 size-6 rounded-full border-4 border-slate-900 bg-emerald-500"></div>
  //               </div>
  //               <h1 class="text-xl font-bold text-white">Jane Smith</h1>
  //               <p class="text-sm text-emerald-500 font-medium">Online now</p>
  //             </div>
  //             <div class="px-6 space-y-6 pb-8">
  //               <div class="space-y-3">
  //                 <h3 class="text-[11px] font-bold uppercase tracking-wider text-slate-500">Chat Settings</h3>
  //                 <div class="space-y-1">
  //                   <button class="flex w-full items-center justify-between p-2.5 rounded-xl hover:bg-slate-800 transition-colors group">
  //                     <div class="flex items-center gap-3">
  //                       <span class="material-symbols-outlined text-slate-500 group-hover:text-primary">notifications</span>
  //                       <span class="text-sm font-medium text-slate-300">Mute Notifications</span>
  //                     </div>
  //                     <span class="material-symbols-outlined text-slate-600">chevron_right</span>
  //                   </button>
  //                   <button class="flex w-full items-center justify-between p-2.5 rounded-xl hover:bg-slate-800 transition-colors group">
  //                     <div class="flex items-center gap-3">
  //                       <span class="material-symbols-outlined text-slate-500 group-hover:text-primary">wallpaper</span>
  //                       <span class="text-sm font-medium text-slate-300">Change Wallpaper</span>
  //                     </div>
  //                     <span class="material-symbols-outlined text-slate-600">chevron_right</span>
  //                   </button>
  //                 </div>
  //               </div>
  //               <div class="space-y-3">
  //                 <h3 class="text-[11px] font-bold uppercase tracking-wider text-slate-500">Privacy &amp; Help</h3>
  //                 <div class="space-y-1">
  //                   <button class="flex w-full items-center justify-between p-2.5 rounded-xl hover:bg-slate-800 transition-colors group">
  //                     <div class="flex items-center gap-3">
  //                       <span class="material-symbols-outlined text-slate-500 group-hover:text-primary">lock</span>
  //                       <span class="text-sm font-medium text-slate-300">Encryption Details</span>
  //                     </div>
  //                     <span class="material-symbols-outlined text-slate-600">chevron_right</span>
  //                   </button>
  //                   <button class="flex w-full items-center justify-between p-2.5 rounded-xl hover:bg-slate-800 transition-colors group">
  //                     <div class="flex items-center gap-3">
  //                       <span class="material-symbols-outlined text-slate-500 group-hover:text-primary">help</span>
  //                       <span class="text-sm font-medium text-slate-300">Report a Problem</span>
  //                     </div>
  //                     <span class="material-symbols-outlined text-slate-600">chevron_right</span>
  //                   </button>
  //                 </div>
  //               </div>
  //               <div class="space-y-3">
  //                 <div class="flex items-center justify-between">
  //                   <h3 class="text-[11px] font-bold uppercase tracking-wider text-slate-500">Shared Photos</h3>
  //                   <button class="text-[10px] font-bold text-primary hover:underline">View All</button>
  //                 </div>
  //                 <div class="grid grid-cols-3 gap-2">
  //                   <div class="aspect-square rounded-lg bg-cover bg-center bg-slate-800" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBznR73zmx5bWMsUfEso_BgEzD2sRxzhKjJ7k-dpWeAX2PmkQ85xtnSJopFQS481gyyIVFlBlWnrBLSApTbZzlXunwyEkuYEyt_g5usqzgxqzKf5ajGNMvvqVbZdQdAkP3WEybH9oTuPU9VHavDwUiHhjsSSIt_bBZjyXJIeUfaIRZ0pEKLrtLIhZqIre0XlSC3WelFsc28Wu95jtd7EAv8hnfkTNO-KqnQmY7Wpm3YM9LKsqeb3XZrQiKfdzkRrk0R1SrRnPGl3Q");'></div>
  //                   <div class="aspect-square rounded-lg bg-cover bg-center bg-slate-800" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCXteP1CsbW7cdKl96pxPMym-8xzV5v8NHYzEEs1i3XI60lPPLkbOZW3lZO1MhPGzN9MzmmASv_Bfa5dntMFtUdf4b0ou9QdDCEH3ah4itkFtItJb9V3R0wti4mZhwngOLJuNRspKkZFyoUrJIjCg2K148IrB5RHHPZRwdtfwr1PZO53T65HeGZg-7uhfjPxUXIFoVWmdAmTjHtXvw-3eR0wYidjX-9pCmGCw1qbuOlEYk4lBU7AEk0JkOjrQyauPqbJrMxgmbV5g");'></div>
  //                   <div class="aspect-square rounded-lg bg-cover bg-center bg-slate-800" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuB_DhVmX7LMK_SQcWln4G1e63i88lOWOnzwMZ456fqay8flX2V28itUV9v96DhNmu5WXnC33t0sZsyiiYo7a7UB9SmaCsdFpsRCMdzkUkk-jUaxFt5L8pzDplxWzx9qbqRMNjiqXtce2peHnAnyQZJ9lZR_X9jnxAIU7nK6-e2thgp_hk-u9qtvtsVmrTbWppyQJpTNGd9FxefI5NuyszyJOWKJLOuNXxBe_EBjKiQ3Z84Ezk4cKucILwYDGYr6hSXhK2Qu0nXbDw");'></div>
  //                 </div>
  //               </div>
  //               <div class="space-y-3">
  //                 <div class="flex items-center justify-between">
  //                   <h3 class="text-[11px] font-bold uppercase tracking-wider text-slate-500">Shared Files</h3>
  //                   <button class="text-[10px] font-bold text-primary hover:underline">View All</button>
  //                 </div>
  //                 <div class="space-y-2">
  //                   <div class="flex items-center gap-3 p-2 rounded-xl bg-slate-800/50 border border-slate-700/50">
  //                     <div class="size-8 flex items-center justify-center rounded-lg bg-indigo-500/20 text-indigo-400">
  //                       <span class="material-symbols-outlined text-lg">description</span>
  //                     </div>
  //                     <div class="flex-1 min-w-0">
  //                       <p class="text-xs font-medium text-slate-200 truncate">Project_Brief_V2.pdf</p>
  //                       <p class="text-[10px] text-slate-500">1.2 MB • Oct 12</p>
  //                     </div>
  //                   </div>
  //                   <div class="flex items-center gap-3 p-2 rounded-xl bg-slate-800/50 border border-slate-700/50">
  //                     <div class="size-8 flex items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400">
  //                       <span class="material-symbols-outlined text-lg">data_table</span>
  //                     </div>
  //                     <div class="flex-1 min-w-0">
  //                       <p class="text-xs font-medium text-slate-200 truncate">User_Feedback.xlsx</p>
  //                       <p class="text-[10px] text-slate-500">845 KB • Oct 10</p>
  //                     </div>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //           <div class="p-4 border-t border-slate-border/30 bg-slate-900/80 backdrop-blur-sm space-y-2">
  //             <button class="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-red-500/5 py-2.5 text-xs font-bold text-red-500/70 hover:bg-red-500/10 hover:text-red-500 transition-all border border-red-500/10">
  //               <span class="material-symbols-outlined text-lg">block</span>
  //               <span>Block User</span>
  //             </button>
  //             <button class="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-slate-800 py-2.5 text-xs font-bold text-slate-300 hover:bg-slate-700 transition-all border border-slate-700/50">
  //               <span class="material-symbols-outlined text-lg">logout</span>
  //               <span>Log Out</span>
  //             </button>
  //           </div>
  //         </aside>
  //       </div>

  //     </body></html>
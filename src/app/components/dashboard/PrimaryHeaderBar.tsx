"use client";
import React, { ReactNode, useState } from "react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { AppBar, Avatar, Box, Drawer, Toolbar, styled } from "@mui/material";
import {
  MdLogout,
  MdOutlineSettings,
  MdSpaceDashboard,
  MdOutlineMarkUnreadChatAlt,
  MdOutlineNotifications,
} from "react-icons/md";
import {
  IoBookOutline,
  IoStarOutline,
  IoDocumentTextOutline,
} from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { HiMenuAlt1 } from "react-icons/hi";
import { RxDashboard } from "react-icons/rx";
import { LiaCertificateSolid } from "react-icons/lia";
import { RiArchiveStackLine } from "react-icons/ri";
import PrimaryButton from "@/app/components/dashboard/PrimaryButton";

const PrimaryHeaderBar = React.memo(function PrimaryHeaderBar({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const drawerWidth = 260;
  const { status, data: session } = useSession();
  const [profile, setProfile] = useState(false);
  const [drawer, setDrawer] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const drawerMenu = [
    { icon: RxDashboard, link: "/", name: "Dashboard" },
    { icon: IoBookOutline, link: "/my-courses", name: "Enrolled Course" },
    { icon: RiArchiveStackLine, link: "", name: "My Resorses" },
    { icon: MdOutlineMarkUnreadChatAlt, link: "", name: "Discussion forum" },
    { icon: LiaCertificateSolid, link: "", name: "My Certificates" },
    { icon: IoStarOutline, link: "", name: "Reviews" },
    { icon: MdOutlineNotifications, link: "", name: "Notifications" },
    { icon: IoDocumentTextOutline, link: "", name: "Statements" },
  ];
  const Main = styled("main", {
    shouldForwardProp: (prop) => prop !== "open",
  })<{
    open?: boolean;
  }>(({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }));
  return (
    <>
      <AppBar
        color="transparent"
        sx={{
          backgroundColor: "#fff",
          boxShadow: "0px 5px 21px -5px #CDD1E1",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        className="relative"
        position="fixed"
      >
        <Toolbar>
          <div className="w-56">
            <svg
              width="140"
              height="auto"
              viewBox="0 0 365 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M120.19 59.9C123.15 59.9 125.92 59.4 128.5 58.4C131.08 57.4 133.16 55.9 134.74 53.9C136.34 51.9 137.14 49.41 137.14 46.43C137.14 44.29 136.74 42.52 135.94 41.12C135.16 39.7 134.15 38.56 132.91 37.7C131.69 36.84 130.42 36.17 129.1 35.69C127.8 35.21 126.62 34.83 125.56 34.55L117.82 32.39C116.86 32.13 115.9 31.81 114.94 31.43C113.98 31.03 113.18 30.5 112.54 29.84C111.9 29.16 111.58 28.29 111.58 27.23C111.58 26.11 111.95 25.13 112.69 24.29C113.45 23.45 114.44 22.8 115.66 22.34C116.9 21.88 118.24 21.67 119.68 21.71C121.9 21.77 123.9 22.42 125.68 23.66C127.46 24.9 128.58 26.66 129.04 28.94L136.81 27.59C135.85 23.59 133.88 20.5 130.9 18.32C127.92 16.12 124.21 15 119.77 14.96C116.85 14.94 114.19 15.41 111.79 16.37C109.41 17.31 107.51 18.72 106.09 20.6C104.69 22.48 103.99 24.81 103.99 27.59C103.99 29.49 104.3 31.09 104.92 32.39C105.56 33.67 106.37 34.72 107.35 35.54C108.35 36.36 109.4 37.01 110.5 37.49C111.62 37.97 112.66 38.35 113.62 38.63L124.78 41.93C127.98 42.89 129.58 44.55 129.58 46.91C129.58 48.23 129.15 49.36 128.29 50.3C127.45 51.22 126.35 51.92 124.99 52.4C123.63 52.88 122.18 53.12 120.64 53.12C118.04 53.12 115.74 52.42 113.74 51.02C111.76 49.62 110.45 47.64 109.81 45.08L102.31 46.22C102.77 49.04 103.81 51.48 105.43 53.54C107.07 55.58 109.15 57.15 111.67 58.25C114.21 59.35 117.05 59.9 120.19 59.9ZM143.574 59H150.954V43.4L163.344 59H172.914L159.264 42.8L171.834 26.6H162.804L150.954 42.2V15.8H143.634L143.574 59ZM180.179 73.4H186.959L205.019 26.6H197.789L188.999 49.79L179.939 26.6H172.409L185.519 58.76L180.179 73.4ZM221.311 59.9C223.231 59.9 224.961 59.61 226.501 59.03C228.041 58.45 229.391 57.64 230.551 56.6V59H236.941V15.8H229.651V28.19C228.571 27.39 227.361 26.78 226.021 26.36C224.681 25.92 223.201 25.7 221.581 25.7C218.521 25.7 215.861 26.44 213.601 27.92C211.361 29.4 209.621 31.43 208.381 34.01C207.141 36.59 206.521 39.52 206.521 42.8C206.521 46.04 207.131 48.95 208.351 51.53C209.571 54.11 211.291 56.15 213.511 57.65C215.731 59.15 218.331 59.9 221.311 59.9ZM222.421 53.42C220.541 53.42 218.991 52.95 217.771 52.01C216.551 51.05 215.641 49.77 215.041 48.17C214.461 46.57 214.171 44.78 214.171 42.8C214.171 40.84 214.471 39.06 215.071 37.46C215.691 35.84 216.621 34.56 217.861 33.62C219.121 32.66 220.721 32.18 222.661 32.18C225.421 32.18 227.421 33.16 228.661 35.12C229.921 37.08 230.551 39.64 230.551 42.8C230.551 45.94 229.921 48.5 228.661 50.48C227.421 52.44 225.341 53.42 222.421 53.42ZM254.412 59.9C256.992 59.9 259.182 59.48 260.982 58.64C262.802 57.78 264.402 56.45 265.782 54.65V59H272.112V39.11C272.112 37.71 272.052 36.42 271.932 35.24C271.812 34.04 271.462 32.87 270.882 31.73C269.822 29.59 268.192 28.05 265.992 27.11C263.812 26.17 261.282 25.7 258.402 25.7C254.602 25.7 251.572 26.53 249.312 28.19C247.052 29.85 245.522 32.05 244.722 34.79L251.322 36.86C251.862 35.2 252.812 34.03 254.172 33.35C255.532 32.67 256.942 32.33 258.402 32.33C260.602 32.33 262.222 32.78 263.262 33.68C264.302 34.56 264.892 35.93 265.032 37.79C262.192 38.21 259.552 38.62 257.112 39.02C254.692 39.4 252.632 39.87 250.932 40.43C248.372 41.31 246.502 42.56 245.322 44.18C244.142 45.78 243.552 47.76 243.552 50.12C243.552 51.9 243.962 53.53 244.782 55.01C245.622 56.49 246.852 57.68 248.472 58.58C250.092 59.46 252.072 59.9 254.412 59.9ZM255.852 54.14C254.152 54.14 252.852 53.75 251.952 52.97C251.072 52.19 250.632 51.21 250.632 50.03C250.632 48.97 250.972 48.11 251.652 47.45C252.352 46.79 253.322 46.23 254.562 45.77C255.702 45.39 257.072 45.06 258.672 44.78C260.272 44.48 262.362 44.13 264.942 43.73C264.922 44.49 264.872 45.34 264.792 46.28C264.712 47.2 264.522 48.03 264.222 48.77C263.982 49.51 263.512 50.3 262.812 51.14C262.132 51.98 261.212 52.69 260.052 53.27C258.892 53.85 257.492 54.14 255.852 54.14ZM292.433 59.9C296.613 59.9 299.883 58.97 302.243 57.11C304.623 55.25 305.813 52.69 305.813 49.43C305.813 46.91 305.013 44.93 303.413 43.49C301.833 42.05 299.103 40.83 295.223 39.83C292.703 39.19 290.803 38.65 289.523 38.21C288.263 37.77 287.423 37.33 287.003 36.89C286.583 36.45 286.373 35.92 286.373 35.3C286.373 34.22 286.893 33.38 287.933 32.78C288.973 32.16 290.343 31.89 292.043 31.97C293.803 32.07 295.213 32.52 296.273 33.32C297.353 34.12 297.993 35.21 298.193 36.59L305.573 35.27C305.173 32.35 303.743 30.03 301.283 28.31C298.823 26.57 295.703 25.7 291.923 25.7C288.063 25.7 284.973 26.6 282.653 28.4C280.333 30.2 279.173 32.62 279.173 35.66C279.173 38.08 279.983 39.99 281.603 41.39C283.243 42.79 286.093 44.02 290.153 45.08C292.593 45.72 294.393 46.26 295.553 46.7C296.733 47.12 297.503 47.55 297.863 47.99C298.223 48.43 298.403 49.02 298.403 49.76C298.403 50.96 297.923 51.91 296.963 52.61C296.003 53.29 294.663 53.63 292.943 53.63C290.963 53.63 289.313 53.17 287.993 52.25C286.693 51.33 285.863 50.07 285.503 48.47L278.123 49.61C278.663 52.87 280.183 55.4 282.683 57.2C285.183 59 288.433 59.9 292.433 59.9ZM312.324 59H319.644V42.35C319.644 39.73 320.014 37.71 320.754 36.29C321.514 34.85 322.474 33.86 323.634 33.32C324.814 32.76 326.014 32.48 327.234 32.48C328.954 32.48 330.324 32.86 331.344 33.62C332.364 34.36 333.114 35.31 333.594 36.47C334.094 37.61 334.414 38.8 334.554 40.04C334.714 41.28 334.794 42.4 334.794 43.4V59H342.114V40.91C342.114 40.15 342.044 39.14 341.904 37.88C341.784 36.62 341.504 35.29 341.064 33.89C340.624 32.49 339.944 31.17 339.024 29.93C338.104 28.67 336.854 27.65 335.274 26.87C333.714 26.07 331.744 25.67 329.364 25.67C327.024 25.67 324.964 26.08 323.184 26.9C321.424 27.7 319.954 28.8 318.774 30.2V15.8H312.324V59Z"
                fill="#504B8E"
              />
              <circle cx="53.5" cy="36.5" r="36.5" fill="#D8E3FF" />
              <path
                d="M3.43651 12.0425C5.63232 12.2316 7.87829 12.7788 9.92735 14.1728C10.4109 14.576 10.9525 14.8862 11.3964 15.3781C11.8405 15.8591 12.3298 16.332 12.7064 16.8622C13.0606 17.3289 13.4047 17.7933 13.7386 18.2771C19.212 18.6508 24.6736 19.3881 30.0833 20.6322C33.8508 21.4791 37.5741 22.6347 41.2594 24.0012C44.4983 25.2983 47.7186 26.8565 50.7235 29.0196C41.603 19.039 31.7885 15.4665 27.1317 13.8558C16.9991 10.3487 7.94427 10.7712 1.39374 12.0144C2.06847 11.9888 2.75431 12.0048 3.43651 12.0425Z"
                fill="#504B8E"
              />
              <path
                d="M29.6337 23.8305C25.952 22.9304 22.2231 22.3062 18.4881 21.7691C17.5835 21.6347 16.679 21.5003 15.7789 21.4008C16.8632 23.1541 17.881 25.0088 18.8113 26.9191C18.9996 27.3051 19.1861 27.7041 19.3743 28.101C24.2552 28.4621 29.1319 29.1347 33.9746 30.2077L36.7441 30.9255L38.1262 31.2952L39.4955 31.7388L42.2324 32.6369C43.1424 32.9849 44.0405 33.3501 44.945 33.7285C48.5316 35.2352 52.0678 37.1267 55.3103 39.7375C57.9671 41.8501 60.4786 44.453 62.4359 47.6648C61.3012 44.9632 59.9406 42.1865 58.3161 39.415C56.192 36.434 53.6627 34.0269 50.9281 32.1159C47.6803 29.8819 44.1793 28.2239 40.5843 26.9698C36.9891 25.7288 33.3354 24.6134 29.6337 23.8305Z"
                fill="#504B8E"
              />
              <path
                d="M54.3269 41.9417C51.1357 39.7237 47.7379 37.9604 44.2168 36.6725L41.5898 35.6714L38.9171 34.8352L37.5757 34.4224L36.2216 34.0836L33.5217 33.406C29.894 32.5894 26.2426 31.9097 22.5698 31.4562C21.9652 31.3629 21.3587 31.2783 20.7504 31.2068C21.1777 32.1843 21.6035 33.0266 22.1355 33.7899C23.4403 35.6508 25.1018 37.0657 26.9724 37.9627C27.9042 38.4265 28.8713 38.7448 29.8922 39.0354L33.0483 39.9197L45.6553 43.6285L51.9336 45.5534C54.1242 46.3634 56.1813 47.6595 58.0231 49.3143C61.5847 52.5155 64.3584 56.8168 66.612 61.4247C65.7823 57.5422 64.462 53.8882 62.6337 50.7675C60.4634 47.0169 57.4857 44.2049 54.3269 41.9417Z"
                fill="#504B8E"
              />
            </svg>
          </div>
          <HiMenuAlt1
            size={26}
            color="#6C7383"
            className="cursor-pointer"
            onClick={() => setDrawer(!drawer)}
          />
          <div className="relative">
            <input
              name="search"
              type="text"
              placeholder="Search..."
              className="min-w-96 ml-8 ps-10 pr-4 py-2.5 text-sm text-[#6C7383] border border-[#CED4DA] outline-none rounded-xl"
            />
            <FiSearch
              size={20}
              className="absolute top-2.5 left-11"
              color="#6C7383"
            />
          </div>
          <nav className="mr-4 ml-auto text-sm text-text-light font-bold uppercase flex flex-row items-center gap-6">
            {status === "authenticated" && (
              <>
                <ul className="w-max flex flex-row items-center justify-start gap-12">
                  <li>
                    <Link href={"/my-courses"}>MY COURSES</Link>
                  </li>
                  <li>
                    <Link href={""}>MY RESOURCES</Link>
                  </li>
                </ul>
                <Avatar
                  alt={session?.user?.name || ""}
                  src={session?.user?.image || ""}
                  onClick={() => setProfile(!profile)}
                  sx={{ width: 40, height: 40 }}
                />
              </>
            )}
            {status === "unauthenticated" && (
              <>
                <ul className="w-max flex flex-row items-center justify-start gap-12">
                  <li>
                    <Link href={""}>Become an Instructor</Link>
                  </li>
                  <li>
                    <Link href={""}>LMS for Business</Link>
                  </li>
                </ul>
                <PrimaryButton title="Sign in" type="primary-outlined" />
                <PrimaryButton title="Sign up" type="primary" />
              </>
            )}
          </nav>
        </Toolbar>
        {profile && (
          <div className="default_header w-94 pt-4 pb-2 text-[#6C7383] flex flex-col items-stretch justify-start absolute top-full right-4 z-40 border border-solid border-light-border bg-white rounded-2xl shadow-auth-card">
            <div className="w-full min-w-0 mb-2 px-6 flex flex-row items-center justify-start gap-4">
              <Avatar
                alt={session?.user?.name || ""}
                src={session?.user?.image || ""}
                sx={{ width: 40, height: 40 }}
              />
              <div className="min-w-0 text-left flex flex-col items-stretch justify-center">
                <p className="text-label font-medium leading-tight flex items-center gap-1">
                  {session?.user?.name || ""}
                </p>
                <p className="text-label text-light font-medium leading-tight text-ellipsis whitespace-nowrap overflow-hidden flex items-center gap-1">
                  {session?.user?.email || ""}
                </p>
              </div>
            </div>
            <div className="flex flex-col items-stretch justify-start">
              <Link
                href={"/dashboard"}
                className="min-h-9 py-3.5 px-6 text-label-md text-light font-bold leading-tight tracking-wider inline-flex items-center flex-hr gap-6 border-0 outline-0 select-none transition-all duration-200 hover:bg-bg-light"
              >
                <MdSpaceDashboard size={17} />
                Dashboard
              </Link>
              <Link
                href={"profile"}
                className="min-h-9 py-3.5 px-6 text-label-md text-light font-bold leading-tight tracking-wider inline-flex items-center flex-hr gap-6 border-0 outline-0 select-none transition-all duration-200 hover:bg-bg-light"
              >
                <MdOutlineSettings size={17} />
                Manage Profile
              </Link>
              <button
                className="min-h-9 py-3.5 px-6 text-label-md text-light font-bold leading-tight tracking-wider inline-flex items-center flex-hr gap-6 border-0 outline-0 select-none transition-all duration-200 hover:bg-bg-light"
                onClick={() =>
                  signOut({
                    callbackUrl: "/sign-in",
                  })
                }
              >
                <MdLogout size={17} />
                Sign out
              </button>
            </div>
          </div>
        )}
      </AppBar>
      <Drawer
        open={drawer}
        variant="persistent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflowX: "hidden", overflowY: "auto" }}>
          <div className="mt-6 px-4 flex flex-col">
            {drawerMenu.map((menu, key) => (
              <Link
                key={key}
                href={menu.link}
                className={`mb-1 px-4 py-2.5 text-label text-text-default font-semibold whitespace-nowrap flex flex-row items-center gap-4 rounded-lg transition-all duration-100 ease-in-out ${
                  selectedIndex === key ? "text-white bg-primary" : ""
                } hover:text-white hover:bg-primary-hover`}
                onClick={() => setSelectedIndex(key)}
              >
                <menu.icon size={18} /> {menu.name}
              </Link>
            ))}
          </div>
        </Box>
      </Drawer>
      <Main
        open={drawer}
        sx={{
          marginLeft: !drawer ? "0" : "260px",
        }}
      >
        {children}
      </Main>
    </>
  );
});

PrimaryHeaderBar.displayName = "PrimaryHeaderBarComponent";

export default PrimaryHeaderBar;

// import Link from "next/link";
// import styled from "styled-components";
// import { useRouter } from "next/router";
// import DropdownMenu from "./DropdownMenu";
// import { useIsTabletOrMobile } from "../hooks";

// const StyledLink = styled.a`
//   text-decoration: none;
//   padding: 2.5rem;
//   font-size: 1.6rem;
//   color: ${(props) =>
//     props.isActive
//       ? props.theme.colors.oliveDrab72
//       : props.theme.colors.nickel};
//   @media (max-width: 1438px) {
//     display: flex;
//     align-items: center;
//     padding: 1rem;
//   }
// `;

// const MobileHome = styled.div`
//   display: flex;
//   flex-direction: column;
//   font-size: 1rem;
// `;

// const NavUl = styled.ul`
//   display: flex;
//   flex-direction: row;
//   justify-content: flex-end;
//   align-items: center;
//   margin: 0;
//   padding: 0;
//   background-color: #ffffff;
//   margin-left: 3rem;
//   margin-right: 3rem;
//   @media (max-width: 1438px) {
//     padding: 0;
//     margin: 0;
//     bottom: 0;
//     margin-left: 1rem;
//     margin-right: 1rem;
//   }
// `;

// const NavLi = styled.li`
//   display: flex;
//   align-items: center;
//   margin: 0;
//   padding: 0;
//   height: 6rem;
//   ${(props) => props.left && "margin-right: auto;"};
// `;

// const NavItem = ({ href, children, left }) => {
//   const router = useRouter();
//   const isActive = router.asPath === href;
//   return (
//     <NavLi left={left}>
//       <Link href={href} passHref>
//         <StyledLink isActive={isActive}>{children}</StyledLink>
//       </Link>
//     </NavLi>
//   );
// };

// const Header = ({ copy }) => {
//   const isTabletOrMobile = useIsTabletOrMobile();
//   const { navBar = {} } = copy;
//   const homeDivided = (navBar.home || "").split(" ");
//   return (
//     <header>
//       <NavUl>
//         {!isTabletOrMobile && (
//           <NavItem href="/" left>
//             {navBar.home}
//           </NavItem>
//         )}

//         {!isTabletOrMobile && (
//           <>
//             <NavItem href="/about">{navBar.about}</NavItem>
//             <NavItem href="/portfolio">{navBar.portfolio}</NavItem>
//             <NavItem href="/services">{navBar.services}</NavItem>
//             <NavItem href="/contact">{navBar.contact}</NavItem>
//           </>
//         )}

//         {/* Mobile */}
//         {isTabletOrMobile && (
//           <>
//             <NavItem href="/" left>
//               <MobileHome>
//                 {homeDivided.map((word) => (
//                   <div key={word}>{word}</div>
//                 ))}
//               </MobileHome>
//             </NavItem>
//             {isTabletOrMobile && <DropdownMenu />}
//           </>
//         )}
//       </NavUl>
//     </header>
//   );
// };
// export default Header;

<template>
  <NavbarWrapper>
    <NavbarComponent :selected="selectedSection">
        <NavItem><NavLink href="#profile">Home</NavLink></NavItem>
        <NavItem><NavLink href="#about-me">About Me</NavLink></NavItem>
        <NavItem><NavLink href="#projects">Projects</NavLink></NavItem>
    </NavbarComponent>
  </NavbarWrapper>
</template>

<script>
import styled from 'vue-styled-components';
import { Theme } from '../assets/style';


// Styled components
const NavbarWrapper = styled.nav`
  z-index: 10;
  position: fixed;
  top: 1.5rem;
  right: 4rem;

  @media(max-width: 1024px) {
    right: 2rem;
  }
`;

const propsNavbar = { selected: Number };

const NavbarComponent = styled('ul', propsNavbar)`
  font: ${Theme.font.bigText};
  color: ${Theme.color.lightGray};
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;

  &::before {
    content: '';
    height: 0.15rem;
    border-radius: 0.1rem;
    width: 2.5rem;
    background-color: ${Theme.color.orange};
    position: absolute;
    bottom: -0.5rem;
    left: 2rem;
    margin-left: ${props => `${6.5 * parseInt(props.selected, 10)}rem`};
    transition: all .2s ease-in-out;
  }
`;

const NavItem = styled.li`
  width: 6.5rem;
  text-align: center;
  transition: all .2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  transition: all .2s ease-in-out;
  color: ${Theme.color.lightGray};

  &:hover {
    transform: scale(1.1);
  }
`;

// Scroll tracking function
const elementInViewport = (el) => {
  const elTop = el.offsetTop;
  const elHeight = el.offsetHeight;
  const pageTop = window.pageYOffset;

  // eslint-disable-next-line no-mixed-operators
  if (pageTop > elTop - 100 && pageTop < elTop + elHeight - 100) {
    return true;
  }
  return false;
};


export default {
  name: 'Navbar',
  components: {
    NavbarWrapper,
    NavbarComponent,
    NavItem,
    NavLink,
  },
  data() {
    return {
      selectedSection: 0,
    };
  },
  created() {
    document.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    document.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      ['profile', 'about-me', 'projects'].forEach((sectionName, index) => {
        const el = document.getElementById(sectionName);

        if (elementInViewport(el)) {
          this.selectedSection = index;
        }
      });
    },
  },
};
</script>

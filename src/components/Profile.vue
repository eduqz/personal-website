<template>
  <ProfileWrapper>
    Teste
  </ProfileWrapper>
</template>

<script>
import styled from 'vue-styled-components';

const ProfileWrapper = styled.div`
    background-color: blue;
`;

export default {
  name: 'Profile',
  components: {
    ProfileWrapper,
  },
};
</script>

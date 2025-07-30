import styled from "@emotion/styled";

export const StyleWrapper = styled.div`
  .fc-toolbar {
    @media (max-width: 580px) {
      flex-direction: column;
      gap: 12px 0;
    }
  }

  .fc .fc-toolbar-title {
    text-align: center;
  }
`;

"use client";

import styled from "styled-components";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  background: radial-gradient(circle at 50% 0%, #1e293b 0%, #090d16 75%);
  color: #f8fafc;
  padding: 2rem;
`;

const Card = styled.div`
  padding: 3.5rem 4.5rem;
  border-radius: 1.5rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(12px);
  text-align: center;
`;

const Badge = styled.span`
  display: inline-block;
  padding: 0.35rem 0.85rem;
  margin-bottom: 1.25rem;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #38bdf8;
  background: rgba(56, 189, 248, 0.1);
  border: 1px solid rgba(56, 189, 248, 0.25);
  border-radius: 9999px;
`;

const Title = styled.h1`
  margin: 0;
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  background: linear-gradient(135deg, #ffffff 0%, #94a3b8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Subtitle = styled.p`
  margin-top: 1rem;
  font-size: 1rem;
  color: #64748b;
`;

export default function Home() {
  return (
    <Container>
      <Card>
        <Badge>Next.js App Router + styled-components</Badge>
        <Title>Hello World</Title>
        <Subtitle>SSR 스타일 레지스트리가 정상적으로 연동되었습니다.</Subtitle>
      </Card>
    </Container>
  );
}

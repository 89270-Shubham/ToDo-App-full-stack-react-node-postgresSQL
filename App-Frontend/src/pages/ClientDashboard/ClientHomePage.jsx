import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";

export default function ClientHomePage() {
  return (
    <Wrapper>
      {/* Header Section */}
      <Header>
        <h1>Welcome Back 👋</h1>
        <p>Track your tasks, stay productive, and keep everything organized.</p>
      </Header>

      {/* Quick Actions */}
      <QuickActions>
        <ActionCard whileHover={{ y: -4 }}>
          <h3>Create Task</h3>
          <p>Quickly add a new task to your list.</p>
        </ActionCard>

        <ActionCard whileHover={{ y: -4 }}>
          <h3>My Lists</h3>
          <p>Manage your categories and task lists.</p>
        </ActionCard>

        <ActionCard whileHover={{ y: -4 }}>
          <h3>Completed</h3>
          <p>Review tasks you finished.</p>
        </ActionCard>
      </QuickActions>

      {/* Today Tasks */}
      <SectionTitle>Today's Tasks</SectionTitle>
      <TaskList>
        <TaskCard whileHover={{ scale: 1.01 }}>
          <input type="checkbox" />
          <div>
            <TaskName>Finish UI for To-Do App</TaskName>
            <TaskTime>Due Today • 4:00 PM</TaskTime>
          </div>
        </TaskCard>

        <TaskCard whileHover={{ scale: 1.01 }}>
          <input type="checkbox" />
          <div>
            <TaskName>Client meeting</TaskName>
            <TaskTime>Due Today • 6:00 PM</TaskTime>
          </div>
        </TaskCard>
      </TaskList>

      {/* Upcoming */}
      <SectionTitle>Upcoming Tasks</SectionTitle>
      <TaskList>
        <TaskCard whileHover={{ scale: 1.01 }}>
          <input type="checkbox" />
          <div>
            <TaskName>Prepare Marketing Report</TaskName>
            <TaskTime>Tomorrow • 10:00 AM</TaskTime>
          </div>
        </TaskCard>
      </TaskList>

      {/* Stats */}
      <SectionTitle>Productivity Summary</SectionTitle>
      <StatsGrid>
        <StatCard whileHover={{ y: -4 }}>
          <h2>12</h2>
          <p>Tasks Completed</p>
        </StatCard>

        <StatCard whileHover={{ y: -4 }}>
          <h2>5</h2>
          <p>Pending Tasks</p>
        </StatCard>

        <StatCard whileHover={{ y: -4 }}>
          <h2>87%</h2>
          <p>Weekly Productivity</p>
        </StatCard>
      </StatsGrid>

      {/* Floating Add Button */}
      <AddButton whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.9 }}>
        <Plus size={25} />
      </AddButton>
    </Wrapper>
  );
}

/* ----------------------------- Styled Components ---------------------------- */

const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
  max-width: 1000px;
  margin: auto;
  color: white;
`;

const Header = styled.div`
  margin-bottom: 35px;

  h1 {
    font-size: 32px;
    font-weight: 700;
  }

  p {
    margin-top: 8px;
    color: rgba(255, 255, 255, 0.7);
  }
`;

const QuickActions = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 40px;
  flex-wrap: wrap;
`;

const ActionCard = styled(motion.div)`
  background: #111418;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 20px;
  flex: 1;
  min-width: 250px;
  cursor: pointer;
  transition: 0.2s all ease;

  h3 {
    font-size: 18px;
    margin-bottom: 6px;
  }

  p {
    color: rgba(255, 255, 255, 0.6);
  }
`;

const SectionTitle = styled.h2`
  margin: 25px 0 15px;
  font-size: 20px;
  font-weight: 600;
`;

const TaskList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const TaskCard = styled(motion.div)`
  background: #0f1215;
  padding: 15px;
  border-radius: 10px;
  display: flex;
  gap: 12px;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.08);

  input {
    width: 18px;
    height: 18px;
    accent-color: #2f81f7;
  }
`;

const TaskName = styled.div`
  font-size: 16px;
  font-weight: 500;
`;

const TaskTime = styled.div`
  font-size: 12px;
  color: rgba(200, 200, 200, 0.7);
`;

const StatsGrid = styled.div`
  display: flex;
  gap: 20px;
  margin: 20px 0 50px;
  flex-wrap: wrap;
`;

const StatCard = styled(motion.div)`
  background: #111418;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 20px;
  flex: 1;
  min-width: 200px;
  text-align: center;

  h2 {
    font-size: 32px;
    margin-bottom: 5px;
  }

  p {
    color: rgba(255, 255, 255, 0.6);
  }
`;

const AddButton = styled(motion.button)`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 55px;
  height: 55px;
  background: #2f81f7;
  border: none;
  border-radius: 50%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0px 4px 18px rgba(47, 129, 247, 0.3);
`;

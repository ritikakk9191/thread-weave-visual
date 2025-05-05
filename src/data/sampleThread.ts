
interface ThreadNode {
  id: string;
  name: string;
  text: string;
  sentiment: 'positive' | 'neutral' | 'negative';
  stance: 'support' | 'rebut' | 'tangent';
  children?: ThreadNode[];
}

export const sampleThreadData: ThreadNode = {
  id: "root",
  name: "Original Poster",
  text: "I think remote work is more productive than working in an office. No commute, fewer distractions, and better work-life balance.",
  sentiment: "positive",
  stance: "support",
  children: [
    {
      id: "reply1",
      name: "User1",
      text: "I agree! I've been working remotely for 2 years and my productivity has increased significantly.",
      sentiment: "positive",
      stance: "support",
      children: [
        {
          id: "reply1-1",
          name: "User4",
          text: "Same here. I can focus much better without office distractions.",
          sentiment: "positive",
          stance: "support",
        },
        {
          id: "reply1-2",
          name: "User5",
          text: "I think it depends on your role. Some jobs need face-to-face collaboration.",
          sentiment: "neutral",
          stance: "rebut",
        }
      ]
    },
    {
      id: "reply2",
      name: "User2",
      text: "I disagree. Remote work leads to isolation and hurts team cohesion. I'm much less productive at home.",
      sentiment: "negative",
      stance: "rebut",
      children: [
        {
          id: "reply2-1",
          name: "User6",
          text: "Have you tried using collaboration tools? They've solved many of these problems for our team.",
          sentiment: "neutral",
          stance: "rebut",
        },
        {
          id: "reply2-2",
          name: "User7",
          text: "I feel the same way. I need the structure of an office environment to stay focused.",
          sentiment: "negative",
          stance: "support",
        }
      ]
    },
    {
      id: "reply3",
      name: "User3",
      text: "Has anyone tried a hybrid approach? 2-3 days in office, rest remote?",
      sentiment: "neutral",
      stance: "tangent",
      children: [
        {
          id: "reply3-1",
          name: "User8",
          text: "Yes, we do this at my company. Best of both worlds!",
          sentiment: "positive",
          stance: "support",
          children: [
            {
              id: "reply3-1-1",
              name: "User9",
              text: "What days do you go in? We're trying to figure out the best schedule.",
              sentiment: "neutral",
              stance: "tangent",
            }
          ]
        },
        {
          id: "reply3-2",
          name: "User10",
          text: "Hybrid is expensive for companies. They pay for office space that's half empty.",
          sentiment: "negative",
          stance: "rebut",
        }
      ]
    }
  ]
};

export default sampleThreadData;

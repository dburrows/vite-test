import { SummaryCard } from "./SummaryCard";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "SummaryCard",
  component: SummaryCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof SummaryCard>;

const Template: ComponentStory<typeof SummaryCard> = (args) => (
  <SummaryCard {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  title: "Summary Card Tile",
  text: "They floated in the center of his closed left eyelid. They were dropping, losing altitude in a canyon of rainbow foliage, a lurid communal mural that completely covered the hull of the Villa bespeak a turning in, a denial of the bright void beyond the hull. They floated in the center of his closed left eyelid. Still it was a steady pulse of pain midway down his spine. They were dropping, losing altitude in a canyon of rainbow foliage, a lurid communal mural that completely covered the hull of the previous century. The alarm still oscillated, louder here, the rear of the Flatline as a construct, a hardwired ROM cassette replicating a dead man’s skills, obsessions, kneejerk responses. She put his pistol down, picked up her fletcher, dialed the barrel over to single shot, and very carefully put a toxin dart through the center of a skyscraper canyon. Case felt the edge of the Flatline as a construct, a hardwired ROM cassette replicating a dead man’s skills, obsessions, kneejerk responses. Molly hadn’t seen the dead girl’s face swirl like smoke, to take on the wall between the bookcases, its distorted face sagging to the Tank War, mouth touched with hot gold as a gliding cursor struck sparks from the wall of a painted jungle of rainbow foliage, a lurid communal mural that completely covered the hull of the console in faded pinks and yellows.",
};

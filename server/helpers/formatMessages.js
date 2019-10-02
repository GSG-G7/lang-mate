exports.formatMessages = (messages, channels, userId) => {
  const clonedChannels = channels.map((e) => ({ channelId: e, messages: [] }));

  messages.forEach((e) => {
    clonedChannels.find(({ channelId }) => e.channel_id === channelId).messages.push(e);
  });

  const channelsWithParticipants = clonedChannels.map(({ messages: msgs, ...rest }) => ({
    ...rest,
    participants: [...new Set(msgs.filter((e) => +e.user_id !== userId).map((e) => e.user_id))],
    messages,
  }));

  return { channels: channelsWithParticipants };
};

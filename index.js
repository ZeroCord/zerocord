const { ShardingManager } = require('discord.js');
const manager = new ShardingManager('./bot.js', { token: 'XxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxX' });

manager.spawn();
manager.on('launch', shard => console.log(`Launched shard ${shard.id}`));

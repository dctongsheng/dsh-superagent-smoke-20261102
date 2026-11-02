# DSH Superagent smoke test

Public, disposable test fixture for dsh-superagent. Contains no application data or credentials.

Run `npm test` with Node.js 22 or newer. The initial `add` implementation intentionally subtracts; the agent should fix it in a pull request. An unmerged fix does not change `main`.

## 提交测试任务

1. 在本仓库创建一个 Issue，记下编号。建议每个独立任务使用一个新 Issue。
2. 打开 **Actions → Run Superagent task → Run workflow**，分支保持 `main`。
3. 填写 **Issue 编号** 和 **任务内容**，点击 **Run workflow**。
4. 在该 Issue 查看任务评论、处理结果和 PR；本地 Superagent 面板可查看详细进度。

无需修改 workflow、任务标记或评估规则。示例任务：

> 修复 src/add.js，让 add(a,b) 返回两数之和；保持现有测试不变，运行 npm test，并创建 PR，不要合并。

本机 Superagent 服务需要保持运行，评估模式为 `auto` 且未暂停。当前测试配置只处理本仓库、由此手动入口发送且带 `[DSH_MANUAL_TASK]` 的机器人任务；并发为 1。可在本地面板暂停处理。

Actions 成功表示任务评论已发出，不代表模型已完成。Issue 编号必须是已打开的 Issue（不能填 PR），任务内容最多 6000 字符。每次新运行会生成独立 Request ID；对同一 Actions 运行点 **Re-run jobs** 不会重复发任务。对同一 Issue 连续提交任务可能共享讨论上下文，建议等前一任务完成；重复且已完成的工作可能被模型忽略。

生成的 PR 由人工检查和合并。测试入口不会自动合并 PR，也不允许任务修改 workflow。

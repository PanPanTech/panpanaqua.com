# 将 panpanaqua.com 绑定到 GitHub Pages（阿里云 DNS）

本文说明如何把域名 **panpanaqua.com** 解析到 GitHub 仓库 `PanPanTech/panpanaqua.com` 的 GitHub Pages。今天先备好记录；若阿里云或 GitHub 在添加自定义域名时要求验证码或验证值，可等明天查收后再写入，不必在今天编造任何验证字符串。

请勿在未获授权时登录阿里云或改动生产解析。本文只提供应填写的记录。

---

## 一、在 GitHub 仓库中先做的设置

1. 将本目录作为仓库根目录推送到 `main` 分支（本包不负责推送）。
2. 打开仓库 **Settings → Pages**。
3. Source 选择 **Deploy from a branch**，Branch 选择 `main`，文件夹选择 `/ (root)`，保存。
4. 在 Custom domain 中填写 `panpanaqua.com` 并保存。GitHub 可能接着要求一条 **DNS TXT 域名验证记录**。验证值只有在这一步之后才会生成，**请不要预先编造**。
5. DNS 生效并且 GitHub 显示域名已验证后，勾选 **Enforce HTTPS**。不要在证书尚未签发时强行开启后又立刻关掉再改记录。

项目站点在未绑定自定义域名时的默认地址是 `https://panpantech.github.io/panpanaqua.com/`。绑定 `panpanaqua.com` 后，以自定义域名为准。仓库根目录已包含 `CNAME` 文件，内容恰好为：

```
panpanaqua.com
```

也已包含 `.nojekyll`，避免 GitHub 的 Jekyll 处理忽略以下划线开头的路径。

---

## 二、在阿里云 DNS 中添加的记录

登录阿里云 **域名 → panpanaqua.com → DNS 解析 / 云解析 DNS**（界面名称以控制台为准），在切换期建议把 TTL 设为 **600 秒**（10 分钟），稳定后再酌情提高到 3600 秒或默认值。

### 1. 根域名（@）IPv4 A 记录

主机记录均为 `@`（即 `panpanaqua.com`），记录类型 `A`，记录值分别为当前 GitHub Pages 的 IPv4 地址（四条都要加）：

| 主机记录 | 类型 | 记录值 | TTL（切换期） |
| --- | --- | --- | --- |
| `@` | A | `185.199.108.153` | 600 |
| `@` | A | `185.199.109.153` | 600 |
| `@` | A | `185.199.110.153` | 600 |
| `@` | A | `185.199.111.153` | 600 |

### 2. 根域名（@）IPv6 AAAA 记录

| 主机记录 | 类型 | 记录值 | TTL（切换期） |
| --- | --- | --- | --- |
| `@` | AAAA | `2606:50c0:8000::153` | 600 |
| `@` | AAAA | `2606:50c0:8001::153` | 600 |
| `@` | AAAA | `2606:50c0:8002::153` | 600 |
| `@` | AAAA | `2606:50c0:8003::153` | 600 |

### 3. www 的 CNAME

对用户/项目 Pages 站点，`www` 应 CNAME 到该 GitHub 用户的 Pages 主机名：

| 主机记录 | 类型 | 记录值 | TTL（切换期） |
| --- | --- | --- | --- |
| `www` | CNAME | `panpantech.github.io` | 600 |

记录值不要再加 `https://`，也不要写成 `panpantech.github.io/panpanaqua.com`。末尾的点按阿里云界面要求填写（有的控制台会自动补齐）。

### 4. GitHub 域名验证 TXT（明天很可能需要，取值先留空）

GitHub 在 Settings → Pages 中保存自定义域名 `panpanaqua.com` 之后，通常会给出一条 TXT 验证记录。常见主机记录形如：

| 主机记录 | 类型 | 记录值 | TTL |
| --- | --- | --- | --- |
| `_github-pages-challenge-PanPanTech` | TXT | **（留空，勿编造。以 GitHub Pages 设置页当时显示的值为准）** | 600 |

说明：

- 主机记录也可能略有不同，**以 GitHub 页面上显示的主机名和值为准**。
- **取值（VALUE）只有添加域名之后才会生成。本文故意不填写。** 这通常就是需要等到明天查收 / 在 Pages 设置里复制的那一项。
- 若 GitHub 同时提示在阿里云或域名注册商处接收验证码、短信或邮件，按提示完成后再把 TXT 写入 DNS。
- 验证通过后，不要删除这条 TXT，除非 GitHub 明确要求轮换。

---

## 三、生效后的检查

1. 用 `dig panpanaqua.com A`、`dig panpanaqua.com AAAA`、`dig www.panpanaqua.com CNAME`（或阿里云的 DNS 查询工具）确认已指向上述地址。
2. 打开 https://panpanaqua.com/ 与 https://www.panpanaqua.com/ ，确认两者都进入本站点，且浏览器地址栏为自定义域名。
3. 打开 https://panpanaqua.com/ar/ 确认阿拉伯语首页和语言切换可用。
4. 在 GitHub Pages 设置中确认 Certificate 已签发，然后打开 **Enforce HTTPS**。
5. 用手机网络再访问一次，避免只看到本机缓存。

若根域名暂时打不开而 `www` 已通，多半是 A / AAAA 未齐或还在 TTL 等待；不要改用错误的 CNAME 去指向 apex（根域名不能稳定地 CNAME 到 GitHub）。

---

## English summary

Bind **panpanaqua.com** to GitHub Pages for the repository `PanPanTech/panpanaqua.com`.

In the repo: Settings → Pages, deploy `main` from `/ (root)`, set the custom domain to `panpanaqua.com`, then enable **Enforce HTTPS** after DNS and the certificate are ready. The site root already has a `CNAME` file containing exactly `panpanaqua.com`, and a `.nojekyll` file.

In Alibaba Cloud DNS, during cutover use a **TTL of 600 seconds**, and add:

- Four apex **A** records for `@`: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`.
- Four apex **AAAA** records for `@`: `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`.
- A **CNAME** for `www` pointing to `panpantech.github.io` (not `panpantech.github.io/panpanaqua.com`).

GitHub may also require a **TXT** domain-verification record, often hosted at `_github-pages-challenge-PanPanTech`. The **value is generated only after the custom domain is added in Settings → Pages**. Do not invent that value. Leave it blank until tomorrow if a verification code or Pages-generated string must be collected first. Use the host name and value GitHub actually displays.

This document does not log into Aliyun; it only lists the records to enter.

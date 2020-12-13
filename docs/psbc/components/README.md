# 组件

### ALERTS

> border 透明度 50%，background 透明度 9%

<div class="alert alert-primary mb-1">常用的提示信息！</div>
<div class="alert alert-info mb-1">通知类的提示信息！</div>
<div class="alert alert-warning mb-1">警告的提示信息！</div>
<div class="alert alert-danger mb-1">错误的提示信息！</div>
<div class="alert alert-secondary mb-1">其他类的提示信息！</div>

### BORDER

#### 深色

<div class="border-color-dark p-1">
    <small>border-color 深色</small><br> #d3d5d8
</div>

#### 浅色

<div class="border-color-light p-1">
    <small>border-color 浅色</small><br> #f2f2f3
</div>

#### 圆角

<div class="columns">
    <div class="column">
        <div class="border-color-dark border-rounded p-1">
            <small>border-radius 默认</small><br> border-radius: 5px
        </div>
    </div>
    <div class="column">
        <div class="border-color-light border-rounded p-1">
            <small>border-radius 默认</small><br> border-radius: 5px
        </div>
    </div>
</div>

### BUTTON

按钮颜色

<button class="btn btn-primary">按钮</button>
<button class="btn btn-dark">按钮</button>
<button class="btn btn-secondary">按钮</button>
<button class="btn btn-danger">按钮</button>
<button class="btn btn-warning">按钮</button>
<button class="btn btn-info">按钮</button>

<button class="btn btn-outline-primary">按钮</button>
<button class="btn btn-outline-dark">按钮</button>
<button class="btn btn-outline-secondary">按钮</button>
<button class="btn btn-outline-danger">按钮</button>
<button class="btn btn-outline-warning">按钮</button>
<button class="btn btn-outline-info">按钮</button>

DISABLED

<button class="btn btn-primary" disabled>按钮</button>
<button class="btn btn-dark" disabled>按钮</button>
<button class="btn btn-secondary" disabled>按钮</button>
<button class="btn btn-danger" disabled>按钮</button>
<button class="btn btn-warning" disabled>按钮</button>
<button class="btn btn-info" disabled>按钮</button>

<button class="btn btn-outline-primary" disabled>按钮</button>
<button class="btn btn-outline-dark" disabled>按钮</button>
<button class="btn btn-outline-secondary" disabled>按钮</button>
<button class="btn btn-outline-danger" disabled>按钮</button>
<button class="btn btn-outline-warning" disabled>按钮</button>
<button class="btn btn-outline-info" disabled>按钮</button>

### INPUT

<input class="input" type="text" placeholder="请输入...">
<input class="input" type="text" placeholder="readonly..." readonly>
<input class="input" type="text" placeholder="Disabled..." disabled>

应用场景

<input class="input input-primary" type="text" placeholder="请输入...">
<input class="input input-danger" type="text" placeholder="请输入...">
<input class="input input-warning" type="text" placeholder="请输入...">


### SELECT

<select class="select" aria-label="Default select example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
<select class="select" aria-label="Default select example" disabled>
  <option selected>Disabled</option>
</select>

### CHECKS

> 控件纯 css 调整，仅颜色参考即可

#### CHECKBOX

<label class="check-label">
    <input class="check" type="checkbox" checked> 多选
</label>
<label class="check-label">
    <input class="check" type="checkbox"> 多选
</label>

Disabled

<label class="check-label">
    <input class="check" type="checkbox" checked disabled> 多选
</label>
<label class="check-label">
    <input class="check" type="checkbox" disabled> 多选
</label>

#### RADIO

<label class="check-label">
    <input class="check" type="radio" name="radio" value="1" checked> 单选
</label>
<label class="check-label">
    <input class="check" type="radio" name="radio" value="2"> 单选
</label>

Disabled

<label class="check-label">
    <input class="check" type="radio" name="radio-dis" value="1" checked disabled> 单选
</label>
<label class="check-label">
    <input class="check" type="radio" name="radio-dis" value="2" disabled> 单选
</label>


### TABLE

<table class="table">
  <thead>
  <tr>
    <th><input class="check" type="checkbox"></th>
    <th>Name</th>
    <th>Genre</th>
    <th>Release date</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td><input class="check" type="checkbox"></td>
    <td>The Shawshank Redemption</td>
    <td>Crime, Drama</td>
    <td>14 October 1994</td>
  </tr>
  </tbody>
</table>
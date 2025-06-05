### **How to Install and Run Node.js in VS Code**  
---

## **Step 1: Install Node.js**
1. **Download Node.js** from the official website:  
   🔗 [https://nodejs.org](https://nodejs.org)  
   - Choose the **LTS (Long-Term Support)** version for stability.  

2. **Run the installer** and follow the steps (keep default settings).  

3. **Verify Installation** (Open Terminal / Command Prompt):  
   ```sh
   node --version  # Should show version (e.g., v20.x.x)
   npm --version   # Node Package Manager (comes with Node.js)
   ```

---

## **Step 2: Install Extensions Code** 
1. **Install Useful Extensions** (Optional but Recommended):  
   - **JavaScript (ES6) code snippets**  
   - **Node.js Extension Pack**  
   - **ESLint** (for code linting)  

---

## **Step 3: Create a Node.js Project**
1. **Open VS Code** → Open a folder (`Ctrl+K Ctrl+O`).  
2. **Create a new file** (`Ctrl+N`) → Save as `app.js`.  
3. **Write a simple script** (e.g., `console.log("Hello, Node.js!");`).  

---

## **Step 4: Run Node.js in VS Code**
### **Method 1: Using the Terminal**
1. Open **VS Code Terminal** (`Ctrl+` ` ` ` `).  
2. Run:  
   ```sh
   node app.js
   ```
   - Output: `Hello, Node.js!`  

### **Method 2: Using VS Code’s Run & Debug**
1. Click the **Run and Debug** icon (left panel).  
2. Click **"Run and Debug"** → Select **"Node.js"**.  
3. VS Code will execute `app.js` and show output in the **Debug Console**.  

### **Method 3: Using Nodemon (Auto-Restart on Changes)**
1. Install **Nodemon** (global tool for auto-reloading):  
   ```sh
   npm install -g nodemon
   ```
2. Run your script with:  
   ```sh
   nodemon app.js
   ```
   - Now, any changes to `app.js` will **automatically restart Node.js**.  

---

## **Step 5: Debugging Node.js in VS Code**
1. Set a **breakpoint** (click left of line numbers).  
2. Press `F5` or click **"Run and Debug"**.  
3. Use the debugger controls (step over, inspect variables, etc.).  



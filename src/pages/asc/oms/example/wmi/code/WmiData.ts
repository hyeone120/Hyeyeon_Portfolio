export const pythonCode = `server_wmi = wmi.WMI()

//CPU 수집
cpuUsage = server_wmi.Win32_Processor()[0].LoadPercentage

//Memory 수집
os = server_wmi.Win32_OperatingSystem()[0]
memoryUsage = round(
    (float(os.TotalVisibleMemorySize) - float(os.FreePhysicalMemory)) / (1024 ** 2), 2
)

//Disk 수집
disk = server_wmi.Win32_LogicalDisk()[0]
usageDisk = round(
    (float(disk.size) - float(disk.freeSpace)) / (1024 ** 3), 2
)`;

export const backendCode = `@Autowired
private SimpMessagingTemplate messagingTemplate;

messagingTemplate.convertAndSend("/sub/data", serverHashMap);`;

export const frontendCode = `useEffect(() => {
  const stompClient = Stomp.over(
    new SockJS(\`\${process.env.REACT_APP_API_HOST}/webSocket\`)
  );

  stompClient.connect({}, () => {
    stompClient.subscribe("/sub/data", (message) => {
      const data = JSON.parse(message.body);
      setSocketWmi(data);
    });
  });

  return () => stompClient.disconnect();
}, []);`;
